import React from 'react'

import {Text, StyleSheet, View, Image} from 'react-native'

export default props =>{
        return(
        <View style={styles.container}>
            <Image source={props.imgUser}
                    style={styles.imgUser}/>
            <Text style={styles.userName}>{props.userName}</Text>
        </View>
        );
    }

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        margin:10,
    },
    imgUser:{
        width:50,
        height:50,
        borderRadius:25,
        marginHorizontal:5,
        alignItems:'flex-start',
    },
    userName:{
        color:'#000',
        fontSize:17,
        fontWeight:'bold',
    },
    
})




