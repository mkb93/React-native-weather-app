import React from "react"
import { SafeAreaView, StyleSheet, FlatList, View, StatusBar, ImageBackground } from "react-native"
import { Feather } from '@expo/vector-icons'
import ListItem from "../components/ListItem"

const Empty = () => (
  <View>
    <Text>Empty</Text>
  </View>
)
const UpcomingWeather = ({weatherData}) => {

  const renderItem = ({item}) => (
    <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />
  )
 return (
  <SafeAreaView style = {styles.container}>
    <ImageBackground source={require('../../assets/upcoming-background.jpg')} style={styles.image}>
    
    <FlatList data={weatherData} 
    renderItem={renderItem} 
    keyExtractor={(item)=>item.dt_txt} 
    ItemSeparatorComponent={()=> <View style={{backgroundColor:'blue', height: 2}}/> }
    ListEmptyComponent={<Empty />}  />
    </ImageBackground>
  </SafeAreaView>
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
  },
  image: {
    flex: 1
  }
})
export default UpcomingWeather