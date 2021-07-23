import React from "react";
import styled from "styled-components/native";


const ButtonContainer = styled.TouchableOpacity`
  width: 120px;
  height: 40px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${(props) => props.bg};
`;

const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
`;

const PressableButton = ({ onPress, bg, title }) => (
  <ButtonContainer onPress={onPress} bgColor={bg}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);
export default PressableButton;
