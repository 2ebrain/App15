import React from 'react'

import { StyleSheet, View, Image } from 'react-native'

import User from '../components/Perfil'
import Botao from '../components/Button'
import Evento from '../components/Evento'

export default props => {
     return(
        <View style={styles.container}>
            <View style={styles.userBox}>
                <User imgUser={props.imgUser} userName={props.userName}/>
            </View>
            <Image source={props.imgPost}
                   style={styles.imgPost}
                /> 
            <View style={styles.evento}>  
                <Evento titulo={props.titulo}
                                horaData={props.horaData}
                                local={props.local}/>
            </View>
            <View style={styles._button}>
                <Botao tittle='Seguir Evento' 
                    color='#c7c7c7' 
                    tamanho='100%' 
                    textColor='#00'
                />
            </View>
        </View>
    );
 }   
const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
       marginBottom:5,
    },
    userBox:{
     
    },
    imgPost:{
        width:'100%',
    },
    evento:{
        marginHorizontal:15,
        marginVertical:5,
        width:'100%',
    },
    _button:{
        marginHorizontal:15,
    },
    
})

