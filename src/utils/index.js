import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const scalePx = (widthPx) => wp((widthPx / 387) * 100);

module.exports = {
  scalePx
}
