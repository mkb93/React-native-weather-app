import React, { useState, useEffect} from "react"
import { ActivityIndicator, StyleSheet, View } from "react-native"
import Tabs from "./src/components/Tabs"
import { NavigationContainer } from "@react-navigation/native"
import * as Location from 'expo-location'
import {WEATHER_API_KEY } from '@env'
import { useGetWeather } from "./src/hooks/useGetWeather"
import ErrorItem from "./src/components/ErrorItem"
const App = () => {
const [loading, error, weather]= useGetWeather()
  
if (weather && weather.list && !loading) {
  return (
    <NavigationContainer>
      <Tabs weather={weather}/>
    </NavigationContainer>
   )
}
    return (
      <View style= {styles.container}>
        {!error ?( <ActivityIndicator size={'large'} color={'blue'}/> )
        : ( <ErrorItem/> )}
      </View>
    )
 
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})
export default App