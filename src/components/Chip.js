import styled from '@emotion/styled/macro'

export const Chip = styled.div({
  lineHeight: '24px',
  borderRadius: 24,
  padding: '4px 12px',
  color: 'gray',
  background: 'rgba(0,0,0,.1)',
  margin: 4,
  marginLeft: 0,
  whiteSpace: 'nowrap',
  '&:last-of-type': {
    marginRight: 8
  }
}, ({ dense }) => ({
  padding: '0 12px',
  margin: 2
}))

export const Chips = styled.div({
  display: 'flex',
  margin: -2,
  marginRight: 4
})

export default Chip