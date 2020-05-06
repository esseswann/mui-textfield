import { createElement as $ } from 'react'
import InputBase from './InputBase'
import styled from '@emotion/styled/macro'

const TextField = ({
  label,
  multiline,
  variant
}) =>
  $('div', null,
    $(variants[variant] || Underline, { label },
      label && $(Label),
      $(InputBase, { multiline })),
    $(HelperText))

const Outlined = ({ children }) =>
  $('div', null, children)
const Filled =({ children }) =>
  $('div', null, children)
const Underline = ({ children }) =>
  $('div', null, children)

const variants = {
  outlined: Outlined,
  filled: Filled,
  underline: Underline
}

const Label = () => 'label'

const HelperText = () =>
  $('div', null, 'helper text')

export default TextField
