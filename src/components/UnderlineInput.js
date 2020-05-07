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
  $(Container, { dense },
    StartAdornment,
    $(UnderlineValueArea, null,
      Label,
      RenderValue,
      Input),
    EndAdornment,
    $(Underline, { focused }))

const Container = styled(InputContainer)(({ dense }) => ({
  padding: dense
    ? '14px 0 2px'
    : '22px 0 2px'
}))

const UnderlineValueArea = styled(ValueArea)({
  display: 'flex',
  flexWrap: 'wrap',
  flexGrow: 1,
})

export default UnderlineInput