import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const scalePx = (widthPx) => wp((widthPx / 375) * 100);

module.exports = {
  scalePx
}
