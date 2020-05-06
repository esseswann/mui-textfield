import { createElement as $ } from 'react'
import styled from '@emotion/styled/macro'

const InputBase = ({ multiline, ...props }) =>
  $(multiline
    ? Textarea
    : Input,
    props)

const font = {
  fontFamily: 'inherit',
  fontSize: 'inherit',
  letterSpacing: 'inherit',
  lineHeight: '24px',
}

const common = {
  display: 'block',
  background: 'transparent',
  margin: 0,
  padding: 0,
  border: 'none',
  width: '100%',
  ...font,
  '&:focus': {
    outline: 'none'
  },
  '&::placeholder': {
    transition: 'opacity .1s cubic-bezier(0.4, 0.0, 0.2, 1)',
    ...font
  }
}

const focused = ({
  focused,
  label
}) => label && !focused && {
  '&::placeholder': {
    opacity: 0
  }
}

const Input = styled.input(common, focused)

const Textarea = styled.textarea({
  height: 'auto',
  resize: 'none',
  // '&::-webkit-scrollbar': {
  //   width: 0,
  //   height: 0
  // },
  ...common
}, focused)

export default InputBase