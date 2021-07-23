import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bg};
`;

export const Title = styled.Text`
  font-size: 28px;
  margin-bottom: 15px;
  color: ${(props) => props.theme.color};
  justify-content: center;
  align-items: center;
`;

export const SubTitle = styled.Text`
  font-size: 12px;
  color: red;
  margin-bottom: 15px;
`;

export const Resultado = styled.Text`
  font-size: 40px;
  font-weight: bold;
  padding: 5px;
  border: 2px solid white;
  border-radius: 9px;
  margin: 15px;
  background-color: ${(props) => props.theme.color};
  color: ${(props) => props.theme.resultColor};
`;
