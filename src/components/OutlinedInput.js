import { createElement as $ } from 'react'
import styled from '@emotion/styled/macro'

const OutlinedInput = ({
  label,
  children
}) =>
  $(Container, null,
    label &&
      $(LeftTopBorder),
    label &&
      $(RightTopBorder),
    $(MainBorder, { label }),
    children)

const Container = styled.div({
  position: 'relative',
  padding: '16px 14px'
})

const LeftTopBorder = styled.div({
  position: 'absolute',
  width: 14 - 4,
  height: 4,
  left: 0,
  top: 0,
  borderTop: '1px solid gray',
  borderTopLeftRadius: 4
})

const RightTopBorder = styled.div({
  position: 'absolute',
  width: '60%',
  height: 4,
  right: 0,
  top: 0,
  borderTop: '1px solid gray',
  borderTopRightRadius: 4
})

const MainBorder = styled.div({
  border: '1px solid gray',
  borderRadius: 4,
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  pointerEvents: 'none'
}, ({ label }) => label && {
  borderTop: 0
})

export default OutlinedInput