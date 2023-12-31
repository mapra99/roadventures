import styled from 'styled-components/native'
import COLORS from 'constants/colors'
import FlexCenterView from 'components/flex-center-view'

const Body = styled.View`
  background-color: ${COLORS.SECONDARY};
  height: 100%;
  display: flex;
`

export const BodyCenteredContent = styled(FlexCenterView)`
  flex: 1;
  margin: 0 16px;
`

export default Body
