import { createElement as $ } from 'react'
import styled from '@emotion/styled/macro'
import InputContainer from './InputContainer'
import Underline from './Underline'

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
    RenderValue,
    $(ValueArea, null,
      Label,
      Input),
    EndAdornment,
    $(Underline, { focused }))

const Container = styled(InputContainer)(({ dense }) => ({
  paddingTop: dense
    ? 16
    : 24
}))

const ValueArea = styled.div({
  flexGrow: 1,
})

export default UnderlineInput