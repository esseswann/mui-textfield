import { createElement as $ } from 'react'
import styled from '@emotion/styled/macro'

import UnderlineInput from './UnderlineInput'

const FilledInput = styled(UnderlineInput)({
  borderTopLeftRadius: 4,
  borderTopRightRadius: 4,
  background: 'rgba(0,0,0,.05)',
  minWidth: 'calc(200px - (12px * 2))'
}, ({ label }) => ({
  padding: label
    ? '24px 12px 8px'
    : '16px 12px'
}))

export default FilledInput