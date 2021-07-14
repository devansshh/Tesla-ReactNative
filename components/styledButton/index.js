import React from 'react'
import { View, Pressable, Text } from 'react-native'
import styles from './styles'

function StyledButton(props) {
    const backgroundColor= props.type=='primary'? 'black' : 'white';
    const color= props.type=='primary'? 'white' : 'black';
    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress= {props.onpress}
            >
                <Text style={[styles.text, { color: color}]}>{props.title}</Text>
            </Pressable>
        </View>
    )
}

export default StyledButton
