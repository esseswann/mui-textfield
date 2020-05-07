import { createElement as $ } from 'react'
import styled from '@emotion/styled/macro'

const InputLabel = ({
  variant = 'underline',
  elevated,
  label,
  dense,
  focused
}) =>
  $(Container, { elevated, variant, dense, focused }, label)

const Container = styled.label({
  display: 'block',
  pointerEvents: 'none',
  position: 'absolute',
  transition: 'transform .1s cubic-bezier(0.4, 0.0, 0.2, 1)',
  transformOrigin: 'left top',
}, ({ elevated, variant, dense, focused }) => ({
  ...focused && {
    color: 'blue'
  },
  ...variant === 'filled' && {
    marginTop: -8
  },
  ...elevated && {
    left: variant === 'underline'
      ? 0
      : variant === 'outlined'
        ? 16
        : null,
    transform: `translate(0, -${(dense ? denseVariants : variants)[variant]}px) scale(0.75)`
  }
}))

const variants = {
  outlined: 26,
  filled: 10,
  underline: 16
}

const denseVariants = {
  outlined: 18,
  filled: 8,
  underline: 16
}

export default InputLabel