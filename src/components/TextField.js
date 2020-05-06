import { createElement as $ } from 'react'
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

  return $('div', null,
    $(variants[variant] || UnderlineInput, {
      label,
      elevated: !!value
    },
      label &&
        $(InputLabel, {
          label,
          variant,
          elevated: !!value
        }),
      $(InputBase, {
        multiline,
        placeholder,
        value,
        onChange
      })),
    helperText &&
      $(HelperText))
}

const Filled =({ children }) =>
  $('div', null, children)

const variants = {
  outlined: OutlinedInput,
  filled: FilledInput,
  underline: UnderlineInput
}

const HelperText = () =>
  $('small', null, 'helper text')

export default TextField
