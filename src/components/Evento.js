import React from 'react'

import { Text, StyleSheet} from 'react-native'

export default props =>{
    return(
        <>
            <Text style={styles.titulo}>{props.titulo}</Text>
            <Text style={styles.horaData}>{props.horaData}</Text>
            <Text style={styles.local}>{props.local}</Text>
        </>
    );
}

const styles = StyleSheet.create({
    titulo:{
        fontSize:20,
        fontWeight:'bold',
    },
    horaData:{
        fontSize:13,
        color:'red',
        fontWeight:'bold'

    },
    local:{
        fontSize:13,
        color:'#000',
        fontWeight:'bold',
        marginTop:10,
    },
})

