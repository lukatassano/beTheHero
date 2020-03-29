import React from 'react';
import { View, Text, Image,TouchableOpacity, Linking } from 'react-native';
import logoImg from '../../assets/logo.png';
import { Feather } from "@expo/vector-icons";
import {useNavigation} from '@react-navigation/native';
import * as MailComposer from "expo-mail-composer";

import styles from './styles';

export default function Detail() {
  const navigation = useNavigation();
  const message = 'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Cachorro atropelado" com o valor de R$ 120,00'

  function navigateToIncidents() {
    navigation.goBack();
  }

  function sendEmail() {
    MailComposer.composeAsync({
      subject: 'Herói do caso: Cachorro atropelado',
      recipients: ['lukatassano070@gmail.com'],
      body: message,
    })
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=5551982668640&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header} >
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateToIncidents}>
          <Feather name="arrow-left" size={28} color="#E02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
        <Text style={styles.incidentValue}>APAD</Text>

        <Text style={styles.incidentProperty}>Caso:</Text>
        <Text style={styles.incidentValue}>cachorro atropelado</Text>

        <Text style={styles.incidentProperty}>Valor:</Text>
        <Text style={styles.incidentValue}>R$ 120,00</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso!</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity onPress={sendWhatsapp} style={styles.action}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={sendEmail} style={styles.action}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
