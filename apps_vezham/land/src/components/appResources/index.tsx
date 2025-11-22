'use client'

import { Icon } from '@iconify/react'
import { Route, useRouter, useSearch } from '@tanstack/react-router'
import React, { useCallback, useEffect, useRef, useState } from 'react'

import { forwardRef } from '@vezham/react-utils'

import {
  Badge,
  Button,
  Form,
  Image,
  TextAreaProps,
  Textarea,
  Tooltip,
  VisuallyHidden,
  cn
} from '@vx-oss/react'

import { useResources } from '../../store/useResources'
import { NavbarTabs } from '../tabs'
import { HelpCenter } from './help-center'
import { Support } from './support'
import {
  PromptInputAssetsProps,
  PromptSuggestion,
  Props,
  useProps
} from './types'

const PromptInput = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ classNames = {}, ...props }, ref) => {
    return (
      <Textarea
        ref={ref}
        aria-label="Prompt"
        className="min-h-[20px]"
        classNames={{
          ...classNames,
          label: cn('hidden', classNames?.label),
          input: cn('py-0', classNames?.input)
        }}
        minRows={1}
        placeholder="Enter a prompt here"
        radius="lg"
        variant="bordered"
        {...props}
      />
    )
  }
)

const PromptInputAssets = ({
  assets,
  onRemoveAsset,
  getBadgeProps,
  getBadgeButtonProps,
  getImageProps
}: PromptInputAssetsProps & {
  getBadgeProps: () => any
  getBadgeButtonProps: () => any
  getImageProps: () => any
}) => {
  if (assets.length === 0) return null

  return (
    <>
      {assets.map((asset, index) => (
        <Badge
          key={index}
          isOneChar
          {...getBadgeProps()}
          content={
            <Button
              isIconOnly
              radius="full"
              size="sm"
              variant="light"
              {...getBadgeButtonProps()}
              onPress={() => onRemoveAsset(index)}>
              <Icon
                className="text-foreground"
                icon="iconamoon:close-thin"
                width={16}
              />
            </Button>
          }>
          <Image alt="uploaded image" {...getImageProps()} src={asset} />
        </Badge>
      ))}
    </>
  )
}

const PromptInputFullLineComponent = ({
  prompt,
  setPrompt,
  onSearch,
  isSearching,
  onClearSearch
}: {
  prompt: string
  setPrompt: React.Dispatch<React.SetStateAction<string>>
  onSearch: (query: string) => void
  isSearching: boolean
  onClearSearch: () => void
}) => {
  const {
    getPromptInputFullLineBaseProps,
    getAssetsContainerProps,
    getInputWrapperProps,
    getInputProps,
    getInnerWrapperProps,
    getBottomBarProps,
    getFileButtonProps,
    getSubmitButtonProps,
    getSubmitButtonIconProps,
    getSearchButtonProps,
    getSearchButtonIconProps,
    getBadgeProps,
    getBadgeButtonProps,
    getImageProps,
    getButtonProps
  } = useProps({})

  const [assets, setAssets] = useState<string[]>([])
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!prompt.trim()) {
      onClearSearch()
    }
  }, [prompt, onClearSearch])

  const handleSubmit = useCallback(() => {
    if (!prompt) return

    setPrompt('')
    inputRef?.current?.focus()
  }, [prompt, setPrompt])

  const handleSearch = useCallback(() => {
    if (!prompt) return
    onSearch(prompt)
  }, [prompt, onSearch])

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      handleSubmit()
    },
    [handleSubmit]
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        if (e.ctrlKey || e.metaKey) {
          handleSearch()
        } else {
          handleSubmit()
        }
      }
    },
    [handleSubmit, handleSearch]
  )

  const handlePaste = useCallback(async (e: React.ClipboardEvent) => {
    const items = Array.from(e.clipboardData.items)

    for (const item of items) {
      if (item.type.indexOf('image') !== -1) {
        const blob = item.getAsFile()
        if (!blob) continue

        const reader = new FileReader()
        reader.onload = () => {
          const base64data = reader.result as string
          setAssets(prev => [...prev, base64data])
        }
        reader.readAsDataURL(blob)
      }
    }
  }, [])

  const handleFileUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || [])
      files.forEach(file => {
        if (file.type.startsWith('image/')) {
          const reader = new FileReader()
          reader.onload = () => {
            const base64data = reader.result as string
            setAssets(prev => [...prev, base64data])
          }
          reader.readAsDataURL(file)
        }
      })

      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    },
    []
  )

  return (
    <Form
      {...getPromptInputFullLineBaseProps()}
      validationBehavior="native"
      onSubmit={onSubmit}>
      <div {...getAssetsContainerProps(assets.length > 0)}>
        <PromptInputAssets
          assets={assets}
          onRemoveAsset={index => {
            setAssets(prev => prev.filter((_, i) => i !== index))
          }}
          getBadgeProps={getBadgeProps}
          getBadgeButtonProps={getBadgeButtonProps}
          getImageProps={getImageProps}
        />
      </div>
      <PromptInput
        ref={inputRef}
        autoFocus
        classNames={{
          innerWrapper: getInnerWrapperProps().className,
          input: getInputProps().className,
          inputWrapper: getInputWrapperProps().className
        }}
        maxRows={16}
        minRows={2}
        name="content"
        radius="lg"
        spellCheck={false}
        value={prompt}
        variant="flat"
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        onValueChange={setPrompt}
      />
      <div {...getBottomBarProps()}>
        <Tooltip showArrow content="Attach Files">
          <Button
            isIconOnly
            radius="full"
            size="sm"
            variant="light"
            {...getFileButtonProps()}
            onPress={() => fileInputRef.current?.click()}>
            <Icon
              className="text-default-500"
              icon="solar:paperclip-outline"
              width={24}
            />
            <VisuallyHidden>
              <input
                ref={fileInputRef}
                multiple
                accept="image/*"
                type="file"
                onChange={handleFileUpload}
              />
            </VisuallyHidden>
          </Button>
        </Tooltip>

        <div {...getButtonProps()}>
          <Button
            isIconOnly
            color={!prompt ? 'primary' : 'default'}
            isDisabled={!prompt}
            radius="full"
            size="sm"
            type="submit"
            variant="solid"
            {...getSubmitButtonProps()}>
            <Icon
              {...getSubmitButtonIconProps(!!prompt)}
              icon="solar:arrow-up-linear"
              width={20}
            />
          </Button>
          <Tooltip
            showArrow
            content="Search across Help Center and Support Plans">
            <Button
              isIconOnly
              color={!prompt ? 'default' : 'primary'}
              isDisabled={!prompt}
              radius="full"
              size="sm"
              variant="solid"
              isLoading={isSearching}
              {...getSearchButtonProps()}
              onPress={handleSearch}>
              <Icon
                {...getSearchButtonIconProps(!!prompt)}
                icon={isSearching ? 'solar:loading-linear' : 'lucide:search'}
                width={16}
              />
            </Button>
          </Tooltip>
        </div>
      </div>
    </Form>
  )
}

const PromptSuggestions = ({
  onSelect
}: {
  onSelect?: (suggestion: PromptSuggestion) => void
}) => {
  const {
    getSuggestionsBaseProps,
    getSuggestionButtonProps,
    getSuggestionButtonIconProps
  } = useProps({})

  const { data: resources } = useResources.list({})

  const suggestions = resources?.promptsuggest ?? []

  return (
    <div {...getSuggestionsBaseProps()}>
      {suggestions.map(suggestion => (
        <Button
          key={suggestion.id}
          {...getSuggestionButtonProps()}
          startContent={
            <Icon
              {...getSuggestionButtonIconProps()}
              icon={suggestion.icon}
              width={18}
            />
          }
          size="sm"
          variant="light"
          onPress={() => onSelect?.(suggestion)}>
          {suggestion.label}
        </Button>
      ))}
    </div>
  )
}

const ResourcesComp = forwardRef<'div', Props>((props, ref) => {
  const [prompt, setPrompt] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  const { getResourcesBaseProps, getResourcesTitleProps, getTabProps } =
    useProps({
      ...props,
      ref
    })

  const handleSuggestionSelect = (suggestion: PromptSuggestion) => {
    setPrompt(`Help me ${suggestion.label.toLowerCase()} ?`)
  }

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
    if (!query.trim()) {
      setSearchQuery('')
      return
    }

    setIsSearching(true)
    setSearchQuery(query)

    await new Promise(resolve => setTimeout(resolve, 500))

    setIsSearching(false)
  }, [])

  const handleClearSearch = useCallback(() => {
    setSearchQuery('')
  }, [])

  return (
    <>
      <div {...getResourcesBaseProps()}>
        <h1 {...getResourcesTitleProps()}>How can I help you today ?</h1>
        <PromptInputFullLineComponent
          prompt={prompt}
          setPrompt={setPrompt}
          onSearch={handleSearch}
          onClearSearch={handleClearSearch}
          isSearching={isSearching}
        />
        <PromptSuggestions onSelect={handleSuggestionSelect} />
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
