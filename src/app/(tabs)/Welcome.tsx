import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Welcome = () => {
    const Badge = require('../../../assets/images/expo-badge.png')
  return (
    <View style={styles.container}>
          <Text>Welcome</Text>
          <Image source={Badge} style={{ width: 100, height: 100 }} />
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})