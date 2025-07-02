import { PixelRatio, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const scale = width / 375;

export const normalize = (size: number) => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export const Fonts = {
  regular: normalize(14),
  medium: normalize(16),
  large: normalize(20),
  xLarge: normalize(24),
};
