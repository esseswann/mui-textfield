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
  position: 'absolute'
}, ({ elevated }) => elevated && {
  transformOrigin: 'left top',
  transform: 'translate(0, -26px) scale(0.75)'
})

export default InputLabel