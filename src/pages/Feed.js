import React, { Component } from 'react'
import { StyleSheet, View, FlatList} from 'react-native'

import Header from '../components/Header'
import Post from './Post'

class Feed extends Component{
    state = {
        posts: [{
            id: Math.random(),
            userName:'AmazonasCap',
            imgPost: require('../../assets/img/invetimento_day.jpg'),
            imgUser: require('../../assets/img/user_perfil_1.jpg'),
            titulo:'Dia Do Investidor',
            horaData:'SEGUNDA, 24 DE AGOSTO 2020',
            local:'Rua Arthur de Azevedo, 1217',

        },{
            id: Math.random(),
            userName:'Thomas Cintra', 
            imgPost: require('../../assets/img/meu_niver.jpg'),
            imgUser: require('../../assets/img/user_perfil_2.jpg'),
            titulo:'Meu Aniversário',
            horaData:'TERÇA, 01 DE SETEMBRO 2020',
            local:'Lá em casa',
        },{
            id: Math.random(),
            userName:'Anitta',
            imgPost: require('../../assets/img/show.jpg'),
            imgUser: require('../../assets/img/user_perfil_3.jpg'),
            titulo:'Primeiro Show',
            horaData:'TERÇA, 21 DE OUTUBRO 2020',
            local:'Estádio Maracanâ',
        }]
    }

    render(){
        return(
            <View style={styles.container}>
                <Header tittle='Quinze'/>
                <FlatList data={this.state.posts}
                        keyExtractor={item =>`${item.id}`}
                        renderItem={({ item }) =>
                        <Post key={item.id} {...item}/>}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e6e6e6',
        marginTop:10,
    },
})


export default Feed