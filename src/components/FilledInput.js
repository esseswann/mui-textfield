import { createElement as $ } from 'react'
import styled from '@emotion/styled/macro'
import InputContainer from './InputContainer'
import Underline from './Underline'
import InputLabel from './InputLabel'
import ValueArea from './ValueArea'

const FilledInput = ({
  focused,
  dense,
  label,
  elevated,
  startAdornment,
  endAdornment,
  Label,
  Input,
  RenderValue
}) =>
  $(Container, { dense },
    label &&
      $(InputLabel, {
        children: label,
        elevated,
        focused,
        relaxedLeft: startAdornment
          ? '48px'
          : '16px',
        elevatedLeft: endAdornment
          ? '48px'
          : '16px',
        relaxedTop: dense 
          ? '12px'
          : '16px',
        elevatedTop: '4px',
      }),
    startAdornment &&
      $(AdornmentHolder, null, startAdornment),
    // RenderValue,
    Input,
    endAdornment &&
      $(AdornmentHolder, null, endAdornment),
    $(Underline, { focused }))

const Container = styled(InputContainer)({
  borderTopLeftRadius: 4,
  borderTopRightRadius: 4,
  background: 'rgba(0,0,0,.05)',
  alignItems: 'center'
}, ({ dense }) => ({
  // padding: dense
  //   ? '16px 0 0px'
  //   : '24px 0 8px',
  minHeight: dense
    ? 48
    : 56
}))

const AdornmentHolder = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexSrhink: 0,
  width: 48
})

// const FilledValueArea = styled(ValueArea)(({ Label, dense, RenderValue }) => {
//   const densePadding = dense ? 4 : 0
//   const valuePadding = !RenderValue
//     ? 0
//     : dense
//       ? 2
//       : 8
//   return {
//     paddingTop: (!Label ? 16 : 24) - densePadding - valuePadding,
//     paddingBottom: (!Label ? 16 : 8) - densePadding - valuePadding
//   }
// })

export default FilledInput