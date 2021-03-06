import { createElement as $, useState } from 'react'
import TextField from './components/TextField'
import { Chip } from './components/Chip'
import styled from '@emotion/styled/macro'
import map from 'lodash/fp/map'
import entries from 'lodash/fp/entries'

const App = () => {

  const [value, setValue] = useState('')

  return $(Container, null,
    ...map(([variant, types]) =>
      $(VariantContainer, { key: variant },
        ...map(([type, params]) =>
          $(TextFieldContainer, null, 
            $(TextField, {
              key: type,
              value,
              onChange: event => setValue(event.target.value),
              variant,
              ...params})),
          entries(types))),
      entries(variants)),
    ...map(([variant, types]) =>
      $(VariantContainer, null,
        ...map(([type, params]) =>
          $(TextFieldContainer, null, 
            $(TextField, {
              key: type,
              value,
              dense: true,
              onChange: event => setValue(event.target.value),
              variant,
              ...params,
              renderValue: type === 'multiSelect'
                ? map(chip => $(Chip, { key: chip, dense: true }, chip), chips)
                :  type === 'multiSelectSingle' && $(Chip, { key: chips[0], dense: true }, chips[0])})),
          entries(types))),
      entries(variants)))
}

const label = 'Label'
const helperText = 'Helper text'
const placeholder = 'Label'
const multiline = true
const chips = [
  'Toy Story',
  'A Bugs Life',
  'Toy Story 2',
  'Monsters, Inc.',
  'Finding Nemo',
]

const types = {
  value: {
    placeholder,
  },
  label: {
    label,
    placeholder
  },
  helperText: {
    label: 'Different label',
    placeholder: 'Placeholder that is much longer that the label',
    helperText
  },
  adornment: {
    label: 'Different label',
    placeholder: 'Placeholder that is much longer that the label',
    startAdornment: $('div', null, 'kg'),
    endAdornment: $('div', null, 'kg')
  },
  multiSelectSingle: {
    label: 'Different label',
    placeholder: 'Placeholder',
    renderValue: $(Chip, { key: chips[0] }, chips[0]),
    endAdornment: $('div', null, 'kg'),
  },
  multiSelect: {
    label: 'Different label',
    placeholder: 'Placeholder',
    renderValue: map(chip => $(Chip, { key: chip }, chip), chips),
    endAdornment: $('div', null, '▼'),
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
  padding: 16,
  fontSize: '15px',
  lineHeight: '24px',
  fontFamily: 'Roboto',
  letterSpacing: 1
})

const VariantContainer = styled.div({
  margin: 8,
  display: 'flex',
})

const TextFieldContainer = styled.div({
  margin: 8,
  flexShrink: 0,
  width: 300,
  '&:last-child': {
    paddingRight: 16
  }
})

export default App
