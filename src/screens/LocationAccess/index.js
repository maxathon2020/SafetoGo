import React from 'react';
import {View, SafeAreaView, StatusBar, Image, Pressable} from 'react-native';
import {scalePx} from '../../utils';
import Text from 'react-native-text';
import {font} from '../../styles';
import {TopBar} from '../../components';
import NavigationService from '../../services/NavigationService';

const LocationAccess = ({navigation}, props) => {
  const title = "Allow Location Access";
  const desc = "Kindly enable your mobile’s location so that we can have a better read of your area’s COVID-19 statistics.";

  const next = () => navigation.push('Questionnaire1');

  return (
    <SafeAreaView style={{
      backgroundColor: '#FFFFFF',
      width: '100%', height: '100%',
    }}>
      <StatusBar barStyle={'darks-content'}/>
      <TopBar
        onPressBack={NavigationService.canGoBack() && navigation.goBack}
        isShowBack={NavigationService.canGoBack()}
        transparent={true}
      />
      <View style={{
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
          marginTop: scalePx(18),
          fontSize: 14,
          color: '#4D4D4D',
          fontFamily: font.POPPINS_MID,
          lineHeight: 21
        }}>{desc}</Text>
        <Image
          style={{
            marginTop: scalePx(24),
            height: scalePx(85),
            width: scalePx(85),
            alignSelf: 'center'
          }}
          source={require('../../assets/icons/gps.png')}
          resizeMode={'contain'}
        />
        <Pressable
          onPress={next}
          style={{
            marginTop: scalePx(28.8),
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            borderWidth: 1,
            borderColor: '#7227FF',
            backgroundColor: '#FFFFFF',
            width: '100%',
            height: scalePx(50),
          }}>
          <Text style={{
            fontSize: 14,
            color: '#7227FF',
            fontFamily: font.POPPINS_MID,
            lineHeight: 21
          }}>{"Skip for now"}</Text>
        </Pressable>
        <Pressable
          onPress={next}
          style={{
            marginTop: scalePx(9),
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
          }}>{"Enable Location"}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default LocationAccess;
