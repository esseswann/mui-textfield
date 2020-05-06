import { createElement as $ } from 'react'
import InputBase from './InputBase'
import OutlinedInput from './OutlinedInput'
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
    $(variants[variant] || Underline, {
      label,
      elevated: !!value
    },
      label &&
        $(InputLabel, {
          label,
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
const Underline = ({ children }) =>
  $('div', null, children)

const variants = {
  outlined: OutlinedInput,
  filled: Filled,
  underline: Underline
}

const HelperText = () =>
  $('div', null, 'helper text')

export default TextField
