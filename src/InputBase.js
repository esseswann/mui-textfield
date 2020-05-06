import { createElement as $ } from 'react'
import styled from '@emotion/styled/macro'

const InputBase = ({
  value,
  onChange,
  multiline,
}) =>
  multiline
    ? $(Input, { value, onChange })
    : $(Textarea, { onChange }, value)

const common = {
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