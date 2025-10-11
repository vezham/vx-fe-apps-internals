import { Icon } from '@iconify/react'
import React from 'react'

import { Input } from '@vx-oss/react'

export const HeroBanner: React.FC = () => {
  return (
    <div className="from-zoho-blue relative w-full bg-gradient-to-br to-blue-800 py-30 text-white">
      {/* Hero content */}
      <div className="flex flex-col items-center justify-center px-4 text-center">
        <h1 className="mx-auto max-w-4xl text-3xl leading-tight font-bold md:text-5xl">
          All the software you need to run your business
        </h1>
        {/* Removed yellow line */}
      </div>

      <div className="right-0 bottom-0 left-0 z-10 translate-y-1/2 px-4">
        <div className="mx-auto w-full max-w-3xl">
          {/* Replace custom input with HeroUI Input */}
          <Input
            variant="flat"
            size="lg"
            radius="md"
            placeholder="I'm looking for..."
            startContent={
              <Icon
                icon="lucide:search"
                className="text-default-400"
                width={24}
              />
            }
            classNames={{
              base: 'shadow-lg',
              inputWrapper: 'h-14 bg-white',
              input: 'text-lg'
            }}
          />
        </div>
      </div>
    </div>
  )
}
