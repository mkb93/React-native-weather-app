import React from "react"
import {View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";

const CurrentWeather = ({ weatherData }) => {
  const { main: { temp, feels_like, temp_max, temp_min}, weather} = weatherData
  const weatherCondition = weather[0].main
  console.log(weatherCondition)
  const {wrapper, container, tempStyles, feels, highLowWrapper, bodyWrapper, highLow, description, message} = styles
  return (
    <SafeAreaView style={[wrapper, {backgroundColor: weatherType[weatherCondition].backgroundColor}]}>
    <View style = {container}>
      <Feather name={weatherType[weatherCondition].icon} size={100} color="white"></Feather>
      <Text style = {tempStyles}>{temp}</Text>
      <Text style = {feels}>{`feels like ${feels_like}`}</Text>
      <RowText containerStyles={highLowWrapper} messageOne={`High: ${temp_max}`} messageOneStyles= {highLow} messageTwo= {`Low: ${temp_min}`} messageTwoStyles ={highLow} />
      </View>
      <RowText containerStyles={bodyWrapper} messageOne={weather[0].description} messageOneStyles= {description} messageTwo= {weatherType[weatherCondition].message} messageTwoStyles ={message} />
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
  tempStyles: {
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