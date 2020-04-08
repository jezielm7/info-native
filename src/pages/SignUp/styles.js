import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 32px;
  margin-top: -25px;
  text-align: center;
  padding-bottom: 80px;
`;

export const LoginText = styled.Text`
  color: #FFF;
  font-size: 30px;
  padding-bottom: 10px;
  text-align: center;
`;

export const Form = styled.View`
  margin-top: 35px;
  align-items: center;
  align-self: stretch;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#557282",
})`
  width: 80%;
  height: 54px;
  opacity: 0.8;
  color: #557282;
  font-size: 15px;
  padding-left: 40px;
  margin-bottom: 15px;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const SubmitButton = styled.TouchableOpacity`
  height: 54px;
  width: 80%;
  padding: 20px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const SubmitButtonText = styled.Text`
  opacity: 0.8;
  color: #557282;
  font-size: 18px;
  font-weight: bold;
`;

export const SignUpLink = styled.TouchableOpacity`
  color: #FFF;
  font-size: 16px;
  margin-top: 40%;
  text-align: center;
  margin-bottom: -40%;
`;

export const SignUpLinkText = styled.Text`
  font-weight: bold;
`;