import styled from 'styled-components/native'
import COLORS from 'constants/colors'
import { TextInput } from 'react-native'

import type { InputFieldProps } from './types'

const InputField = styled(TextInput)<InputFieldProps>`
  background: #fff;
  font-family: 'Nunito Sans';
  font-size: 14px;
  padding: 12px 18px;
  width: 100%;
  color: ${COLORS.PRIMARY};
  border-radius: 8px;

  ${({ error }) => error ? `border: 1px solid ${COLORS.DANGER}` : ''}
`

export default InputField
