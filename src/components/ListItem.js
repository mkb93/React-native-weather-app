import React from "react"
import { Text, SafeAreaView, StyleSheet, FlatList, View, StatusBar, ImageBackground } from "react-native"
import { Feather } from '@expo/vector-icons'

const ListItem =(props)=> {
  const { dt_txt, min, max, condition } = props
  const { item, date, temp } = styles
  return (
    <View style={item}>
      <Feather name={'sun'} size = {50} color={'white'}/>
      <Text style={date}>{dt_txt}</Text>
      <Text style={temp}>{max}</Text>
      <Text style={temp}>{min}</Text>
    </View>
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalBlue'
  },
  item: {
    padding:20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink'
  },
  temp: {
    color: 'white',
    fontSize: 20
  },
  date: {
    color: 'white',
  fontSize: 15
  }
})
export default ListItem