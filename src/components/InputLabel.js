import { createElement as $ } from 'react'
import styled from '@emotion/styled/macro'

const InputLabel = ({
  variant = 'underline',
  elevated,
  label
}) =>
  $(Container, { elevated, variant }, label)

const Container = styled.label({
  display: 'block',
  pointerEvents: 'none',
  position: 'absolute',
  transition: 'transform .1s cubic-bezier(0.4, 0.0, 0.2, 1)',
  transformOrigin: 'left top',
}, ({ elevated, variant }) => ({
  ...variant === 'filled' && {
    marginTop: -8
  },
  ...elevated && {
    transform: `translate(0, -${variants[variant]}px) scale(0.75)`
  }
}))

const variants = {
  outlined: 26,
  filled: 8,
  underline: 16
}

export default InputLabel