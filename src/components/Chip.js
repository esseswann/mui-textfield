import styled from '@emotion/styled/macro'

export const Chip = styled.div({
  lineHeight: '24px',
  borderRadius: 24,
  padding: '4px 12px',
  color: 'gray',
  background: 'rgba(0,0,0,.1)',
  margin: '2px 4px 2px 0',
  whiteSpace: 'nowrap',
  '&:last-of-type': {
    marginRight: 8
  }
}, ({ dense }) => dense && {
  padding: '0 12px',
  margin: '1px 2px 1px 0',
})

export const Chips = styled.div({
  display: 'flex',
  margin: -2,
  marginRight: 4
})

export default Chip