import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import giveClassesBgImg from '../../assets/images/give-classes-background.png';

import styles from './styles';



function GiveClasses() {
    const navigation = useNavigation();

    function handleNavigateBack() {
        navigation.goBack();
    }

    return (
    <View  style={styles.container}>
        <ImageBackground 
        resizeMode='contain'
        source={giveClassesBgImg} 
        style={styles.content}
        >
            <Text style={styles.title}>Do you want to be a Proffy?</Text>
            <Text style={styles.description}>
                To get started you need to register as a teacher in our web plataform
            </Text>

        </ImageBackground>

        <RectButton onPress={handleNavigateBack} style={styles.okButton}>
            <Text style={styles.okButtonText}>All right!</Text>
        </RectButton>
    </View>
    
    );
}

export default GiveClasses;