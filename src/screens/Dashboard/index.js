import React, {useState} from 'react';
import {View, SafeAreaView, StatusBar, Image, Pressable, ScrollView} from 'react-native';
import {scalePx} from '../../utils';
import Text from 'react-native-text';
import {font, lightShadow, shadow} from '../../styles';
import {TopBar} from '../../components';

const Dashboard = ({navigation}, props) => {
  const title = 'Good Morning, John';
  const desc = 'Prevent spreading of COVID-19. Always wear a face mask when you are outside.';

  const next = () => navigation.push('Occupation');

  const [activeTab, setActiveTab] = useState(1);

  const leftButtons = [{
    image: require('../../assets/icons/icon-menu.png')
  }]

  const rightButtons = [{
    image: require('../../assets/icons/icon-noti.png')
  }]

  const TabSelector = ({onPress, selected, label}) => {
    let style = {
      width: scalePx(166.5),
      height: scalePx(33),
      borderRadius: 19,
      alignItems: 'center',
      justifyContent: 'center'
    };

    let textStyle = {
      fontSize: 14,
      fontFamily: font.POPPINS_MID,
      lineHeight: 21,
    }

    if (selected) {
      style = {
        ...style,
        backgroundColor: "#7227FF"
      }
      textStyle = {
        ...textStyle,
        color: '#FFFFFF',
      }
      return (
        <Pressable onPress={onPress} style={style}>
          <Text style={textStyle}>{label}</Text>
        </Pressable>
      )
    } else {
      style = {
        ...style,
        backgroundColor: "#FFFFFF"
      }
      textStyle = {
        ...textStyle,
        color: '#4D4D4D',
      }
      return (
        <Pressable onPress={onPress} style={style}>
          <Text style={textStyle}>{label}</Text>
        </Pressable>
      )
    }
  }

  const SquareTile = ({children, onPress, style}) => {
    return (
      <Pressable
        onPress={onPress}
        style={{
          marginTop: scalePx(15),
          width: scalePx(159),
          height: scalePx(159),
          borderRadius: 15,
          backgroundColor: '#FFFFFF',
          paddingLeft: scalePx(13),
          paddingRight: scalePx(13),
          ...shadow,
          ...style,
        }}>
        {children}
      </Pressable>
    )
  }

  const renderPersonal = () => {
    return (
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          padding: scalePx(5),
          flexDirection: 'column',
        }}>
        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
          <SquareTile style={{overflow: 'hidden'}}>
            <Text style={{
              marginTop: scalePx(29.14),
              fontSize: 12,
              color: '#4D4D4D',
              fontFamily: font.POPPINS_MID,
              lineHeight: 18,
            }}>{"New Cases Today Within 5km"}</Text>
            <Text style={{
              fontSize: 40,
              lineHeight: 60,
              color: '#7227FF',
              fontFamily: font.POPPINS_BOLD,
            }}>{"23"}</Text>
            <Image
              source={require('../../assets/icons/virus.png')}
              style={{
                width: scalePx(78.16), height: scalePx(76.61),
                position: 'absolute',
                bottom: -scalePx(15),
                right: -scalePx(15),
              }}
            />
          </SquareTile>
          <SquareTile>
            <Text style={{
              marginTop: scalePx(29.14),
              fontSize: 12,
              color: '#4D4D4D',
              fontFamily: font.POPPINS_MID,
              lineHeight: 18,
            }}>{"10th Sept 2020"}</Text>
            <View style={{marginTop: scalePx(7), flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../assets/icons/risk-medium.png')}
                style={{
                  width: scalePx(38.48), height: scalePx(60.56),
                }}
              />
              <View style={{marginLeft: scalePx(9.28), flexDirection: 'column', flexShrink: 1}}>
                <Text style={{
                  flexShrink: 1,
                  fontSize: 16,
                  lineHeight: 18,
                  color: '#FF9F07',
                  fontFamily: font.POPPINS_BOLD,

                }}>{"Medium Risk"}</Text>

                <Text style={{
                  marginTop: scalePx(2),
                  flexShrink: 1,
                  fontSize: 10,
                  lineHeight: 16,
                  color: '#4D4D4D',
                  fontFamily: font.POPPINS_BOLD,

                }}>{"Always be alert and protect yourself"}</Text>
              </View>
            </View>
          </SquareTile>
        </View>
        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
          <SquareTile style={{overflow: 'hidden'}}>
            <Image
              source={require('../../assets/icons/prevention.png')}
              style={{
                width: scalePx(110.1), height: scalePx(57.3),
                position: 'absolute',
                bottom: -scalePx(0),
                right: -scalePx(10),
              }}
            />
            <Text style={{
              marginTop: scalePx(26),
              fontSize: 12,
              color: '#7227FF',
              fontFamily: font.POPPINS_MID,
              lineHeight: 18,
            }}>{"Announcement"}</Text>
            <Text style={{
              fontSize: 16,
              lineHeight: 25,
              color: '#4D4D4D',
              fontFamily: font.POPPINS_BOLD,
            }}>{"Protect yourself"}</Text>
            <Text style={{
              marginTop: scalePx(2),
              flexShrink: 1,
              fontSize: 10,
              lineHeight: 16,
              color: '#4D4D4D',
              fontFamily: font.POPPINS_MID,
            }}>{"Always wash your hands with soap and water."}</Text>
          </SquareTile>
          <SquareTile>
            <Image
              source={require('../../assets/icons/siren.png')}
              style={{
                width: scalePx(59.43), height: scalePx(59.9),
                position: 'absolute',
                bottom: -scalePx(0),
                right: scalePx(5),
              }}
            />
            <Text style={{
              marginTop: scalePx(26),
              fontSize: 12,
              color: '#7227FF',
              fontFamily: font.POPPINS_MID,
              lineHeight: 18,
            }}>{"Contact Alert"}</Text>
            <Text style={{
              marginTop: scalePx(7),
              flexShrink: 1,
              fontSize: 10,
              lineHeight: 16,
              color: '#4D4D4D',
              fontFamily: font.POPPINS_MID,
            }}>{"We will alert you if we found any potential dangerous close contact."}</Text>
          </SquareTile>
        </View>
        <Pressable
          onPress={() => {}}
          style={{
            marginTop: scalePx(15),
            width: scalePx(335),
            height: scalePx(99),
            borderRadius: 15,
            backgroundColor: '#FFFFFF',
            paddingLeft: scalePx(13),
            paddingRight: scalePx(13),
            ...shadow,
            flexDirection: 'row',
            alignItems: 'center'
          }}>
          <Image
            source={require('../../assets/icons/search-place.png')}
            style={{
              width: scalePx(30), height: scalePx(30),
            }}
          />
          <View style={{marginLeft: scalePx(11.97), flexDirection: 'column', flexShrink: 1}}>
            <Text style={{
              flexShrink: 1,
              fontSize: 14,
              lineHeight: 21,
              color: '#4D4D4D',
              fontFamily: font.POPPINS_BOLD,

            }}>{"Places You Often Visit"}</Text>
            <Text style={{
              marginTop: scalePx(5),
              flexShrink: 1,
              fontSize: 12,
              lineHeight: 18,
              color: '#4D4D4D',
              fontFamily: font.POPPINS_MID,

            }}>{"Find out how many people are COVID confirmed in the area you always visit"}</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {}}
          style={{
            marginTop: scalePx(15),
            width: scalePx(335),
            height: scalePx(256),
            borderRadius: 15,
            backgroundColor: '#FFFFFF',
            paddingLeft: scalePx(21),
            paddingRight: scalePx(21),
            ...shadow,
            flexDirection: 'row',
            // alignItems: 'center'
          }}>
          <View style={{
            marginTop: scalePx(25), flexDirection: 'column', flexShrink: 1}}>
            <Text style={{
              flexShrink: 1,
              fontSize: 16,
              lineHeight: 18,
              color: '#4D4D4D',
              fontFamily: font.POPPINS_BOLD,

            }}>{"My Risk Report"}</Text>
            <Image
              source={require('../../assets/icons/graph-1.png')}
              style={{
                marginTop: scalePx(25),
                width: scalePx(293.94), height: scalePx(169),
              }}
            />
          </View>
        </Pressable>
        <Pressable
          onPress={() => {}}
          style={{
            marginTop: scalePx(15),
            width: scalePx(335),
            height: scalePx(256),
            borderRadius: 15,
            backgroundColor: '#FFFFFF',
            paddingLeft: scalePx(21),
            paddingRight: scalePx(21),
            ...shadow,
            flexDirection: 'row',
            // alignItems: 'center'
          }}>
          <View style={{
            marginTop: scalePx(25), flexDirection: 'column', flexShrink: 1}}>
            <Text style={{
              flexShrink: 1,
              fontSize: 16,
              lineHeight: 18,
              color: '#4D4D4D',
              fontFamily: font.POPPINS_BOLD,

            }}>{"COVID-19 Forecast in My Region"}</Text>
            <Image
              source={require('../../assets/icons/graph-2.png')}
              style={{
                marginTop: scalePx(25),
                width: scalePx(293.94), height: scalePx(169),
              }}
            />
          </View>
        </Pressable>
        <Pressable
          style={{
            marginTop: scalePx(24.2),
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            borderWidth: 1,
            borderColor: '#7227FF10',
            backgroundColor: '#7227FF10',
            width: '100%',
            height: scalePx(50),
          }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <Text style={{
              fontSize: 20,
              lineHeight: 40,
              color: '#7227FF',
              fontFamily: font.POPPINS_BOLD,
            }}>{"+"}</Text>
            <Text style={{
              fontSize: 14,
              color: '#7227FF',
              fontFamily: font.POPPINS_BOLD,
              lineHeight: 21
            }}>{"   Add Widget"}</Text>
          </View>
        </Pressable>
      </View>
    )
  }

  const renderProfessional = () => {
    return (
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          padding: scalePx(5),
          flexDirection: 'column',
        }}>
        <Pressable
          onPress={() => {}}
          style={{
            marginTop: scalePx(15),
            width: scalePx(335),
            height: scalePx(139),
            borderRadius: 15,
            backgroundColor: '#FFFFFF',
            paddingLeft: scalePx(21),
            paddingRight: scalePx(21),
            ...shadow,
            flexDirection: 'row',
            overflow: 'hidden',
            // alignItems: 'center'
          }}>
          <Image
            source={require('../../assets/icons/virus.png')}
            style={{
              width: scalePx(103.12), height: scalePx(116.91),
              position: 'absolute',
              bottom: scalePx(8),
              right: -scalePx(20),
            }}
          />
          <View style={{
            marginTop: scalePx(29.14), flexDirection: 'column', flexShrink: 1}}>
            <Text style={{
              flexShrink: 1,
              fontSize: 12,
              lineHeight: 18,
              color: '#4D4D4D',
              fontFamily: font.POPPINS_MID,

            }}>{"New Cases"}</Text>
            <View style={{
              width: scalePx(205),
              marginTop: scalePx(13.86), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={{
                flexShrink: 1,
                fontSize: 16,
                lineHeight: 18,
                color: '#4D4D4D',
                fontFamily: font.POPPINS_BOLD,

              }}>{"Medical Center"}</Text>
              <Text style={{
                flexShrink: 1,
                fontSize: 18,
                lineHeight: 27,
                color: '#7227FF',
                fontFamily: font.POPPINS_BOLD,
              }}>{"24"}</Text>
            </View>
            <View style={{
              width: scalePx(205),
              marginTop: scalePx(5), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={{
                flexShrink: 1,
                fontSize: 16,
                lineHeight: 18,
                color: '#4D4D4D',
                fontFamily: font.POPPINS_BOLD,

              }}>{"Quarantine Center"}</Text>
              <Text style={{
                flexShrink: 1,
                fontSize: 18,
                lineHeight: 27,
                color: '#7227FF',
                fontFamily: font.POPPINS_BOLD,
              }}>{"125"}</Text>
            </View>
          </View>
        </Pressable>
        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
          <SquareTile>
            <Text style={{
              marginTop: scalePx(29.14),
              fontSize: 12,
              color: '#4D4D4D',
              fontFamily: font.POPPINS_MID,
              lineHeight: 18,
            }}>{"10th Sept 2020"}</Text>
            <View style={{marginTop: scalePx(7), flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../assets/icons/risk-high.png')}
                style={{
                  width: scalePx(38.48), height: scalePx(60.56),
                }}
              />
              <View style={{marginLeft: scalePx(9.28), flexDirection: 'column', flexShrink: 1}}>
                <Text style={{
                  flexShrink: 1,
                  fontSize: 16,
                  lineHeight: 18,
                  color: '#FF0000',
                  fontFamily: font.POPPINS_BOLD,

                }}>{"High Risk"}</Text>

                <Text style={{
                  marginTop: scalePx(2),
                  flexShrink: 1,
                  fontSize: 10,
                  lineHeight: 16,
                  color: '#4D4D4D',
                  fontFamily: font.POPPINS_BOLD,

                }}>{"Always be alert and protect yourself"}</Text>
              </View>
            </View>
          </SquareTile>
          <SquareTile style={{overflow: 'hidden'}}>
            <Text style={{
              marginTop: scalePx(29.14),
              fontSize: 12,
              color: '#4D4D4D',
              fontFamily: font.POPPINS_MID,
              lineHeight: 18,
            }}>{"Cases By Region"}</Text>
            <Text style={{
              marginTop: scalePx(8.86),
              fontSize: 16,
              color: '#4D4D4D',
              fontFamily: font.POPPINS_BOLD,
              lineHeight: 20,
            }}>{"San Francisco Bay Area"}</Text>
            <Text style={{
              marginTop: scalePx(8.86),
              fontSize: 18,
              lineHeight: 27,
              color: '#7227FF',
              fontFamily: font.POPPINS_BOLD,
            }}>{"56"}</Text>
            <Image
              source={require('../../assets/icons/world.png')}
              style={{
                width: scalePx(63.67), height: scalePx(63.65),
                position: 'absolute',
                bottom: -scalePx(7.5),
                right: -scalePx(7.5),
              }}
            />
          </SquareTile>
        </View>

        <Pressable
          onPress={() => {}}
          style={{
            marginTop: scalePx(15),
            width: scalePx(335),
            height: scalePx(180),
            borderRadius: 15,
            backgroundColor: '#FFFFFF',
            paddingLeft: scalePx(13),
            paddingRight: scalePx(13),
            ...shadow,
          }}>
          <View style={{
            marginTop: scalePx(20),
            marginLeft: scalePx(11.97), flexDirection: 'column', flexShrink: 1}}>
            <Text style={{
              flexShrink: 1,
              fontSize: 12,
              lineHeight: 18,
              color: '#7227FF',
              fontFamily: font.POPPINS_MID,

            }}>{"Volunteers"}</Text>
            <Text style={{
              marginTop: scalePx(5),
              flexShrink: 1,
              fontSize: 16,
              lineHeight: 25,
              color: '#4D4D4D',
              fontFamily: font.POPPINS_BOLD,

            }}>{"Join as Volunteer Today"}</Text>
            <Text style={{
              marginTop: scalePx(5),
              flexShrink: 1,
              fontSize: 10,
              lineHeight: 16,
              color: '#4D4D4D',
              fontFamily: font.POPPINS_MID,

            }}>{"We need you! Currently we have "}
            <Text style={{
              fontSize: 12,
              lineHeight: 16,
              fontFamily: font.POPPINS_BOLD,
              color: '#7227FF',
            }}>{"146"}</Text>{" of us and we still need more. Join us as a Volunteer and help us flatten the curve."}</Text>
            <Pressable
              style={{
                marginTop: scalePx(8),
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 19,
                borderWidth: 1,
                borderColor: '#7227FF',
                backgroundColor: '#7227FF',
                width: scalePx(101),
                height: scalePx(37),
              }}>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
                <Text style={{
                  fontSize: 12,
                  color: '#FFFFFF',
                  fontFamily: font.POPPINS_MID,
                  lineHeight: 18
                }}>{"Join Now"}</Text>
              </View>
            </Pressable>
          </View>
        </Pressable>

        <Pressable
          onPress={() => {}}
          style={{
            marginTop: scalePx(15),
            width: scalePx(335),
            height: scalePx(99),
            borderRadius: 15,
            backgroundColor: '#FFFFFF',
            paddingLeft: scalePx(13),
            paddingRight: scalePx(13),
            ...shadow,
            flexDirection: 'row',
            alignItems: 'center'
          }}>
          <Image
            source={require('../../assets/icons/search-place.png')}
            style={{
              width: scalePx(30), height: scalePx(30),
            }}
          />
          <View style={{marginLeft: scalePx(11.97), flexDirection: 'column', flexShrink: 1}}>
            <Text style={{
              flexShrink: 1,
              fontSize: 14,
              lineHeight: 21,
              color: '#4D4D4D',
              fontFamily: font.POPPINS_BOLD,

            }}>{"Places You Often Visit"}</Text>
            <Text style={{
              marginTop: scalePx(5),
              flexShrink: 1,
              fontSize: 12,
              lineHeight: 18,
              color: '#4D4D4D',
              fontFamily: font.POPPINS_MID,

            }}>{"Find out how many people are COVID confirmed in the area you always visit"}</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {}}
          style={{
            marginTop: scalePx(15),
            width: scalePx(335),
            height: scalePx(256),
            borderRadius: 15,
            backgroundColor: '#FFFFFF',
            paddingLeft: scalePx(21),
            paddingRight: scalePx(21),
            ...shadow,
            flexDirection: 'row',
            // alignItems: 'center'
          }}>
          <View style={{
            marginTop: scalePx(25), flexDirection: 'column', flexShrink: 1}}>
            <Text style={{
              flexShrink: 1,
              fontSize: 16,
              lineHeight: 18,
              color: '#4D4D4D',
              fontFamily: font.POPPINS_BOLD,

            }}>{"My Risk Report"}</Text>
            <Image
              source={require('../../assets/icons/graph-1.png')}
              style={{
                marginTop: scalePx(25),
                width: scalePx(293.94), height: scalePx(169),
              }}
            />
          </View>
        </Pressable>
        <Pressable
          style={{
            marginTop: scalePx(24.2),
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            borderWidth: 1,
            borderColor: '#7227FF10',
            backgroundColor: '#7227FF10',
            width: '100%',
            height: scalePx(50),
          }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <Text style={{
              fontSize: 20,
              lineHeight: 40,
              color: '#7227FF',
              fontFamily: font.POPPINS_BOLD,
            }}>{"+"}</Text>
            <Text style={{
              fontSize: 14,
              color: '#7227FF',
              fontFamily: font.POPPINS_BOLD,
              lineHeight: 21
            }}>{"   Add Widget"}</Text>
          </View>
        </Pressable>
      </View>
    )
  }

  return (
    <SafeAreaView style={{
      backgroundColor: '#FFFFFF',
      width: '100%', height: '100%',
    }}>
      <StatusBar barStyle={'dark-content'}/>
      <View style={{
        position: 'absolute',
        backgroundColor: '#7227FF',
        height: scalePx(373),
        width: '100%',
      }}/>
      <TopBar
        isShowBack={false}
        transparent={true}
        leftButtons={leftButtons}
        rightButtons={rightButtons}
      />
      <View
        style={{
          flexDirection: 'column',
          marginTop: scalePx(20.71),
        }}>
        <View style={{padding: scalePx(20)}}>
          <Text style={{
            marginTop: scalePx(14),
            fontSize: 22,
            color: '#FFFFFF',
            fontFamily: font.POPPINS_BOLD,
            lineHeight: 33,
          }}>{title}</Text>
          <Text style={{
            marginTop: scalePx(18),
            fontSize: 14,
            color: '#FFFFFF',
            fontFamily: font.POPPINS_MID,
            lineHeight: 21,
          }}>{desc}</Text>
        </View>
        <View style={{
          alignSelf: 'center',
          marginTop: scalePx(15),
          height: scalePx(35),
          width: scalePx(335),
          borderRadius: 19,
          borderWidth: 1,
          borderColor: '#FFFFFF',
          flexDirection: 'row',
          backgroundColor: '#FFFFFF'
        }}>
          <TabSelector
            onPress={() => setActiveTab(1)}
            selected={activeTab === 1}
            label={"Personal"}
          />
          <TabSelector
            onPress={() => setActiveTab(0)}
            selected={activeTab === 0}
            label={"Professional"}
          />
        </View>
      </View>
      <ScrollView style={{
        height: '100%',
        marginTop: scalePx(5),
        padding: scalePx(15),
      }}>
        {activeTab === 1 ? renderPersonal() : renderProfessional()}
        <View style={{height: scalePx(100)}}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
