import React, { Component } from 'react';
import { View, Text } from 'react-native';
import api from '../services/api';


export default class Main extends Component{

    static navigationOptions={
        title: 'Teste',
        headerStyle:{
            backgroundColor: '#7159C1'
        },
        headerTintColor: 'white',
    };

    //variaveis dentro do estado
    state = {
        cont: 0,
    };

    componentDidMount(){
        this.loadItens();
    }

    loadItens = async () => {
        console.log('loading products...');
        const response = await api.get('/users');
        
        this.setState({ cont : 1000 })

        //const { data } : response.data;

        console.log(response.data);
    };
    

    render(){
        return (  
            <View>
                <Text> Página Principal</Text>
                <Text> {this.state.cont} </Text>
            </View>
        );
    }
}