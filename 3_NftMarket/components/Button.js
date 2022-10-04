/*
 * @Author: QiTianDaSheng
 * @Date: 2022-09-28 18:50:04
 * @Descripttion:
 * @LastEditors: QiTianDaSheng
 * @LastEditTime: 2022-10-03 17:35:05
 */
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants';

const CircleButton = ({ imgUrl, handlePress, ...props }) => {
    return (
        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS.white,
                position: 'absolute',
                borderRadius: SIZES.extraLarge,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ...SHADOWS.light,
                // get all the props from the parent component
                ...props,
            }}
            onPress={handlePress}
        >
            <Image
                source={imgUrl}
                resizeMode="cover"
                style={{ width: 24, height: 24 }}
            />
        </TouchableOpacity>
    );
};
const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.extraLarge,
                minWidth: minWidth,
                padding: SIZES.small,
                // get all the props from the parent component such as the SHADOWS which we can placed in there
                ...props,
            }}
            onPress={handlePress}
        >
            <Text
                style={{
                    fontSize: fontSize,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.white,
                    textAlign: 'center',
                }}
            >
                place a bid
            </Text>
        </TouchableOpacity>
    );
};

export { CircleButton, RectButton };
