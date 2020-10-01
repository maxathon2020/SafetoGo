import React, {useState} from 'react';
import {View, SafeAreaView, StatusBar, Image, Pressable, TextInput, ScrollView} from 'react-native';
import {scalePx} from '../../utils';
import Text from 'react-native-text';
import {font} from '../../styles';
import {TopBar} from '../../components';
import NavigationService from '../../services/NavigationService';

const Occupation = ({navigation}, props) => {
  const title = "Personal Questionaire";
  const desc = "What is your occupation?";

  const [occupation, setOccupation] = useState('');

  const next = () => navigation.push('FrequentVisits');

  return (
    <SafeAreaView style={{
      backgroundColor: '#FFFFFF',
      width: '100%', height: '100%',
    }}>
      <StatusBar barStyle={'dark-content'}/>
      <TopBar
        onPressBack={NavigationService.canGoBack() && navigation.goBack}
        isShowBack={NavigationService.canGoBack()}
        transparent={true}
      />
      <ScrollView style={{
        flex: 1,
        flexDirection: 'column',
        padding: scalePx(20)
      }}>
        <Text style={{
          marginTop: scalePx(14),
          fontSize: 22,
          color: '#4D4D4D',
          fontFamily: font.POPPINS_BOLD,
          lineHeight: 33
        }}>{title}</Text>
        <Text style={{
          marginTop: scalePx(10),
          fontSize: 14,
          color: '#4D4D4D',
          fontFamily: font.POPPINS_MID,
          lineHeight: 21
        }}>{desc}</Text>
        <TextInput
          value={occupation}
          onChangeText={setOccupation}
          placeholder={"Enter your Occupation"}
          placeholderTextColor={"#4D4D4D40"}
          style={{
            marginTop: scalePx(16),
            borderColor: '#DDDDDD',
            borderWidth: 1,
            borderRadius: 15,
            paddingLeft: 21,
            paddingRight: 21,
            color: "#4D4D4D",
            fontFamily: font.POPPINS_BOLD,
            lineHeight: 21
          }}
        />
        <Pressable
          onPress={next}
          style={{
            marginTop: scalePx(21),
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            borderWidth: 1,
            borderColor: '#7227FF',
            backgroundColor: '#7227FF',
            width: '100%',
            height: scalePx(50),
          }}>
          <Text style={{
            fontSize: 14,
            color: '#FFFFFF',
            fontFamily: font.POPPINS_MID,
            lineHeight: 21
          }}>{"Next"}</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Occupation;
