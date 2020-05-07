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
    $(FilledValueArea, { Label, dense, RenderValue },
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

const FilledValueArea = styled(ValueArea)(({ Label, dense, RenderValue }) => {
  const densePadding = dense ? 4 : 0
  const valuePadding = !RenderValue
    ? 0
    : dense
      ? 2
      : 8
  return {
    paddingTop: (!Label ? 16 : 24) - densePadding - valuePadding,
    paddingBottom: (!Label ? 16 : 8) - densePadding - valuePadding
  }
})

export default FilledInput