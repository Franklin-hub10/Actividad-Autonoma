import React, { useState } from 'react'
import { Alert, Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/AppTheme';
import ComponentsReutilizable from '../components/ComponentsReutilizable'



const Screen2 = () => {
    const [valor1, setValue1] = useState<string>('');
    const [valor2, setValue2] = useState<string>('');
    const [resultado, setResultado] = useState<string | null>(null);


    
    const division = () => {
        const num1 = parseFloat(valor1);
        const num2 = parseFloat(valor2);

        if (isNaN(num1) || isNaN(num2)) {
            Alert.alert('Error', 'Por favor ingrese valores válidos');
            return;
        }

        if (num1 === 0 && num2 === 0) {
            setResultado('INDETERMINACIÓN');
        } else if (num2 === 0) {
            setResultado('NO EXISTE DIVISIÓN PARA CERO');
        } else {
            setResultado((num1 / num2).toFixed(2));
        }
    };


    return (
        <View style={styles.container}>
            <ImageBackground 
                source={require('../../assets/LogoF.png')}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                 <View style={styles.organizacionInput}>
                    <ComponentsReutilizable 
                        placeholder='Ingrese el primer valor'
                        value={valor1}
                        onChangeText={setValue1}
                    />
                    <ComponentsReutilizable 
                        placeholder='Ingrese el segundo valor'
                        value={valor2}
                        onChangeText={setValue2}
                    />
                    <TouchableOpacity style={styles.containerButton} onPress={division}>
                        <Text style={styles.accederButton}>Dividir</Text>
                    </TouchableOpacity>
                    {resultado !== null && (
                        <Text style={styles.resultText}>El resultado es: {resultado}</Text>
                    )}
                </View>
            </ImageBackground>
        </View>
    )
}

export default Screen2
