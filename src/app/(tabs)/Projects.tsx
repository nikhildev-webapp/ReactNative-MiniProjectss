import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Projects = () => {
  return (
   <ScrollView>
           <Text style={styles.title}>React Native Mini Projects</Text>
           <View>
              <Text style={styles.subtitle}>Click On The Links Below</Text>
              <Link href="/" style={styles.Btn}>Go Back</Link>
          </View>
            <Text style={{textAlign:'center',fontSize:18,fontWeight:'bold'}}>Mini Projects Link</Text>
            <Link href="/(tabs)/Profile" style={styles.Btn}>Profile</Link>
    </ScrollView>
  )
}

export default Projects

const styles = StyleSheet.create({
    title: {
        marginTop: 50,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        
    },
    subtitle: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 16,
    },
    Btn: {
        borderWidth: 1,
        width: 100,
        textAlign: 'center',
        borderRadius: 5,
        margin:10,
        borderColor: 'black',
        padding: 10,
        backgroundColor: 'black',
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})