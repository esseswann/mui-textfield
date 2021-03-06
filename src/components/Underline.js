import { createElement as $, Fragment, memo } from 'react'
import styled from '@emotion/styled/macro'

const Underline = memo(({ focused }) =>
  $(Fragment, null,
    $(BottomBorder),
    $(BorderBottomFocused, { focused })))

const BottomBorder = styled.div({
  bottom: 0,
  left: 0,
  right: 0,
  position: 'absolute',
  borderBottom: '1px solid gray'
})

const BorderBottomFocused = styled(BottomBorder)({
  transition: 'all .1s cubic-bezier(0.4, 0.0, 0.2, 1)',
  borderBottom: '2px solid blue'
}, ({ focused }) => focused
  ? { left: 0, right: 0, }
  : { left: '50%', right: '50%' })

export default Underline