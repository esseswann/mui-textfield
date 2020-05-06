import { createElement as $ } from 'react'
import styled from '@emotion/styled/macro'

const OutlinedInput = ({ children }) =>
  $(Container, null,
    $(LeftTopBorder),
    $(RightTopBorder),
    $(MainBorder),
    children)

const Container = styled.div({
  MainBorderRadius: 4,
  position: 'relative'
})

const LeftTopBorder = styled.div({
  position: 'absolute',
  background: 'gray',
  height: 1,
  width: 8,
  left: 4,
  top: 0
})

const RightTopBorder = styled.div({
  height: 1,
  background: 'gray',
  position: 'absolute',
  width: '60%',
  right: 4,
  top: 0
})

const MainBorder = styled.div({
  border: '1px solid gray',
  borderRadius: 4,
  borderTop: 0,
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  pointerEvents: 'none'
})

export default OutlinedInput