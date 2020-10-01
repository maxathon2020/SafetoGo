import React from 'react';
import {View, SafeAreaView, StatusBar, Image, Pressable} from 'react-native';
import {scalePx} from '../../utils';
import Text from 'react-native-text';
import {font} from '../../styles';
import {TopBar} from '../../components';
import NavigationService from '../../services/NavigationService';

const ThankYou = ({navigation}, props) => {
  const title = "Thank you for your info!";
  const desc = "Your provided information is successfully saved. Go ahead and take a look at the dashboard customized just for you!";

  const next = () => navigation.push('Dashboard');

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
            height: scalePx(65.8),
            width: scalePx(77.32),
            alignSelf: 'center'
          }}
          source={require('../../assets/icons/survey.png')}
          resizeMode={'contain'}
        />
        <Pressable
          onPress={next}
          style={{
            marginTop: scalePx(24.2),
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
          }}>{"Go to Dashboard"}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default ThankYou;
