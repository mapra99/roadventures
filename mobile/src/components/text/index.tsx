import styled from 'styled-components/native'
import COLORS from 'constants/colors'

const BaseText = styled.Text`
  font-family: 'Nunito Sans';
  color: ${COLORS.PRIMARY};
`

export const SmallText = styled(BaseText)`
  font-size: 12px;
`

export const BodyText = styled(BaseText)`
  font-size: 14px;
`

export const HeadingText = styled(BaseText)`
  font-size: 24px;
`

export const TitleText = styled(BaseText)`
  font-size: 32px;
  font-family: 'Nunito Sans Semibold';
`

export const SuperTitleText = styled(BaseText)`
  font-size: 48px;
  font-family: 'Nunito Sans Bold';
` 
