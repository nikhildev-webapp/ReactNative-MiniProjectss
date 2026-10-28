import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const Welcome = () => {
    const Badge = require('../../../assets/images/expo-badge.png')
  return (
    <View style={styles.container}>
          <Text style={styles.TextStyle}>Welcome To React Native</Text>
          <Image source={Badge} />
          <Link href="/(tabs)/Projects" style={{color:'blue', fontSize: 20,textAlign: 'center'}}>Go Back</Link>
    </View>
    
  )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
  },
  TextStyle: {
    fontSize: 30,
    fontWeight:'500',
    color: '#333',
    
  }
})