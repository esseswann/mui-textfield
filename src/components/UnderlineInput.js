import { createElement as $ } from 'react'
import styled from '@emotion/styled/macro'

const UnderlineInput = ({
  className,
  children
}) =>
  $(Container, { className },
    children,
    $(BottomBorder))

const Container = styled.div({
  position: 'relative',
  paddingTop: '24px',
})

const BottomBorder = styled.div({
  bottom: 0,
  left: 0,
  right: 0,
  position: 'absolute',
  borderBottom: '1px solid gray'  
})

export default UnderlineInput