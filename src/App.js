import { createElement as $, useState } from 'react'
import TextField from './components/TextField'
import styled from '@emotion/styled/macro'
import map from 'lodash/fp/map'

const App = () => {

  const [value, setValue] = useState('')

  return $(Container, null,
    map(types =>
      $(VariantCotnainer, null,
        map(params =>
          $(TextField, params),
          types)),
      variants))
}

const types = {
  value: {},
  label: {
    label: 'test'
  }
}

const variants = {
  filled: types,
  outlined: types,
  underline: types,
}

const Container = styled.div({})

const VariantCotnainer = styled.div({
  margin: 8,
  display: 'flex',
})

export default App
