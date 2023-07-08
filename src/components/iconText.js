import React from "react";
import { View, Text, StyleSheet} from 'react-native'
import { Feather} from '@expo/vector-icons'

const IconText = (props) => {
  const {iconName, iconColor, bodyText, bodyTextStyles} = props
  console.log(bodyTextStyles)
return (
  <View>
  <Feather name={iconName} size={50} color={iconColor}/>
  <Text style={ bodyTextStyles}>{bodyText}</Text>
  </View>
)
}
const styles= StyleSheet.create({
textTheme: {
  fontWeight: 'bold'
}
})
export default IconText