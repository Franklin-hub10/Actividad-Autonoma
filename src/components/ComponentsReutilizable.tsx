import React from 'react'
import { TextInput } from 'react-native'
import { styles } from '../theme/AppTheme'


interface Props{
    placeholder:string
    value:string
    onChangeText: (text: string) => void;
}
const ComponentsReutilizable = ({placeholder,value,onChangeText}:Props) => {
  return (
    <TextInput
    placeholder={placeholder}
    keyboardType= 'numeric'
    style={styles.input}
    value={value}
    onChangeText={onChangeText}
   
/>
  )
}

export default ComponentsReutilizable
