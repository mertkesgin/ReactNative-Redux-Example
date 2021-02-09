import {Dimensions} from 'react-native';

const { width, height} = Dimensions.get('window');

export const COLORS = {

    colorPrimary: '#0A8457',

    black: '#000000',
    white: '#FFFFFF',
    gray: '#bdbdbd'
}

export const SIZES = {

    width,
    height,
}

export const FONTS = {

}

const appTheme = {COLORS,SIZES,FONTS}

export default appTheme;