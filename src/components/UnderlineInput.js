import { createElement as $ } from 'react'
import styled from '@emotion/styled/macro'
import InputContainer from './InputContainer'
import Underline from './Underline'
import InputLabel from './InputLabel'
import InputBase from './InputBase'
import AdornmentHolder from './AdornmentHolder'

const FilledInput = ({
  focused,
  dense,
  label,
  multiline,
  elevated,
  startAdornment,
  endAdornment,
  value,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  renderValue
}) =>
  $(Container, { dense, startAdornment },
    label &&
      $(InputLabel, {
        children: label,
        elevated,
        focused,
        relaxedLeft: startAdornment
          ? '32px'
          : '0px',
        elevatedLeft: '0px',
        relaxedTop: '24px',
        elevatedTop: '4px',
      }),
    startAdornment &&
      $(StartAdornmentHolder, null, startAdornment),
      $(ValueHolder, { label, dense, startAdornment }, 
        renderValue,
        $(InputBase, { placeholder, elevated, multiline, onFocus, onBlur, onChange, value })),
    endAdornment &&
      $(EndAdornmentHolder, null, endAdornment),
    $(Underline, { focused }))

const StartAdornmentHolder = styled(AdornmentHolder)({
  justifyContent: 'start',
  minWidth: 32,
})

const EndAdornmentHolder = styled(AdornmentHolder)({
  minWidth: 32,
  justifyContent: 'flex-end',
})

const Container = styled(InputContainer)({
  borderTopLeftRadius: 4,
  borderTopRightRadius: 4,
}, ({ dense }) => dense
  ? containerDenseStyle
  : containerFullStyle
)

const containerDenseStyle = {
  paddingTop: 24,
  // paddingBottom: 3,
  minHeight: 40
}

const containerFullStyle = {
  paddingTop: 24,
  // paddingBottom: 4,
  minHeight: 48
}

const ValueHolder = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
})

export default FilledInput