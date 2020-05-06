import { createElement as $, useState } from 'react'
import InputBase from './InputBase'
import UnderlineInput from './UnderlineInput'
import OutlinedInput from './OutlinedInput'
import FilledInput from './FilledInput'
import InputLabel from './InputLabel'

const TextField = ({
  label,
  helperText,
  placeholder,
  multiline,
  variant,
  value,
  onChange
}) => {
  
  const [focused, setFocused] = useState(false)
  const elevated = focused || !!value
  
  return $('div', null,
    $(variants[variant] || UnderlineInput, {
      label,
      elevated
    },
      label &&
        $(InputLabel, {
          label,
          variant,
          elevated
        }),
      $(InputBase, {
        multiline,
        placeholder,
        value,
        onChange,
        focused,
        label,
        onFocus: () => setFocused(true),
        onBlur: () => setFocused(false)
      })),
    helperText &&
      $(HelperText))
}

const variants = {
  outlined: OutlinedInput,
  filled: FilledInput,
  underline: UnderlineInput
}

const HelperText = () =>
  $('small', null, 'helper text')

export default TextField
