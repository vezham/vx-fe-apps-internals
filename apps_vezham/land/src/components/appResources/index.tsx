'use client'

import { useRouter, useSearch } from '@tanstack/react-router'
import React, { useCallback, useState } from 'react'

import { forwardRef } from '@vezham/react-utils'

import { Input } from '@vx-oss/react'

import { useResources } from '../../store/useResources'
import { NavbarTabs } from '../tabs'
import { HelpCenter } from './help-center'
import { Support } from './support'
import { Props, useProps } from './types'

const SearchBar = ({
  searchValue,
  setSearchValue,
  onSearch
}: {
  searchValue: string
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  onSearch: (query: string) => void
}) => {
  const handleInput = (value: string) => {
    setSearchValue(value)
    onSearch(value)
  }

  return (
    <div className="mt-4 flex items-center gap-2">
      <Input
        value={searchValue}
        onValueChange={handleInput}
        radius="lg"
        variant="bordered"
        placeholder="Search..."
      />
    </div>
  )
}

const ResourcesComp = forwardRef<'div', Props>((props, ref) => {
  const [searchValue, setSearchValue] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  const { getResourcesBaseProps, getResourcesTitleProps, getTabProps } =
    useProps({
      ...props,
      ref
    })

  const router = useRouter()

  const { tab } = useSearch({ from: '/vezham/resources' })
  const selectedTab = tab ?? 'help-center'

  const { data: resources } = useResources.list({})
  const tabs = resources?.tabs ?? []

  const handleSelectionChange = (key: string) => {
    setSearchQuery('')
    router.navigate({
      from: '/vezham/resources',
      search: prev => ({
        ...prev,
        tab: key
      }),
      replace: true
    })
  }

  const handleSearch = useCallback(async (query: string) => {
    const trimmed = query.trim()

    if (!trimmed) {
      setSearchQuery('')
      return
    }

    setIsSearching(true)

    await new Promise(resolve => setTimeout(resolve, 300))

    setSearchQuery(trimmed)
    setIsSearching(false)
  }, [])

  return (
    <>
      <div {...getResourcesBaseProps()}>
        <h1 {...getResourcesTitleProps()}>How can I help you today ?</h1>

        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onSearch={handleSearch}
        />
      </div>

      <div {...getTabProps()}>
        <NavbarTabs
          items={tabs}
          selectedTab={selectedTab}
          onSelectionChange={handleSelectionChange}
        />
      </div>

      <div>
        {selectedTab === 'help-center' && (
          <HelpCenter
            searchQuery={searchQuery}
            onSearchQueryChange={setSearchQuery}
          />
        )}

        {selectedTab === 'support-plans' && (
          <Support
            searchQuery={searchQuery}
            onSearchQueryChange={setSearchQuery}
          />
        )}
      </div>
    </>
  )
})

ResourcesComp.displayName = 'ResourcesComp'
export { ResourcesComp }
