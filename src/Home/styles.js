import styled from "styled-components/native";

export const Container = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.bg};
`;

export const Title = styled.Text`
    font-size: 28px;
    margin-bottom: 15px;
    color: ${props => props.theme.color};
    justify-content: flex-start;
    align-items: flex-start;
`;

export const SubTitle = styled.Text`
    font-size: 12px;
    color: red;
`;

// export const Input = styled.input`
    // width: 90%;
    // height: 40px;
    // background-color: #DDD;
    // border-radius: 5px;
    // font-size: 20px;
    // padding: 5px;
// `;
