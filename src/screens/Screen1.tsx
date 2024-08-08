import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';


interface Props extends StackScreenProps<RootStackParams,'Home'> {}

const Screen1 = ( { navigation}: Props) => {

    return (
        <View style={styles.container}>
        <ImageBackground source={require('../../assets/LogoF.png')}
            style={styles.backgroundImage}
            resizeMode="cover">
            <View style={styles.overlay}>
                <Text style={styles.textTitle}>Bienvenido</Text>
                <Image source={require('../../assets/LogoT.png')} style={styles.posicionLogo} />
                <TouchableOpacity style={styles.containerButton}  onPress={() => navigation.navigate('Calculadora')}>
                    <Text style={styles.accederButton} >Acceder</Text>
                    </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
    )
}

export default Screen1
