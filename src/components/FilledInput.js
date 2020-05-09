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
      $(ValueHolder, { label, dense, startAdornment }, 
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

const ValueHolder = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
}, ({
  startAdornment,
  dense,
  label
}) => ({
  paddingLeft: startAdornment ? 0 : 16,
  ...!label
    ? { paddingTop: 8,
        paddingBottom: 8
    } : {
      paddingTop: dense ? 21 : 24,
      paddingBottom: dense ? 3 : 8,
    }
}))

export default FilledInput