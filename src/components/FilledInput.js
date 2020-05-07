import { createElement as $ } from 'react'
import styled from '@emotion/styled/macro'
import InputContainer from './InputContainer'
import Underline from './Underline'
import ValueArea from './ValueArea'

const FilledInput = ({
  focused,
  dense,
  StartAdornment,
  EndAdornment,
  Label,
  Input,
  RenderValue
}) =>
  $(Container, null,
    StartAdornment,
    $(FilledValueArea, { Label, dense },
      Label,
      RenderValue,
      Input),
    EndAdornment,
    $(Underline, { focused }))

const Container = styled(InputContainer)({
  borderTopLeftRadius: 4,
  borderTopRightRadius: 4,
  background: 'rgba(0,0,0,.05)',
  alignItems: 'center'
})

const FilledValueArea = styled(ValueArea)(({ Label, dense }) => ({
  padding: Label
    ? dense
      ? '20px 0 4px'
      : '24px 0 8px'
    : dense
      ? '12px 0'
      : '16px 0'
}))

export default FilledInput