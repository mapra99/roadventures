import styled from 'styled-components/native'
import { TitleText } from 'components/text'

export const StyledView = styled.View`
  display: flex;
  padding: 32px 0;
  max-width: 300px;
  width: 100%;
  align-items: center;

  gap: 16px;
`

export const StyledTitle = styled(TitleText)`
  margin-bottom: 8px;
`
