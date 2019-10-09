import styled from 'styled-components/native';
import { Platform } from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Logo = styled.Image`
  height: 45px;
  width: 45px;
`;

export const Form = styled.View`
  margin-top: 50px;
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const SignUpLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignUpLinkText = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  font-weight: bold;
`;
