import React, {useEffect, useRef, useState} from 'react';
import {View, SafeAreaView, StatusBar, Image, Pressable, TextInput, ScrollView, ActivityIndicator} from 'react-native';
import {scalePx} from '../../utils';
import Text from 'react-native-text';
import {font} from '../../styles';
import {TopBar} from '../../components';
import NavigationService from '../../services/NavigationService';
import debounce from 'lodash/debounce';

const FrequentVisits = ({navigation}, props) => {
  const title = "Personal Questionaire";
  const desc = "Please list your frequent visits.";

  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);

  const stopLoading = () => setLoading(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      stopLoading()
    }, 1500)
    return () => {
      clearTimeout(timer);
    }
  }, [location])


  const next = () => navigation.push('ThankYou');

  const MapContent = ({location, loading = false}) => {
    if (loading) {
      return (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <ActivityIndicator size={"large"} color={'#7227FF'}/>
        </View>
      );
    }

    if (!!location) {
      return (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: scalePx(10.5)
        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#DBDBDB',
            width: scalePx(314.7),
            height: scalePx(74.3)
          }}>
            <Image
              source={require('../../assets/icons/point-red.png')}
              style={{
                width: scalePx(24.3),
                height: scalePx(24.3)
              }}
              resizeMode={'contain'}
            />
            <View style={{
              flexDirection: 'column',
              marginLeft: scalePx(7.85)
            }}>
              <Text style={{
                fontSize: 16,
                color: '#4D4D4D',
                fontFamily: font.POPPINS_BOLD,
                lineHeight: 25,
              }}>{location}</Text>
              <Text style={{
                marginTop: scalePx(3),
                fontSize: 14,
                color: '#4D4D4D',
                fontFamily: font.POPPINS_MID,
                lineHeight: 21,
              }}>{"Street Name, City, State, 99999"}</Text>
            </View>
          </View>
        </View>
      )
    }
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Image
          source={require('../../assets/icons/point-red.png')}
          style={{
            width: scalePx(50),
            height: scalePx(50),
          }}
          resizeMode={'contain'}
        />
        <Text style={{
          marginTop: scalePx(11),
          fontSize: 14,
          color: '#4D4D4D',
          fontFamily: font.POPPINS_MID,
          lineHeight: 21,
        }}>{"Search your frequent visits"}</Text>
      </View>
    )
  }


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
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        style={{
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
          value={location}
          onChangeText={setLocation}
          placeholder={"Search location"}
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
        <View style={{
          marginTop: scalePx(10),
          width: scalePx(335),
          height: scalePx(428),
          backgroundColor: "#F9F9FF",
          borderRadius: 15,
          flexDirection: 'row',
        }}>
          <MapContent
            loading={loading}
            location={location}
          />
        </View>
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
        <View style={{height: scalePx(100)}}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default FrequentVisits;
