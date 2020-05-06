import { createElement as $, useState } from 'react'
import InputBase from './InputBase'
import UnderlineInput from './UnderlineInput'
import OutlinedInput from './OutlinedInput'
import FilledInput from './FilledInput'
import InputLabel from './InputLabel'
import styled from '@emotion/styled/macro'

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
  const elevated = focused || !!value
  
  return $('div', null,
    $(variants[variant] || UnderlineInput, {
      label,
      focused,
      elevated,
      dense,
      RenderValue: renderValue,
      StartAdornment: startAdornment &&
        $(StartAdornmentHolder, null, 
          startAdornment),
      EndAdornment: startAdornment &&
        $(EndAdornmentHolder, null, 
          startAdornment),
      Label:
        $(InputLabel, {
          label,
          dense,
          variant,
          elevated,
          focused
        }),
      Input:
        $(InputBase, {
          multiline,
          placeholder,
          value,
          onChange,
          focused,
          label,
          onFocus: () => setFocused(true),
          onBlur: () => setFocused(false)
        })
    }),
    helperText &&
      $(HelperText))
}

const StartAdornmentHolder = styled.div({
  marginRight: 8
})

const EndAdornmentHolder = styled.div({
  marginLeft: 8
})

const variants = {
  outlined: OutlinedInput,
  filled: FilledInput,
  underline: UnderlineInput
}

const HelperText = () =>
  $('small', null, '')

export default TextField
