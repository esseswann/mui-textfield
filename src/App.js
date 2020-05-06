import { createElement as $, useState } from 'react'
import TextField from './components/TextField'
import styled from '@emotion/styled/macro'
import map from 'lodash/fp/map'
import entries from 'lodash/fp/entries'

const App = () => {

  const [value, setValue] = useState('')

  return $(Container, null,
    map(([variant, types]) =>
      $(VariantContainer, null,
        map(([type, params]) =>
          $(TextFieldContainer, null, 
            $(TextField, {
              value,
              onChange: event => setValue(event.target.value),
              variant,
              ...params})),
          entries(types))),
      entries(variants)))
}

const label = 'Label'
const helperText = 'Helper text'
const placeholder = 'Placeholder that is much longer that the label'
const multiline = true

const types = {
  value: {
    placeholder,
  },
  label: {
    label,
    placeholder
  },
  helperText: {
    label,
    placeholder,
    helperText
  },
  multiline: {
    label,
    placeholder,
    helperText,
    multiline,
  }
}

const variants = {
  filled: types,
  outlined: types,
  underline: types
}

const Container = styled.div({
  fontSize: '15px',
  lineHeight: '24px'
})

const VariantContainer = styled.div({
  margin: 8,
  display: 'flex',
})

const TextFieldContainer = styled.div({
  margin: 8
})

export default App
