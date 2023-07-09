import React, { useState, useEffect} from "react"
import { ActivityIndicator, StyleSheet, View } from "react-native"
import Tabs from "./src/components/Tabs"
import { NavigationContainer } from "@react-navigation/native"
import * as Location from 'expo-location'
import {WEATHER_API_KEY } from '@env'
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {

  
  if(loading){
    return (
      <View style= {styles.container}>
        <ActivityIndicator size={'large'} color={'blue'}/>
      </View>
    )
  }
  
 return (
  <NavigationContainer>
    <Tabs />
  </NavigationContainer>
 )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})
export default App