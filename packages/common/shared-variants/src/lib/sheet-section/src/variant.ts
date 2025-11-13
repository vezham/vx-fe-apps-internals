// import { tv } from '@vezham/react-utils'
// const tva = tv({
//   slots: {
//     base: 'vs-section',
//     wrapper_super_title: 'vs-st',
//     // wjdlz/NOTE: Heading
//     wrapper_title: 'vs-title',
//     wrapper_description: 'vs-desc',
//     // wjdlz/NOTE: CTA - btn, input
//     wrapper_cta: 'vs-cta-action',
//     wrapper_cta_hint: 'vs-cta-hint vc-text'
//   },
//   variants: {
//     color: {
//       transparent: 'bg-transparent',
//       default: {
//         wrapper_super_title: 'text-default-foreground',
//         wrapper_title: 'text-default-foreground',
//         wrapper_description: 'text-default-foreground/95',
//         wrapper_cta_hint: 'text-default-foreground/95'
//       },
//       primary: {
//         wrapper_super_title: 'text-primary-foreground',
//         wrapper_title: 'text-primary-foreground',
//         wrapper_description: 'text-primary-foreground/95',
//         wrapper_cta_hint: 'text-primary-foreground/95'
//       },
//       success: {
//         wrapper_super_title: 'text-success-foreground',
//         wrapper_title: 'text-success-foreground',
//         wrapper_description: 'text-success-foreground/95',
//         wrapper_cta_hint: 'text-success-foreground/95'
//       },
//       warning: {
//         wrapper_super_title: 'text-warning-foreground',
//         wrapper_title: 'text-warning-foreground',
//         wrapper_description: 'text-warning-foreground/95',
//         wrapper_cta_hint: 'text-warning-foreground/95'
//       },
//       danger: {
//         wrapper_super_title: 'text-danger-foreground',
//         wrapper_title: 'text-danger-foreground',
//         wrapper_description: 'text-danger-foreground/95',
//         wrapper_cta_hint: 'text-danger-foreground/95'
//       },
//       info: {
//         wrapper_super_title: 'text-info-foreground',
//         wrapper_title: 'text-info-foreground',
//         wrapper_description: 'text-info-foreground/95',
//         wrapper_cta_hint: 'text-info-foreground/95'
//       }
//     },
//     bg_effect: {
//       solid: '', // none
//       flat: '',
//       faded: 'vfaded',
//       gallery: 'vgallery'
//     },
//     dir_effect: {
//       top: '',
//       bottom: '',
//       left: '',
//       right: ''
//     }
//   },
//   compoundVariants: [
//     // wjdlz/NOTE: for dir_effect
//     {
//       bg_effect: ['flat', 'faded'],
//       dir_effect: 'top',
//       class: {
//         base: 'bg-linear-to-t'
//       }
//     },
//     {
//       bg_effect: ['flat', 'faded'],
//       dir_effect: 'bottom',
//       class: {
//         base: 'bg-linear-to-b'
//       }
//     },
//     {
//       bg_effect: ['flat', 'faded'],
//       dir_effect: 'left',
//       class: {
//         base: 'bg-linear-to-l'
//       }
//     },
//     {
//       bg_effect: ['flat', 'faded'],
//       dir_effect: 'right',
//       class: {
//         base: 'bg-linear-to-r'
//       }
//     },
//     // wjdlz/NOTE: for bg_effect - solid
//     {
//       color: 'default',
//       bg_effect: 'solid',
//       class: {
//         base: 'bg-default',
//         wrapper_description: 'text-default-foreground/75',
//         wrapper_cta_hint: 'text-default-foreground/75'
//       }
//     },
//     {
//       color: 'primary',
//       bg_effect: 'solid',
//       class: {
//         base: 'bg-primary',
//         wrapper_description: 'text-primary-foreground/75',
//         wrapper_cta_hint: 'text-primary-foreground/75'
//       }
//     },
//     {
//       color: 'success',
//       bg_effect: 'solid',
//       class: {
//         base: 'bg-success',
//         wrapper_description: 'text-success-foreground/75',
//         wrapper_cta_hint: 'text-success-foreground/75'
//       }
//     },
//     {
//       color: 'warning',
//       bg_effect: 'solid',
//       class: {
//         base: 'bg-warning',
//         wrapper_description: 'text-warning-foreground/75',
//         wrapper_cta_hint: 'text-warning-foreground/75'
//       }
//     },
//     {
//       color: 'danger',
//       bg_effect: 'solid',
//       class: {
//         base: 'bg-danger',
//         wrapper_description: 'text-danger-foreground/75',
//         wrapper_cta_hint: 'text-danger-foreground/75'
//       }
//     },
//     {
//       color: 'info',
//       bg_effect: 'solid',
//       class: {
//         base: 'bg-info',
//         wrapper_description: 'text-info-foreground/75',
//         wrapper_cta_hint: 'text-info-foreground/75'
//       }
//     },
//     // wjdlz/NOTE: for bg_effect - flat | TODO - recheck hex
//     {
//       color: 'default',
//       bg_effect: 'flat',
//       class: {
//         base: 'from-default to-default/85'
//       }
//     },
//     {
//       color: 'primary',
//       bg_effect: 'flat',
//       class: {
//         base: 'from-primary to-primary/85'
//       }
//     },
//     {
//       color: 'success',
//       bg_effect: 'flat',
//       class: {
//         base: 'from-success to-success/85'
//       }
//     },
//     {
//       color: 'warning',
//       bg_effect: 'flat',
//       class: {
//         base: 'from-warning to-warning/85'
//       }
//     },
//     {
//       color: 'danger',
//       bg_effect: 'flat',
//       class: {
//         base: 'from-danger to-danger/85'
//       }
//     },
//     {
//       color: 'info',
//       bg_effect: 'flat',
//       class: {
//         base: 'from-info to-info/85'
//       }
//     },
//     // wjdlz/NOTE: for bg_effect - faded
//     {
//       color: 'default',
//       bg_effect: 'faded',
//       class: {
//         base: 'to-default/10 from-default'
//       }
//     },
//     {
//       color: 'primary',
//       bg_effect: 'faded',
//       class: {
//         // base: 'to-primary dark:to-primary from-primary/10 dark:from-primary/10'
//         base: 'from-primary dark:from-primary to-white/10 dark:to-black/10'
//       }
//     },
//     {
//       color: 'success',
//       bg_effect: 'faded',
//       class: {
//         base: 'to-success/10 from-success'
//       }
//     },
//     {
//       color: 'warning',
//       bg_effect: 'faded',
//       class: {
//         base: 'to-warning/10 from-warning'
//       }
//     },
//     {
//       color: 'danger',
//       bg_effect: 'faded',
//       class: {
//         base: 'to-danger/10 from-danger'
//       }
//     },
//     {
//       color: 'info',
//       bg_effect: 'faded',
//       class: {
//         base: 'to-info/10 from-info'
//       }
//     },
//     // wjdlz/NOTE: for bg_effect - gallery | TODO - recheck hex
//     {
//       color: 'default',
//       bg_effect: 'gallery',
//       class: {
//         base: 'vcv-default'
//       }
//     },
//     {
//       color: 'primary',
//       bg_effect: 'gallery',
//       class: {
//         base: 'vcv-primary'
//       }
//     },
//     {
//       color: 'success',
//       bg_effect: 'gallery',
//       class: {
//         base: 'vcv-success'
//       }
//     },
//     {
//       color: 'warning',
//       bg_effect: 'gallery',
//       class: {
//         base: 'vcv-warning'
//       }
//     },
//     {
//       color: 'danger',
//       bg_effect: 'gallery',
//       class: {
//         base: 'vcv-danger'
//       }
//     },
//     {
//       color: 'info',
//       bg_effect: 'gallery',
//       class: {
//         base: 'vcv-info'
//       }
//     }
//   ],
//   defaultVariants: {
//     color: 'primary',
//     bg_effect: 'solid',
//     dir_effect: 'bottom'
//   }
// })
// // type tvProps = VariantProps<typeof tva>
// // type tvSlots = keyof ReturnType<typeof tva>
// export { tva }
import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'vs-section',
    wrapper_super_title: 'vs-st',
    wrapper_title: 'vs-title',
    wrapper_description: 'vs-desc',
    wrapper_cta: 'vs-cta-action',
    wrapper_cta_hint: 'vs-cta-hint vc-text'
  },
  variants: {
    color: {
      transparent: {
        base: 'bg-transparent'
      },
      default: {
        wrapper_super_title: 'text-foreground',
        wrapper_title: 'text-foreground',
        wrapper_description: 'text-foreground/95',
        wrapper_cta_hint: 'text-foreground/95'
      },
      primary: {
        wrapper_super_title: 'text-primary-foreground',
        wrapper_title: 'text-primary-foreground',
        wrapper_description: 'text-primary-foreground/95',
        wrapper_cta_hint: 'text-primary-foreground/95'
      },
      success: {
        wrapper_super_title: 'text-success-foreground',
        wrapper_title: 'text-success-foreground',
        wrapper_description: 'text-success-foreground/95',
        wrapper_cta_hint: 'text-success-foreground/95'
      },
      warning: {
        wrapper_super_title: 'text-warning-foreground',
        wrapper_title: 'text-warning-foreground',
        wrapper_description: 'text-warning-foreground/95',
        wrapper_cta_hint: 'text-warning-foreground/95'
      },
      danger: {
        wrapper_super_title: 'text-danger-foreground',
        wrapper_title: 'text-danger-foreground',
        wrapper_description: 'text-danger-foreground/95',
        wrapper_cta_hint: 'text-danger-foreground/95'
      },
      info: {
        wrapper_super_title: 'text-info-foreground',
        wrapper_title: 'text-info-foreground',
        wrapper_description: 'text-info-foreground/95',
        wrapper_cta_hint: 'text-info-foreground/95'
      }
    },
    bg_effect: {
      solid: '', // none
      flat: '',
      faded: 'vfaded',
      gallery: 'vgallery'
    },
    dir_effect: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  },
  compoundVariants: [
    // Direction effects
    {
      bg_effect: ['flat', 'faded'],
      dir_effect: 'top',
      class: {
        base: 'bg-linear-to-t'
      }
    },
    {
      bg_effect: ['flat', 'faded'],
      dir_effect: 'bottom',
      class: {
        base: 'bg-linear-to-b'
      }
    },
    {
      bg_effect: ['flat', 'faded'],
      dir_effect: 'left',
      class: {
        base: 'bg-linear-to-l'
      }
    },
    {
      bg_effect: ['flat', 'faded'],
      dir_effect: 'right',
      class: {
        base: 'bg-linear-to-r'
      }
    },

    // Solid background effects
    {
      color: 'default',
      bg_effect: 'solid',
      class: {
        base: 'bg-default',
        wrapper_description: 'text-default-foreground/75',
        wrapper_cta_hint: 'text-default-foreground/75'
      }
    },
    {
      color: 'primary',
      bg_effect: 'solid',
      class: {
        base: 'bg-primary',
        wrapper_description: 'text-primary-foreground/75',
        wrapper_cta_hint: 'text-primary-foreground/75'
      }
    },
    {
      color: 'success',
      bg_effect: 'solid',
      class: {
        base: 'bg-success',
        wrapper_description: 'text-success-foreground/75',
        wrapper_cta_hint: 'text-success-foreground/75'
      }
    },
    {
      color: 'warning',
      bg_effect: 'solid',
      class: {
        base: 'bg-warning',
        wrapper_description: 'text-warning-foreground/75',
        wrapper_cta_hint: 'text-warning-foreground/75'
      }
    },
    {
      color: 'danger',
      bg_effect: 'solid',
      class: {
        base: 'bg-danger',
        wrapper_description: 'text-danger-foreground/75',
        wrapper_cta_hint: 'text-danger-foreground/75'
      }
    },
    {
      color: 'info',
      bg_effect: 'solid',
      class: {
        base: 'bg-info',
        wrapper_description: 'text-info-foreground/75',
        wrapper_cta_hint: 'text-info-foreground/75'
      }
    },

    // Flat background effects
    {
      color: 'default',
      bg_effect: 'flat',
      class: {
        base: 'from-default to-default/85'
      }
    },
    {
      color: 'primary',
      bg_effect: 'flat',
      class: {
        base: 'from-primary to-primary/85'
      }
    },
    {
      color: 'success',
      bg_effect: 'flat',
      class: {
        base: 'from-success to-success/85'
      }
    },
    {
      color: 'warning',
      bg_effect: 'flat',
      class: {
        base: 'from-warning to-warning/85'
      }
    },
    {
      color: 'danger',
      bg_effect: 'flat',
      class: {
        base: 'from-danger to-danger/85'
      }
    },
    {
      color: 'info',
      bg_effect: 'flat',
      class: {
        base: 'from-info to-info/85'
      }
    },

    // Faded background effects
    {
      color: 'default',
      bg_effect: 'faded',
      class: {
        base: 'to-default/10 from-default'
      }
    },
    {
      color: 'primary',
      bg_effect: 'faded',
      class: {
        base: 'from-primary dark:from-primary to-white/10 dark:to-black/10'
      }
    },
    {
      color: 'success',
      bg_effect: 'faded',
      class: {
        base: 'to-success/10 from-success'
      }
    },
    {
      color: 'warning',
      bg_effect: 'faded',
      class: {
        base: 'to-warning/10 from-warning'
      }
    },
    {
      color: 'danger',
      bg_effect: 'faded',
      class: {
        base: 'to-danger/10 from-danger'
      }
    },
    {
      color: 'info',
      bg_effect: 'faded',
      class: {
        base: 'to-info/10 from-info'
      }
    },

    // Gallery background effects - Converted from Less to Tailwind classes
    {
      color: 'success',
      bg_effect: 'gallery',
      class: {
        base: 'border-box bg-linear-to-r from-green-400 to-green-700',
        wrapper_cta_hint: 'text-black'
      }
    },
    {
      color: 'warning',
      bg_effect: 'gallery',
      class: {
        base: 'border-box bg-linear-to-r from-amber-400 to-orange-500',
        wrapper_cta_hint: 'text-black'
      }
    },
    {
      color: 'danger',
      bg_effect: 'gallery',
      class: {
        base: 'border-box bg-linear-to-r from-red-300 to-red-600',
        wrapper_cta_hint: 'text-black'
      }
    },
    {
      color: 'info',
      bg_effect: 'gallery',
      class: {
        base: 'border-box bg-linear-to-r from-sky-400 to-blue-500',
        wrapper_cta_hint: 'text-black'
      }
    },
    {
      color: 'default',
      bg_effect: 'gallery',
      class: {
        base: 'border-box bg-linear-to-r from-gray-400 to-gray-500',
        wrapper_cta_hint: 'text-black'
      }
    },
    {
      color: 'primary',
      bg_effect: 'gallery',
      class: {
        base: 'border-box bg-linear-to-r from-blue-300 to-blue-500',
        wrapper_cta_hint: 'text-black'
      }
    }
  ],
  defaultVariants: {
    color: 'primary',
    bg_effect: 'solid',
    dir_effect: 'bottom'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
