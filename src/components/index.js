import React from 'react';
import {scalePx} from '../utils';
import {View, Image, TouchableOpacity as RNTouchableOpacity, Pressable} from 'react-native';
import RNText from 'react-native-text';
import {font} from '../styles';

export const Text = RNText;

export const TopBar = React.memo((props) => {
  const leftButtons =
    props.leftButtons && (props.leftButtons instanceof Array ? props.leftButtons : [props.leftButtons]);
  const rightButtons =
    props.rightButtons && (props.rightButtons instanceof Array ? props.rightButtons : [props.rightButtons]);
  const {
    onPressBack = () => {},
    isShowBack = false,
    title = '',
    height = scalePx(50),
    drawer = () => {},
    rightMenu,
    labelColor = '#FFFFFF',
    lineColor = '#4D4D4D'
  } = props;
  const childComponent = (
    <View
      style={{
        marginTop: scalePx(61.5),
        flexDirection: 'row',
        paddingLeft: scalePx(20),
        paddingRight: scalePx(20),
        backgroundColor: 'transparent',
      }}
    >
      <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
        {drawer()}
        {isShowBack && (
          <Pressable
            style={{
              height,
              justifyContent: 'center',
              alignItems: 'center',
              width: scalePx(50),
              marginLeft: -scalePx(20),
            }}
            onPress={onPressBack}>
            <Image
              source={require('../assets/icons/icons-back.png')}
              style={{
                alignSelf: 'center',
                width: scalePx(17),
                height: scalePx(17) ,
                tintColor: lineColor
              }}
            />
          </Pressable>
        )}
        {leftButtons &&
        leftButtons.map((item, index) => (
          <TouchableOpacity
            style={{width: scalePx(50), height: scalePx(50), justifyContent: 'center'}}
            onPress={item.onPress} key={index}>
            <View style={{ height, justifyContent: 'center', marginLeft: -scalePx(30), marginRight: 5, padding: 5 }}>
              <Image
                source={item.image}
                style={{ alignSelf: 'center', width: scalePx(20), height: scalePx(20) }}
                resizeMode={'contain'}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={{
          height,
          flex: 4,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            fontSize: title.length < 20 ? 16 : 15,
            fontFamily: font.POPPINS_BOLD,
            lineHeight: 21,
            color: labelColor,
          }}
          numberOfLines={1}
          ellipsizeMode={'tail'}
        >
          {title}
        </Text>
      </View>
      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        {rightMenu && (
          <View style={{ height, justifyContent: 'center', marginLeft: 5, padding: 5 }}>{rightMenu()}</View>
        )}
        {rightButtons &&
        rightButtons.map((item, index) => {
          if (item.debounce) {
            return (
              <TouchableOpacity onPress={item.onPress} key={index}>
                <View style={{ height, justifyContent: 'center', marginLeft: 5, padding: 5 }}>
                  {item.image && (
                    <Image
                      source={item.image}
                      style={{
                        alignSelf: 'center',
                        width: scalePx(20),
                        height: scalePx(20),
                        tintColor: item.tintColor ? item.tintColor : 'white',
                      }}
                      resizeMode={'contain'}
                    />
                  )}
                  {item.text && (
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontSize: 15,
                        fontFamily: font.POPPINS_MID,
                      }}
                    >
                      {item.text}
                    </Text>
                  )}
                </View>
              </TouchableOpacity>
            );
          }
          return (
            <RNTouchableOpacity onPress={item.onPress} key={index}>
              <View style={{ height, justifyContent: 'center', marginLeft: 5, padding: 5 }}>
                {item.image && (
                  <Image
                    source={item.image}
                    style={{
                      alignSelf: 'center',
                      width: scalePx(20),
                      height: scalePx(20),
                      tintColor: item.tintColor ? item.tintColor : 'white',
                    }}
                    resizeMode={'contain'}
                  />
                )}
                {item.text && (
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: 15,
                      fontFamily: font.POPPINS_MID,
                    }}
                  >
                    {item.text}
                  </Text>
                )}
              </View>
            </RNTouchableOpacity>
          );
        })}
      </View>
    </View>
  );

  return (
    <View
      {...props}
      style={[
        props.style,
        {
          flexDirection: 'row',
          height,
          backgroundColor: 'transparent',
          alignItems: 'center',
        },
      ]}
    >
      {childComponent}
    </View>
  );
});

export class TouchableOpacity extends React.PureComponent {
  constructor(props) {
    super(props);
    this.debounce = false;
  }

  _onPress = () => {
    if (typeof this.props.onPress !== 'function' || this.debounce) return;
    this.debounce = true;

    this.props.onPress();

    this.timeoutId = setTimeout(() => {
      this.debounce = false;
    }, 1500);
  };

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const {children, onPress, ...rest} = this.props;

    return (
      <RNTouchableOpacity {...rest} onPress={this._onPress}>
        {children}
      </RNTouchableOpacity>
    );
  }
}


