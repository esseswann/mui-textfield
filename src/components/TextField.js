import { createElement as $ } from 'react'
import InputBase from './InputBase'
import OutlinedInput from './OutlinedInput'
import InputLabel from './InputLabel'

const TextField = ({
  label,
  helperText,
  multiline,
  variant
}) =>
  $('div', null,
    $(variants[variant] || Underline, { label },
      label && $(InputLabel, { label }),
      $(InputBase, { multiline })),
    helperText &&
      $(HelperText))

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
