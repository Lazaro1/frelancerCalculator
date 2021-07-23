import React, { useState } from "react";
import { TextInput, StyleSheet, Button, Pressable, Text } from "react-native";

import {
  Container,
  Title,
  SubTitle,
  Resultado,
} from "./components/styles/index.js";

import { PressableButton } from "./components/Button";

export default function Home() {
  const [mounthValue, setMounthValue] = useState("");
  const [hourValue, setHourValue] = useState("");
  const [daysInWeek, setDaysInWeek] = useState("");
  const [weekInYear, setWeekInYear] = useState("");
  const [totalHoour, setTotalHour] = useState(0);

  const result = () => {
    // if (mounthValue !== '' && hourValue !== '' && daysInWeek !== '' && weekInYear !== '') {
    //     console.warn(mounthValue+hourValue+daysInWeek+weekInYear)
    // } else {
    //   console.warn('dados em branco')
    // }

    let totalValue = mounthValue * 2;
    console.log(totalValue);
    let totalHorasMes = hourValue * daysInWeek * 5;
    console.log(totalHorasMes);

    // (Salário x 2) ÷ horas trabalhadas por mês = preço por hora trabalhada

    let total = (mounthValue * 2) / (hourValue * daysInWeek * 5);
    setTotalHour(total);
    console.log(total);
  };

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

      {totalHoour ? <Resultado>R$ {totalHoour}</Resultado> : <></>}

      <Pressable style={styles.Button} onPress={result}>
        <Title style={styles.text}>Resultado</Title>
      </Pressable>

      
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
  Button: {
    justifyContent: 'center',
    alignItems: "center",
    width: 120,
    height: 40,
    paddingTop: 50,
    borderRadius: 10,
    backgroundColor: "#753e76",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
