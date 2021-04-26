import React from 'react'
import { View, StyleSheet, Text, Image, FlatList} from 'react-native'

import Post from './Post'
import Botao from '../components/Button'

export default function Profile(){
    return(
        <View style={styles.container}>
            <View style={styles.profileBox}>
                <Image source={require('../../assets/img/user_perfil_2.jpg')}
                        style={styles.imgProfile}/>
                <View>
                    <View style={styles.infoBox}>
                        <Text style={styles.infoText}>Test</Text>
                        <Text style={styles.infoText}>Test</Text>
                        <Text style={styles.infoText}>Test</Text>
                    </View>
                    <Botao tittle='Editar Pefil'
                            color='#ebebeb'
                            tamanho='100%'/>
                </View>
            </View>
            <View style={styles.post}>
                <Post imgPost={require('../../assets/img/meu_niver.jpg')}
                    titulo='Meu ANiversario'

                />
            </View>
        </View>
            
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:25,
    },
    profileBox:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between',
    },
    infoBox:{
        flexDirection:'row',
        width:'100%',
    },
    infoText:{
        margin:10,
    },
    imgProfile:{
        width:150,
        height:150,
        borderRadius:75,
    },
    post:{
        flex:1,
        width:'100%',
        height:15,
    },
});