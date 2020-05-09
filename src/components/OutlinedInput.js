import { createElement as $ } from 'react'
import styled from '@emotion/styled/macro'
import InputContainer from './InputContainer'
import InputLabel from './InputLabel'
import InputBase from './InputBase'

const OutlinedInput = ({
  focused,
  dense,
  label,
  multiline,
  elevated,
  startAdornment,
  endAdornment,
  onFocus,
  onBlur,
  value,
  onChange,
  renderValue,
  placeholder
}) =>
  $(Container, { dense, startAdornment },
    label &&
      $(TopBorder, { focused }, 
        $(LeftTopBorder),
        $(InvisibleLabel, { elevated, label }, label),
        $(RightTopBorder)),
    $(MainBorder, { label, focused }),
    label &&
      $(InputLabel, {
        children: label,
        elevated,
        focused,
        relaxedLeft: startAdornment
          ? '48px'
          : '16px',
        elevatedLeft: '16px',
        relaxedTop: dense ? '8px' : '16px',
        elevatedTop: '-12px',
      }),
    startAdornment &&
      $(AdornmentHolder, null, startAdornment),
      $(ValueHolder, { dense, startAdornment }, 
        renderValue,
        $(InputBase, { placeholder, elevated, multiline, onFocus, onBlur, onChange, value })),
    endAdornment &&
      $(AdornmentHolder, null, endAdornment))

const Container = styled(InputContainer)({
  alignItems: 'center',
}, ({ dense }) => ({
  minHeight: dense ? 40 : 56
}))

const ValueHolder = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
}, ({
  startAdornment,
  dense
}) => ({
  paddingLeft: startAdornment ? 0 : 16,
  paddingTop: dense ? 4 : 8,
  paddingBottom: dense ? 4 : 8
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
  width: 16 - 4,
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

const AdornmentHolder = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexSrhink: 0,
  minWidth: 48
})

export default OutlinedInput