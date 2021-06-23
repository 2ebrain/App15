import React, {Component} from 'react'

import {  StyleSheet, View, TouchableOpacity, Image, Dimensions, Text } from 'react-native'

import Perfil from '../components/Perfil'
import Evento from '../components/Evento'
import Botao from '../components/Button'



class CriarEvento extends Component {
    render(){
        return(
            <View style={styles.container} >
                <View style={styles.boxReferencias}>
                    <Perfil nickname='Thomas Cintra'/>
                    <Image source={this.props.image} style={styles.image}/>
                    <Evento titulo='Meu Aniversario' 
                            horaData='Thu Aug 27 2020 ás 18:29' 
                            local='Lá em casa!'
                            visivel='Convidados'/>
                </View>
                <Botao tittle="Publicar" color="#116CFF" tamanho='90%'/>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#FFF',
        marginTop:55,
    },
    boxReferencias:{
        marginBottom:30,
    },
    image:{
        width:350,
        height:Dimensions.get('window').width * 3 / 4,
        resizeMode:'contain',
        backgroundColor:'#ebebeb',
    },
})

export default CriarEvento