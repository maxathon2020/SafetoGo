import React, {useEffect, useState} from 'react';
import {ImageBackground, SafeAreaView, View, Pressable, Image, BackHandler} from 'react-native';
import {BottomActionModal, Text, TouchableOpacity} from '../../components';
import {scalePx} from '../../utils';
import {font, lightShadow, shadow} from '../../styles';

const Places = ({navigation}, props) => {
  const PlaceSelector = ({onPress, label, peakHours}) => {
    return (
      <Pressable
        style={{
          width: scalePx(359),
          height: scalePx(80),
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
          borderRadius: 15,
          marginBottom: scalePx(5),
          paddingLeft: scalePx(25.23),
          paddingRight: scalePx(25.23),
          ...lightShadow
        }}
        onPress={onPress}>
        <Image
          style={{width: scalePx(36.86), height: scalePx(52.71)}}
          source={require('../../assets/icons/building.png')}/>
        <View style={{
          flexDirection: 'column',
          marginLeft: scalePx(22.91)
        }}>
          <Text style={{
            fontSize: 18,
            color: '#4D4D4D',
            fontFamily: font.POPPINS_BOLD,
            lineHeight: 23
          }}>{label}</Text>
          <Text style={{
            // marginTop: scalePx(10),
            fontSize: 14,
            color: '#4D4D4D',
            fontFamily: font.POPPINS_MID,
            lineHeight: 21
          }}>{`Peak Hour : ${peakHours}`}</Text>
        </View>
      </Pressable>
    )
  }

  const placesModalContent = () => {
    const places = [
      {
        label: 'Panhandle',
        peakHours: '2pm - 5pm',
        onPress: () => setState(secondaryScreenProps)
      },
      {
        label: 'Anza Mall',
        peakHours: '9am - 12pm',
        onPress: () => {}
      },
      {
        label: 'Turk Blvd',
        peakHours: '2pm - 5pm',
        onPress: () => {}
      },
      {
        label: 'Euclid Ave',
        peakHours: '9am - 12pm',
        onPress: () => {}
      },
    ];
    return (
      <View style={{flexDirection: 'column'}}>
        <Text style={{
          marginLeft: scalePx(25),
          marginTop: scalePx(12),
          marginBottom: scalePx(21),
          fontSize: 14,
          color: '#4D4D4D',
          fontFamily: font.POPPINS_BOLD,
          lineHeight: 21,
        }}>{'Places I visit'}</Text>
        {places.map(place => (
          <PlaceSelector {...place}/>
        ))}
        <View style={{height: scalePx(35)}}/>
      </View>
    );
  };

  const initialScreenProps = {
    imgBgSource: require('../../assets/icons/place-1.png'),
    showPlaces: true,
    modalContent: placesModalContent(),
    onBackButtonPress: () => navigation.goBack()
  };

  const secondaryScreenProps = {
    imgBgSource: require('../../assets/icons/place-2.png'),
    showPlaces: false,
    modalContent: placesModalContent(),
    onBackButtonPress: () => setState(initialScreenProps)
  };

  const [state, setState] = useState(initialScreenProps);

  const Score = ({label, icon, score}) => {
    return (
      <View style={{flexDirection: 'column'}}>
        <Text style={{
          marginTop: scalePx(3),
          flexShrink: 1,
          fontSize: 11,
          lineHeight: 17,
          color: '#FFFFFF',
          fontFamily: font.POPPINS,
        }}>{label}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{width: scalePx(14.95), height: scalePx(14.95)}}
            source={icon}
            resizeMode={'contain'}
          />
          <Text style={{
            marginLeft: scalePx(6.01),
            flexShrink: 1,
            fontSize: 20,
            lineHeight: 30,
            color: '#FFFFFF',
            fontFamily: font.POPPINS_BOLD,
          }}>{score}</Text>
        </View>
      </View>
    )
  }

  useEffect(() => {
    const backHandler =  BackHandler.addEventListener('hardwareBackPress', () => {
      if (!state.showPlaces) {
        setState(initialScreenProps);
      }
      return true;
    });
  }, [state.showPlaces])

  return (
    <ImageBackground
      source={state.imgBgSource}
      style={{
        flex: 1,
      }}
      resizeMode={'stretch'}
    >
      <SafeAreaView style={{opacity: 0}}/>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        {state.showPlaces ? (
          <BottomActionModal
            isVisible={state.showPlaces}
            hasBackdrop={false}
            onBackButtonPress={state.onBackButtonPress}
          >
            {state.modalContent}
          </BottomActionModal>
        ) : (
          <View style={{
            bottom: scalePx(20),
            flexDirection: 'column',
          }}>
            <TouchableOpacity style={{
              alignSelf: 'flex-end',
              marginRight: scalePx(10),
              marginBottom: scalePx(8),
            }}>
              <Image
                style={{width: scalePx(60), height: scalePx(60)}}
                source={require('../../assets/icons/location.png')}
                resizeMode={'cover'}
              />

            </TouchableOpacity>
            <View style={{
              alignSelf: 'center',
              borderRadius: 15,
              backgroundColor: '#FFFFFF',
              width: scalePx(359),
              height: scalePx(203),
              paddingLeft: scalePx(12),
              paddingRight: scalePx(12),
              ...lightShadow
            }}>
              <View style={{
                marginTop: scalePx(18),
                paddingLeft: scalePx(7),
                paddingRight: scalePx(7),
                flexDirection: 'row',
              }}>
                <Image
                  style={{
                    alignSelf: 'flex-end',
                    width: scalePx(65.42), height: scalePx(93.55)}}
                  source={require('../../assets/icons/building.png')}
                  resizeMode={'cover'}
                />
                <View style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginLeft: scalePx(15.58),
                  marginBottom: scalePx(10),
                }}>
                  <Text style={{
                    marginTop: scalePx(5),
                    flexShrink: 1,
                    fontSize: 16,
                    lineHeight: 25,
                    color: '#4D4D4D',
                    fontFamily: font.POPPINS_BOLD,

                  }}>{"Panhandle"}</Text>
                  <View style={{
                    marginTop: scalePx(7),
                    flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{
                      flexShrink: 1,
                      fontSize: 12,
                      lineHeight: 18,
                      color: '#4D4D4D',
                      fontFamily: font.POPPINS_MID,
                    }}>{"You are in "}</Text>
                    <Text style={{
                      flexShrink: 1,
                      fontSize: 12,
                      lineHeight: 18,
                      color: '#FF0000',
                      fontFamily: font.POPPINS_BOLD,

                    }}>{'RED ZONE'}</Text>
                  </View>
                  <Text style={{
                    marginTop: scalePx(3),
                    flexShrink: 1,
                    fontSize: 12,
                    lineHeight: 18,
                    color: '#4D4D4D',
                    fontFamily: font.POPPINS_MID,
                  }}>{"Search Radius : 10km"}</Text>
                  <Text style={{
                    marginTop: scalePx(3),
                    flexShrink: 1,
                    fontSize: 12,
                    lineHeight: 18,
                    color: '#4D4D4D',
                    fontFamily: font.POPPINS_MID,
                  }}>{"Peak Hour : 2pm- 5pm"}</Text>
                </View>
              </View>
              <View style={{
                top: -scalePx(3),
                width: scalePx(335),
                height: scalePx(71),
                alignSelf: 'center',
                borderRadius: 15,
                backgroundColor: '#7227FF',
                paddingTop: scalePx(12),
                paddingLeft: scalePx(30.96),
                paddingRight: scalePx(30.96),
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
                <Score
                  icon={require('../../assets/icons/point-red.png')}
                  label={'Confirmed'}
                  score={'7'}
                />
                <Score
                  icon={require('../../assets/icons/point-green.png')}
                  label={'Recovered'}
                  score={'4'}
                />
                <Score
                  icon={require('../../assets/icons/point-black.png')}
                  label={'Death'}
                  score={'0'}
                />
              </View>
            </View>
          </View>
        )}
      </View>
      <SafeAreaView style={{opacity: 0}}/>
    </ImageBackground>
  )
}

export default Places;
