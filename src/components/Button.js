import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text} from 'react-native'


export default ({ onPress , tittle, color, tamanho, textColor, marginHori }) =>{
    return(
        <>
            <TouchableOpacity style={[styles.button, {backgroundColor: color}, {width: tamanho}]} onPress={ onPress }>
                <Text style={styles.buttonText, {color: textColor}}>{tittle}</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    button:{
        padding:10,
        borderRadius:5,
        alignItems:'center',
    },
    buttonText:{
        color:'#fff',
        textAlign:'center',
    },
})