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

export const BodyWithPadding = styled(Body)`
  padding: 16px;
`

export const FullHeightScrollableBody = styled.ScrollView`
  min-height: 100%;
`

export default Body
