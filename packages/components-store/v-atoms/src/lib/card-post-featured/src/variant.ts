// import { VariantProps, tv } from '@vezham/react-utils'
// const tva = tv({
//   slots: {
//     base: 'mb-10 items-start justify-start gap-10 p-2',
//     wrapper: 'relative p-0',
//     card: 'h-full w-full shadow-lg',
//     content: 'prose prose-slate prose-sm dark:prose-dark text-default-500'
//   },
//   variants: {
//     responsiveness: {
//       true: '',
//       false: ''
//     },
//     orientation: {
//       horizontal: '',
//       vertical: ''
//     }
//   },
//   defaultVariants: {
//     responsiveness: true,
//     orientation: 'horizontal'
//   },
//   compoundVariants: [
//     {
//       responsiveness: true,
//       orientation: 'horizontal',
//       class: {
//         base: 'vcard-post-grid-container grid grid-cols-1',
//         wrapper: 'flex flex-col items-start',
//         card: ''
//       }
//     },
//     {
//       responsiveness: false,
//       orientation: 'horizontal',
//       class: {
//         base: 'vcard-post-grid-container grid',
//         wrapper: 'flex flex-col items-start',
//         card: ''
//       }
//     },
//     {
//       responsiveness: true,
//       orientation: 'vertical',
//       class: {
//         base: 'grid py-6',
//         wrapper: 'flex flex-col items-start',
//         card: 'row-start-1 w-80 md:w-96'
//       }
//     },
//     {
//       responsiveness: false,
//       orientation: 'vertical',
//       class: {
//         base: 'grid py-6',
//         wrapper: 'flex flex-col items-start',
//         card: 'row-start-1 w-80 md:w-96'
//       }
//     }
//   ]
// })
// type tvProps = VariantProps<typeof tva>
// type tvSlots = keyof ReturnType<typeof tva>
// export { tva }
// export type { tvProps, tvSlots }
import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'mb-10 grid grid-cols-4 items-start justify-start gap-10 overflow-x-auto p-2 sm:grid-cols-2 md:grid-cols-3',
    wrapper: 'relative p-0',
    card: 'h-full w-full shadow-lg',
    content: 'prose prose-slate prose-sm dark:prose-dark text-default-500',
    tag_wrapper: 'vcard-tag-wrapper'
  },
  variants: {
    responsiveness: {
      true: '',
      false: ''
    },
    orientation: {
      horizontal: '',
      vertical: ''
    },

    device_size: {
      mob_sm: '',
      mob: '',
      mob_l: '',
      mob_xl: '',
      tab: '',
      tab_l: '',
      lap: '',
      desk: ''
    },

    direction: {
      ltr: '',
      rtl: ''
    }
  },
  defaultVariants: {
    responsiveness: true,
    orientation: 'vertical',
    device_size: 'desk',
    direction: 'ltr'
  }
  // compoundVariants: [
  //   {
  //     responsiveness: true,
  //     orientation: 'horizontal',
  //     class: {
  //       base: 'vcard-post-grid-container grid grid-cols-1',
  //       wrapper: 'flex flex-col items-start',
  //       card: ''
  //     }
  //   },
  //   {
  //     responsiveness: false,
  //     orientation: 'horizontal',
  //     class: {
  //       base: 'vcard-post-grid-container grid',
  //       wrapper: 'flex flex-col items-start',
  //       card: ''
  //     }
  //   },
  //   {
  //     responsiveness: true,
  //     orientation: 'vertical',
  //     class: {
  //       base: 'grid py-6',
  //       wrapper: 'flex flex-col items-start',
  //       card: 'row-start-1 w-80 md:w-96'
  //     }
  //   },
  //   {
  //     responsiveness: false,
  //     orientation: 'vertical',
  //     class: {
  //       base: 'grid py-6',
  //       wrapper: 'flex flex-col items-start',
  //       card: 'row-start-1 w-80 md:w-96'
  //     }
  //   },

  //   {
  //     device_size: ['desk', 'lap', 'tab_l'],
  //     class: {
  //       base: 'grid-cols-3'
  //     }
  //   },

  //   {
  //     device_size: ['mob_xl', 'mob_l', 'tab'],
  //     class: {
  //       base: 'grid-cols-2'
  //     }
  //   },

  //   {
  //     class: {
  //       tag_wrapper: '[&_span]:p-0'
  //     }
  //   },

  //   {
  //     direction: 'ltr',
  //     class: {
  //       content: 'text-left'
  //     }
  //   },

  //   {
  //     direction: 'rtl',
  //     class: {
  //       content: 'text-right'
  //     }
  //   }
  // ]
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
