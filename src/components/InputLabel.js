// import { createElement as $ } from 'react'
import styled from '@emotion/styled/macro'

const InputLabel = styled.label({
  display: 'block',
  pointerEvents: 'none',
  position: 'absolute'
}, ({
  elevated,
  focused,
  elevatedLeft,
  elevatedTop,
  relaxedLeft,
  relaxedTop,
}) => ({
  top: 0,
  left: 0,
  transformOrigin: 'left center',
  transition: 'transform .1s cubic-bezier(0.4, 0.0, 0.2, 1)',
  color: focused
    ? 'blue'
    : 'inherit',
  transform: elevated
    ? `translate(${elevatedLeft}, ${elevatedTop}) scale(0.75)`
    : `translate(${relaxedLeft}, ${relaxedTop}) scale(1)`
}))

export default InputLabel