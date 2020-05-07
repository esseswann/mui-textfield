import { createElement as $ } from 'react'
import styled from '@emotion/styled/macro'
import InputContainer from './InputContainer'
import Underline from './Underline'
import ValueArea from './ValueArea'

const UnderlineInput = ({
  focused,
  dense,
  StartAdornment,
  EndAdornment,
  Label,
  Input,
  RenderValue,
}) =>
  $(Container, null,
    StartAdornment,
    $(UnderlineValueArea, { dense, RenderValue },
      Label,
      RenderValue,
      Input),
    EndAdornment,
    $(Underline, { focused }))

const Container = styled(InputContainer)({
  padding: 0,
  alignItems: 'flex-end'
})

const UnderlineValueArea = styled(ValueArea)(({ dense, RenderValue }) => {
  const topPadding = dense ? 16 : 24
  const bottomPadding = 0
  const valuePadding = RenderValue ? 4 : 0
  return {
    paddingTop: topPadding - valuePadding,
    paddingBottom: bottomPadding - valuePadding,
  }
})

export default UnderlineInput