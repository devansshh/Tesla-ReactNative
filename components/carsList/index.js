import React from 'react'
import { View, FlatList, Dimensions } from 'react-native'
import styles from './styles'
import cars from './cars'
import CarItem from '../carItem'

export default function CarsList() {
    return (
        <View>
            <FlatList 
                data={cars} 
                renderItem={({item})=>
                    <CarItem name={item.name} subtitle={item.subtitle} subtitleCTA={item.subtitleCTA} image={item.image} />
                }
                snapToAlignment='fast'                
                snapToInterval={Dimensions.get('screen').height} 
                showsVerticalScrollIndicator={false}                               
            />    
        </View>
    )
}
//<CarItem name={item.name} subtitle={item.subtitle} subtitleCTA={item.subtitleCTA} image={item.image} />
