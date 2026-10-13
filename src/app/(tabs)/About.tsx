import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const About = () => {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
         <View style={styles.card}>
             <Text style={styles.title}>About</Text>
             <Text style={styles.subtitle}>React Native App</Text>
             <Link href="/" style={styles.link}>Home</Link>   
        </View>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    card: {
    justifyContent: "center",   
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    margin: 16,
  },
  title: { fontSize: 20, fontWeight: "bold", color: "#111" },
  subtitle: { fontSize: 14, color: "#666", marginTop: 4 },
  link: { fontSize: 16, color: "blue", marginTop: 8 },
})