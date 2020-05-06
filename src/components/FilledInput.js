import { createElement as $ } from 'react'
import styled from '@emotion/styled/macro'
import InputContainer from './InputContainer'
import Underline from './Underline'
// import UnderlineInput from './UnderlineInput'

const FilledInput = ({
  focused,
  dense,
  StartAdornment,
  EndAdornment,
  Label,
  Input,
}) =>
  $(Container, null,
    StartAdornment,
    $(ValueArea, { Label, dense },
      Label,
      Input),
    EndAdornment,
    $(Underline, { focused }))

const Container = styled(InputContainer)({
  borderTopLeftRadius: 4,
  borderTopRightRadius: 4,
  background: 'rgba(0,0,0,.05)',
  padding: '0 14px',
  alignItems: 'center'
})

const ValueArea = styled.div(({ Label, dense }) => ({
  padding: Label
    ? '24px 0 8px'
    : '16px 0'
}))

// styled(UnderlineInput)({

// },
// ({ label, dense }) => ({
//   padding: label
//     ? dense
//       ? '20px 12px 4px'
//       : '24px 12px 8px'
//     : dense
//       ? '12px 8px'
//       : '16px 12px'
// }))

export default FilledInput