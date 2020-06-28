import React, { useState, useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const reducer = (state, action ) => {
  switch(action.type) {
    case 'Increment':
      return { count: state.count + action.payload }
    case 'Decrement':
      return { count: state.count - action.payload }
    default:
      return state
  }
}
const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  return <View>
    <Button title='Increase'onPress={() => {
      dispatch({ type: 'Increment',  payload: 1})

    }} />
    <Button title='Decrease' onPress={() => {
      dispatch({ type: 'Decrement', payload: 1})
    }} />
    <Text>Current Count: {state.count}</Text>
  </View>
}

const styles = StyleSheet.create({})

export default CounterScreen
