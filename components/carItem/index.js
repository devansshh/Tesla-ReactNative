import React from 'react'
import {View, ImageBackground, Text} from 'react-native'
import styles from './styles'
import StyledButton from '../styledButton'

const CarItem = (props) => {
    return (
        <View style={styles.carContainer} >
            <ImageBackground source={props.image} style={styles.image} />
            <View style={styles.titles}>
            <Text style={styles.title}>{props.name}</Text>
            <Text style={styles.subtitle}>{props.subtitle}{' '}<Text>{props.subtitleCTA}</Text></Text>
            </View>
            <View style={styles.buttonContainer}>
                <StyledButton type='primary' title='Book a Drive' onpress={()=> alert('booked a drive')}/>
                <StyledButton type='secondary' title='Explore the model' onpress={()=> alert('send details')}/>                
            </View>
        </View>
    )
}

export default CarItem
