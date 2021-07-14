import { StyleSheet, Dimensions } from "react-native";

const styles= StyleSheet.create({
    carContainer: {
      width: Dimensions.get('screen').width,
      height: Dimensions.get('screen').height    
    },
    titles:{
      marginTop: '30%',
      alignItems: 'center'
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold'
    },
    subtitle: {
      fontSize: 18,
      color: '#fff'
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute'
    },
    buttonContainer: {
      position: 'absolute',
      width: '100%',
      bottom: 70
    }
})

export default styles