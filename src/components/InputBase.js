import { createElement as $ } from 'react'
import styled from '@emotion/styled/macro'

const InputBase = ({
  value,
  onChange,
  multiline,
  placeholder,
}) =>
  multiline
    ? $(Input, { value, placeholder, onChange })
    : $(Textarea, { onChange, placeholder, }, value)

const common = {
  display: 'block',
  margin: 0,
  padding: 0,
  lineHeight: '24px',
  border: 'none',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  width: 128,
  '&:focus': {
    outline: 'none'
  }
}

const Input = styled.input(common)

const Textarea = styled.input(common)

export default InputBase