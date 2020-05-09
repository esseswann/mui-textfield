import { createElement as $, useState } from 'react'
import UnderlineInput from './UnderlineInput'
import OutlinedInput from './OutlinedInput'
import FilledInput from './FilledInput'

const TextField = ({
  label,
  dense,
  helperText,
  placeholder,
  multiline,
  variant,
  value,
  renderValue,
  startAdornment,
  endAdornment,
  onChange
}) => {
  
  const [focused, setFocused] = useState(false)
  const elevated = !label || renderValue || focused || !!value
  
  return $('div', null,
    $(variants[variant] || UnderlineInput, {
      label,
      placeholder,
      focused,
      elevated,
      dense,
      onChange,
      value,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      renderValue,
      startAdornment,
      endAdornment,
      multiline
    }),
    helperText &&
      $(HelperText))
}

const variants = {
  outlined: OutlinedInput,
  filled: FilledInput,
  underline: UnderlineInput
}

const HelperText = () =>
  $('small', null, '')

export default TextField
