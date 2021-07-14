import React, { useState } from "react";
import { TextInput, StyleSheet, Button } from "react-native";

import { Container, Title, SubTitle, ButtonN } from "./styles";

export default function Home() {
  const [mounthValue,setMounthValue] = useState("");
  const [hourValue,  setHourValue] = useState("");
  const [daysInWeek, setDaysInWeek] = useState("");
  const [weekInYear, setWeekInYear] = useState("");


const result = () => {
    console.warn(mounthValue+hourValue+daysInWeek+weekInYear)
}

  return (
    <Container>
      <Title>Quantidade por Mês </Title>
      <TextInput
        placeholder={"Insira um valor em Real"}
        style={styles.Input}
        keyboardType="numeric"
        onChangeText={(value) => setMounthValue(value)}
      />
      <SubTitle>Quanto você quer ganhar por Mês?</SubTitle>
      <Title>Horas por dia </Title>
      <TextInput
        placeholder={"R$ 2,0000"}
        style={styles.Input}
        keyboardType="numeric"
        onChangeText={(value) => setHourValue(value)}
      />
      <SubTitle>Quantas Horas voce quer trabalhar por dia?</SubTitle>
      <Title>Dias por semana</Title>
      <TextInput
        placeholder={"R$ 2,0000"}
        style={styles.Input}
        keyboardType="numeric"
        onChangeText={(value) => setDaysInWeek(value)}
      />
      <SubTitle>Quantos dias você quer trabalhar por semana?</SubTitle>
      <Title>Semanas por ano</Title>
      <TextInput
        placeholder={"R$ 2,0000"}
        style={styles.Input}
        keyboardType="numeric"
        onChangeText={(value) => setWeekInYear(value)}
      />
      <SubTitle>Quantas semanas por ano você quer tirar de férias?</SubTitle>

      <Button 
      title='Resultado'
      onPress={result}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  Input: {
    width: "90%",
    height: 40,
    backgroundColor: "#DDD",
    borderRadius: 5,
    fontSize: 20,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
