export {}

export interface Option {
  id?: string
  className?: string
  title: string
  subtitle?: string
  description?: string
  disabled?: boolean
}

// schema
// title | subtitle | tertiary, icon, action, shortcut, description | content

// NOTE: style
type aspect_ratio =
  | '_23'
  | '_32'
  | 'square'
  | 'sd'
  | 'hd'
  | 'digital'
  | 'imax_film'
  | 'imax_digital'
type orientation = 'vertical' | 'horizontal'
type size = 'none' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
type align = 'left' | 'center' | 'right' | 'justify' // space-evenly, space-btw, tl, tr, bl, br
type shape = 'circle' | 'square'
type style = 'none' | 'filled' | 'outline' | 'bordered'
type border = 'default' | 'none' | 'top' | 'bottom' | 'left' | 'right'
type radius = 'none' | 'sm' | 'md' | 'lg' | 'full' // xs, xl, xxl, xxxl
type shadow = 'none' | 'sm' | 'md' | 'lg' // xs, xl, xxl, xxxl
type blur = 'none' | 'sm' | 'md' | 'lg' // xl
type padding = 'none' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
type spacer = 'none' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
type height = number
type width = 'auto' | 'hug' | number
type interaction_state = 'hover' | 'focus' | 'active' | 'clicked' | 'disabled'

type status = 'idle' | 'online' | 'busy' | 'offline' | 'info' | 'default'
type color =
  | 'gray'
  | 'gold'
  | 'bronze'
  | 'brown'
  | 'yellow'
  | 'amber'
  | 'orange'
  | 'tomato'
  | 'red'
  | 'ruby'
  | 'crimson'
  | 'pink'
  | 'plum'
  | 'purple'
  | 'violet'
  | 'iris'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'teal'
  | 'jade'
  | 'green'
  | 'grass'
  | 'lime'
  | 'mint'
  | 'sky'
type text =
  | 'header'
  | 'paragraph'
  | 'title'
  | 'subtitle'
  | 'tertiary'
  | 'muted'
  | 'error'
  | 'link' // disable

// NOTE: component
type _action = { type: 'action' }
type _action_submit = { type: 'submit' }
type _action_url = { type: 'url'; url: string }

type _icon = { type: 'icon'; code: string }
type _shortcut = { type: 'shortcut' }
type _image = {
  type: 'image'
  url: string
  alt: string
  aspect_ratio: aspect_ratio
}
type _field_value = { type: 'field_value'; field: string; value: string }
// label | placeholder
// save_state | context_id
type _option = {
  type: 'option'
  id: string
  title: string
  subtitle: string
  tertiary: string
  description: string
  disabled: boolean
  icon: _icon
  shortcut: _shortcut
  actions: _action[]
}
