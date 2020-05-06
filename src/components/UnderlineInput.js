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
}) =>
  $(Container, { dense },
    StartAdornment,
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

const ValueArea = styled.div()

export default UnderlineInput