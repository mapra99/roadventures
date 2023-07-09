import styled from 'styled-components/native'
import COLORS from 'constants/colors'
import { TextInput } from 'react-native'

const InputField = styled(TextInput)`
  background: #fff;
  font-family: 'Nunito Sans';
  font-size: 16px;
  padding: 12px 18px;
  width: 100%;
  color: ${COLORS.PRIMARY};
  border-radius: 8px;
`

export default InputField
