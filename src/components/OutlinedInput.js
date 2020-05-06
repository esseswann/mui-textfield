import { createElement as $ } from 'react'
import styled from '@emotion/styled/macro'
import InputContainer from './InputContainer'

const OutlinedInput = ({
  label,
  elevated,
  focused,
  dense,
  Input,
  Label,
  StartAdornment,
  EndAdornment,
  RenderValue
}) =>
  $(Container, { dense },
    label &&
      $(TopBorder, { focused },
        $(LeftTopBorder),
        $(InvisibleLabel, { elevated, label }, label),
        $(RightTopBorder)),
    $(MainBorder, { label, focused }),
    StartAdornment,
    $(ValueArea, { dense },
      RenderValue,
      Label,
      Input),
    EndAdornment)

const Container = styled(InputContainer)({
  padding: '0 14px',
  alignItems: 'center'
})

const ValueArea = styled.div(({ dense }) => ({
  flexGrow: 1,
  display: 'flex',
  flexWrap: 'wrap',
  padding: dense
    ? '8px 0'
    : '16px 0'
}))

const TopBorder = styled.div({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: 4,
  pointerEvents: 'none',
  display: 'flex'
}, ({ focused }) => focused
  ? { '& > *': { borderTop: '2px solid blue' } }
  : { '& > *': { borderTop: '1px solid gray' } }
)

const LeftTopBorder = styled.div({
  borderTopLeftRadius: 4,
  flexShrink: 0,
  width: 14 - 4,
  height: 4
})

const InvisibleLabel = styled.div({
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
  borderTopRightRadius: 4,
  flexGrow: 1,
  height: 4
})

const MainBorder = styled.div({
  borderRadius: 4,
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  pointerEvents: 'none'
}, ({ label, focused }) => ({
  border: focused
    ? '2px solid blue'
    : '1px solid gray',
  ...label && {
    borderTop: 0
  }
}))

export default OutlinedInput