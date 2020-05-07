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
    $(ValueArea, null,
      RenderValue,
      Label,
      Input),
    EndAdornment,
    $(Underline, { focused }))

const Container = styled(InputContainer)(({ dense }) => ({
  padding: dense
    ? '14px 0 2px'
    : '22px 0 2px'
}))

const ValueArea = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  flexGrow: 1,
})

export default UnderlineInput