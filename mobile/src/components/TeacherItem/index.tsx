import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';


function TeacherItem() {
    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{ uri: 'https://avatars0.githubusercontent.com/u/62677866?s=460&u=73b4453cea7ddd7b72ccc9f9ed3ef07e07f199cc&v=4' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Lucas Sachet</Text>
                    <Text style={styles.subject}>Maths</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                I'm a Full Stack developer and a enthusiastic about JavaScript technologies and their entire ecosystem.
                {'\n'} {'\n'}
                "Success is the sum of small efforts repeated day after day" – Robert Collier.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Price {'  '}
                    <Text style={styles.priceValue}>$60,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>
                    
                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Get in touch</Text>
                    </RectButton>

                </View>
            </View>
        </View>
    );
}

export default TeacherItem;