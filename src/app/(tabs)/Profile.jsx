import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Profile = () => {
  return (
    <View >
        <View style={styles.Card}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Profile</Text>
            <Text style={{fontSize: 16, marginTop: 10}}>Name: Nikhil</Text>      
            <Text style={{fontSize: 16, marginTop: 10}}>Age: 21</Text>      
            <Text style={{ fontSize: 16, marginTop: 10 }}>Occupation: Software Developer</Text>
            <Link href="/(tabs)/Projects" style={{color:'blue', fontSize: 16,}}>Go Back</Link>
        </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    Card: {
        width: '80%',
        height: 200,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        justifySelf: 'center',
        alignSelf: 'center',
        marginTop: 300,
    }
})