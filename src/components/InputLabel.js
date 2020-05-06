import { createElement as $ } from 'react'
import styled from '@emotion/styled/macro'

const InputLabel = ({
  label
}) =>
  $(Container, null, label)

const Container = styled.div({
  pointerEvents: 'none',
  position: 'absolute'
})

export default InputLabel