import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView, Text, StyleSheet, ImageBackground, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import IconText from '../components/iconText'
const City = () => {
 return (
  <SafeAreaView style= {styles.container}>
    <ImageBackground source={require('../../assets/city-background.jpg')} style={styles.imageLayout}>
      <Text style={[styles.cityName, styles.cityText]}>London</Text>
      <Text style={[styles.countryName, styles.cityText]}>UK</Text>
      <View style={styles.populationWrapper}>
        <IconText iconName={'user'} iconColor='red' bodyText={'8000'} bodyTextSyles={color: 'red'} />
      </View>
      <View style={styles.riseSetWrapper}>
        <IconText iconName={'sunrise'} iconColor={'white'} bodyText={'10:46:58 am'} bodyTextSyles={styles.riseSetText}/>
        <Feather name={'sunset'} size={50} color={'white'}/>
        <Text style={styles.riseSetText}>17:28:15 PM</Text>
      </View>
    </ImageBackground>
  </SafeAreaView>
 )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  imageLayout: {
    flex: 1
  },
  cityName: {

    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  populationWrapper:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red'
  },
  riseSetWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    color: 'white'
  }
})
export default City