import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,

} from 'react-native'

class Header extends Component{
    render(){
        return(
           <View style={styles.container}>
               <View style={styles.rowContainer}>
                    <Text style={styles.tittle}>{this.props.tittle}</Text>
               </View>
           </View> 
        )
    }
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        marginTop:10,
        backgroundColor:'#ebebeb',
    },
    rowContainer:{
        width:'100%',
        padding:10,
        flexDirection:'row',
        justifyContent:'center',
       
    },
    tittle:{
        color:'#000',
        fontSize:25,
        fontWeight:"900",
    },
})

export default Header