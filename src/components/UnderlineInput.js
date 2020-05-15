import { createElement as $ } from 'react'
import styled from '@emotion/styled/macro'
import InputContainer from './InputContainer'
import Underline from './Underline'
import InputLabel from './InputLabel'
import InputBase from './InputBase'
import AdornmentHolder from './AdornmentHolder'
import ValueHolder from './ValueHolder'

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
  $(Container, { dense, startAdornment, renderValue },
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
      $(UnderlineValueHolder, { label, dense, startAdornment }, 
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
  paddingTop: 24,
}, ({ dense, renderValue }) => dense
  ? { minHeight: 40,
      paddingBottom: renderValue ? 2 : 0
  } : { 
      minHeight: 48,
      paddingBottom: renderValue ? 4 : 0
  }
)

const UnderlineValueHolder = styled(ValueHolder)({
  flexGrow: 1
})

export default FilledInput