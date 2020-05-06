import { createElement as $ } from 'react'
import styled from '@emotion/styled/macro'

const InputBase = ({
  value,
  onChange,
  multiline,
  placeholder
}) =>
  multiline
    ? $(Textarea, { onChange, placeholder, value, rows: 5 })
    : $(Input, { onChange, placeholder, value })

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
  '&::placeholder': font
}

const Input = styled.input(common)

const Textarea = styled.textarea({
  height: 'auto',
  resize: 'none',
  // '&::-webkit-scrollbar': {
  //   width: 0,
  //   height: 0
  // },
  ...common
})

export default InputBase