import { createElement as $ } from 'react'
import styled from '@emotion/styled/macro'

const OutlinedInput = ({
  label,
  elevated,
  children
}) =>
  $(Container, null,
    label &&
      $(TopBorder, null,
        $(LeftTopBorder),
        $(Label, { elevated, label }, label),
        $(RightTopBorder)),
    $(MainBorder, { label }),
    children)

const Container = styled.div({
  position: 'relative',
  padding: '16px 14px'
})

const TopBorder = styled.div({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: 4,
  pointerEvents: 'none',
  display: 'flex',
})

const LeftTopBorder = styled.div({
  borderTop: '1px solid gray',
  borderTopLeftRadius: 4,
  flexShrink: 0,
  width: 14 - 4,
  height: 4
})

const Label = styled.div({
  opacity: 0,
  overflow: 'hidden',
  pointerEvents: 'none',
  transition: 'max-width .1s cubic-bezier(0.4, 0.0, 0.2, 1)',
  fontSize: 'calc(15px * 0.75)' // Should be configurable
}, ({ elevated, label }) => !elevated
  ? { maxWidth: 0 }
  : { maxWidth: `${label.length}ex`, padding: '0 4px' }
)

const RightTopBorder = styled.div({
  borderTop: '1px solid gray',
  borderTopRightRadius: 4,
  flexGrow: 1,
  height: 4
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