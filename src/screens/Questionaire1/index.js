import React from 'react';
import {View, SafeAreaView, StatusBar, Image, Pressable, ImageBackground} from 'react-native';
import {scalePx} from '../../utils';
import Text from 'react-native-text';
import {font} from '../../styles';
import {TopBar} from '../../components';
import NavigationService from '../../services/NavigationService';

const Questionnaire1 = ({navigation}, props) => {
  const title = "Personal Questionnaire";
  const desc = "This questionnaire is to understand your daily routine visit so that we can show you a more relevant information amidst of COVID-19.";

  const next = () => {};

  return (
    <SafeAreaView style={{
      backgroundColor: '#FFFFFF',
      width: '100%', height: '100%',
    }}>
      <StatusBar barStyle={'darks-content'}/>
      <ImageBackground
        style={{
          flex: 1,
          width: '100%',
        }}
        source={require('../../assets/icons/survey-bg.png')}
        resizeMode={'stretch'}
      >
        <TopBar
          onPressBack={NavigationService.canGoBack() && navigation.goBack}
          isShowBack={NavigationService.canGoBack()}
          transparent={true}
        />
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: scalePx(20),
        }}>
          <View>
            <Text style={{
              marginTop: scalePx(14),
              fontSize: 22,
              color: '#4D4D4D',
              fontFamily: font.POPPINS_BOLD,
              lineHeight: 33,
            }}>{title}</Text>
            <Text style={{
              marginTop: scalePx(18),
              fontSize: 14,
              color: '#4D4D4D',
              fontFamily: font.POPPINS_MID,
              lineHeight: 21,
            }}>{desc}</Text>
          </View>
          <Pressable
            onPress={next}
            style={{
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              borderWidth: 1,
              borderColor: '#7227FF',
              backgroundColor: '#7227FF',
              width: '100%',
              height: scalePx(50),
              marginBottom: scalePx(25)
            }}>
            <Text style={{
              fontSize: 14,
              color: '#FFFFFF',
              fontFamily: font.POPPINS_MID,
              lineHeight: 21
            }}>{"Next"}</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Questionnaire1;
