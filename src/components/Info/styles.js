import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  margin-top: 10%;
`;

export const Main = styled.View`
  align-items: center;
  width: 100%;
`;

export const Description = styled.Text`
  font-family: ${({theme})=>theme.fonts.extra};
  font-size: 26px;
  color: white;
  margin-top: 6px;
`;

export const DateInfo = styled.Text`
  font-family: ${({theme})=>theme.fonts.regular};
  font-size: 26px;
  color: white;
`;

export const Temp = styled.Text`
  font-family: ${({theme})=>theme.fonts.regular};
  font-size: 100px;
  color: white;
`;

export const Localization = styled.Text`
 font-family: ${({theme})=>theme.fonts.extra};
  font-size: 30px;
  color: white;
`;

export const Divisor = styled.View`
  width: 60%;
  height: 4px;
  background: white;
`;

export const ValueView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ValueTitle = styled.Text`
  font-family: ${({theme})=>theme.fonts.extra};
  color: #fff;
  font-size: 26px;
`;

export const Value = styled.Text`
  font-family: ${({theme})=>theme.fonts.extra};
  color: white;
  font-size: 26px;
`;

export const Button = styled.TouchableOpacity`  
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 55px;
  background: white;
  opacity: 0.7;
  margin-top: 35px;
  margin-bottom: 40px;
  border-radius: 6px;
`;

export const ButtonText = styled.Text`
  font-family: ${({theme})=>theme.fonts.extra};
  color: black;
  font-size: 22px;
  padding: 10px;
`;
