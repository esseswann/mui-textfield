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
  $(Container, { dense, startAdornment },
    label &&
      $(InputLabel, {
        children: label,
        elevated,
        focused,
        relaxedLeft: startAdornment
          ? '48px'
          : '16px',
        elevatedLeft: startAdornment
          ? '48px'
          : '16px',
        relaxedTop: dense 
          ? '12px'
          : '16px',
        elevatedTop: '4px',
      }),
    startAdornment &&
      $(AdornmentHolder, null, startAdornment),
      $(FilledValueHolder, { label, dense, startAdornment, renderValue }, 
        renderValue,
        $(InputBase, { placeholder, elevated, multiline, onFocus, onBlur, onChange, value })),
    endAdornment &&
      $(AdornmentHolder, null, endAdornment),
    $(Underline, { focused }))

const Container = styled(InputContainer)({
  borderTopLeftRadius: 4,
  borderTopRightRadius: 4,
  background: 'rgba(0,0,0,.05)',
}, ({ dense }) => ({
  minHeight: dense
    ? 48
    : 56
}))

const FilledValueHolder = styled(ValueHolder)(({
  startAdornment,
  dense,
  label,
  renderValue
}) => ({
  ...!label
    ? { padding: '8px 0' }
    : { paddingTop: dense
          ? renderValue ? 20 : 21
          : renderValue ? 22 : 24,
        paddingBottom: dense
          ? renderValue ? 2 : 3
          : renderValue ? 6 : 8,
    },
  paddingLeft: startAdornment ? 0 : 16,
}))

export default FilledInput