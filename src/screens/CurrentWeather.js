import React from "react"
import {View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";

const CurrentWeather = () => {
  const {wrapper, container, temp, feels, highLowWrapper, bodyWrapper, highLow, description, message} = styles
  return (
    <SafeAreaView style={wrapper}>
    <View style = {container}>
      <Feather name="sun" size={100} color="black"></Feather>
      <Text style = {temp}>6</Text>
      <Text style = {feels}>feels like 5</Text>
      <RowText containerStyles={highLowWrapper} messageOne={"High: 8"} messageOneStyles= {highLow} messageTwo= {"Low: 6"} messageTwoStyles ={highLow} />
      </View>
      <RowText containerStyles={bodyWrapper} messageOne={"Its Sunny"} messageOneStyles= {description} messageTwo= {weatherType['Thunderstorm'].message} messageTwoStyles ={message} />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highLow: {
    fontSize: 20,
    color: 'black'
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize:30
  }
})
export default CurrentWeather