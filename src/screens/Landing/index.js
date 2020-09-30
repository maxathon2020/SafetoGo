import React from 'react';
import {View, SafeAreaView, StatusBar, Image, Pressable} from 'react-native';
import {scalePx} from '../../utils';
import Text from 'react-native-text';
import {font} from '../../styles';

const Landing = ({navigation}, props) => {
  const title = "SafetoGo App";
  const desc = "SafetoGo is an innovative app that provides you with valuable COVID-19 insights that are carefully tailored to match your lifestyle when you are adjusting to the new norm.";

  return (
    <SafeAreaView style={{
      backgroundColor: '#7227FF',
      width: '100%', height: '100%',
    }}>
      <StatusBar barStyle={'light-content'}/>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
        padding: scalePx(20)
      }}>
        <Image
          style={{
            height: scalePx(85),
            width: scalePx(85),
          }}
          source={require('../../assets/icons/safetogo-logo-square.png')}
          resizeMode={'contain'}
        />
        <Text style={{
          marginTop: scalePx(14),
          fontSize: 34,
          color: '#FFFFFF',
          fontFamily: font.POPPINS_BOLD,
          lineHeight: 51
        }}>{title}</Text>
        <Text style={{
          marginTop: scalePx(18),
          fontSize: 14,
          color: '#FFFFFF',
          fontFamily: font.POPPINS_MID,
          lineHeight: 21
        }}>{desc}</Text>
        <Pressable style={{
          marginTop: scalePx(29),
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 15,
          backgroundColor: '#FFFFFF',
          width: '100%',
          height: scalePx(50)
        }}>
          <Text style={{
            fontSize: 14,
            color: '#7227FF',
            fontFamily: font.POPPINS_MID,
            lineHeight: 21
          }}>{"Let’s Go"}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default Landing;
