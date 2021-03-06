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
  minWidth: 60,
  flexBasis: 60,
  flexGrow: 1,
  caretColor: 'blue',
  ...font,
  '&:focus': {
    outline: 'none',
  },
  '&::placeholder': {
    transition: 'opacity .1s cubic-bezier(0.4, 0.0, 0.2, 1)',
    ...font
  }
}

const elevatedStyles = ({
  elevated
}) => !elevated && {
  '&::placeholder': {
    opacity: 0
  }
}

const Input = styled.input(common, elevatedStyles)

const Textarea = styled.textarea({
  height: 'auto',
  resize: 'none',
  // '&::-webkit-scrollbar': {
  //   width: 0,
  //   height: 0
  // },
  ...common
}, elevatedStyles)

export default InputBase