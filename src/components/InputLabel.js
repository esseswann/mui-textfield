import { createElement as $ } from 'react'
import styled from '@emotion/styled/macro'

const InputLabel = ({
  elevated,
  label
}) =>
  $(Container, {
    elevated
  }, label)

const Container = styled.div({
  // Should contain font styles
  pointerEvents: 'none',
  position: 'absolute',
  transition: 'transform .1s cubic-bezier(0.4, 0.0, 0.2, 1)',
  transformOrigin: 'left top',
}, ({ elevated }) => elevated && {
  transform: 'translate(0, -26px) scale(0.75)'
})

export default InputLabel