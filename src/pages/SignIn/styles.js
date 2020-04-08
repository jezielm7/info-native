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
  margin-top: 70px;
  text-align: center;
`;

export const LoginText = styled.Text`
  color: #FFF;
  font-size: 30px;
  margin-top: 100px;
  text-align: center;
`;

export const Form = styled.View`
  margin-top: 35px;
  align-items: center;
  align-self: stretch;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "rgba(255, 255, 255, 0.8)",
})`
  width: 80%;
  color: #fff;
  height: 54px;
  font-size: 15px;
  padding-left: 40px;
  margin-bottom: 15px;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.06);
`;

export const SubmitButton = styled.TouchableOpacity`
  height: 54px;
  width: 80%;
  padding: 20px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.06);
`;

export const SubmitButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
`;

export const SignInLink = styled.TouchableOpacity`
  color: #FFF;
  font-size: 16px;
  margin-top: 58%;
  text-align: center;
`;

export const SignInLinkText = styled.Text`
  font-weight: bold;
`;