import React, { useState } from 'react'
import { TextInput, StyleSheet, Button } from 'react-native'

import { Container, Title, SubTitle, Input } from './styles'

export default function Home() {

    const [mounthValue, setMounthValue] = useState('')

    const onPressLearnMore = () => {
        console.warn(mounthValue, 'ssss')
    }

    return (
        <Container >
            <Title>Quantidade por Mês </Title>
            <TextInput
                placeholder={"R$ 2,0000"}
                style={styles.Input}
                keyboardType="numeric"
                onChange={value => setMounthValue(value)}
            />
            <SubTitle>Quanto você quer ganhar por Mês?</SubTitle>
            <Title>Horas por dia </Title>
            {/* <Title>{mounthValue} </Title> */}
            <TextInput
                placeholder={"R$ 2,0000"}
                style={styles.Input}
                keyboardType="numeric"
            />
            <SubTitle>Quantas Horas voce quer trabalhar por dia?</SubTitle>
            <Title>Dias por semana</Title>
            <TextInput
                placeholder={"R$ 2,0000"}
                style={styles.Input}
                keyboardType="numeric"
            />
            <SubTitle>Quantos dias você quer trabalhar por semana?</SubTitle>
            <Title>Semanas por ano</Title>
            <TextInput
                placeholder={"R$ 2,0000"}
                style={styles.Input}
                keyboardType="numeric"
            />
            <SubTitle>Quantas semanas por ano você quer tirar de férias?</SubTitle>


            <Button
                onPress={onPressLearnMore}
                title="Learn More"
                color="#white"
                accessibilityLabel="Learn more about this purple button"
            />
        </Container>
    )
}

const styles = StyleSheet.create({
    Input: {
        width: '90%',
        height: 40,
        backgroundColor: '#DDD',
        borderRadius: 5,
        fontSize: 20,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

