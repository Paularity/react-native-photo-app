import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default function TestComponent(props)
{
    return <Text>{ props.favoriteAnimal }</Text>
}