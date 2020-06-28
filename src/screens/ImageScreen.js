import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../Components/ImageDetails'

const ImageScreen = () => {
  return <View>
    <ImageDetail score={9} title='Forest' imageSource={require('../../assets/forest.jpg')} />
    <ImageDetail score={8} title='Beach' imageSource={require('../../assets/beach.jpg')} />
    <ImageDetail score={8} title='Mountain' imageSource={require('../../assets/mountain.jpg')} />
  </View>
}

const styles = StyleSheet.create({})

export default ImageScreen
