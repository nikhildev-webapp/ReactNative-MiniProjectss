import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Profile = () => {
  return (
    <View style={styles.Container}>
        <View style={styles.Card}>
            <Text style={{fontSize: 20, fontWeight: 'bold',textAlign: 'center'}}>Profile</Text>
            <Text style={{fontSize: 16, marginBottom: 10}}>Name: Nikhil</Text>      
            <Text style={{fontSize: 16, marginBottom: 10}}>Age: 21</Text>      
            <Text style={{ fontSize: 16, marginBottom: 10 }}>Occupation: Software Developer</Text>
            <Link href="/(tabs)/Projects" style={{color:'blue', fontSize: 16,textAlign: 'center'}}>Go Back</Link>
        </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    Card: {
        width: '80%',
        height: 200,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        justifyContent: 'center',
    }
})