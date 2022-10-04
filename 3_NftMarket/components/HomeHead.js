/*
 * @Author: QiTianDaSheng
 * @Date: 2022-09-27 15:06:42
 * @Descripttion:
 * @LastEditors: QiTianDaSheng
 * @LastEditTime: 2022-10-04 17:20:34
 */
import { View, Text, Image, TextInput } from 'react-native';
import { COLORS, FONTS, SIZES, assets } from '../constants';

const HomeHead = ({ onSearch }) => {
    return (
        <View style={{ backgroundColor: COLORS.primary, padding: SIZES.font }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Image
                    source={assets.logo}
                    style={{ width: 90, height: 25 }}
                    resizeMode="contain"
                />
                <View style={{ width: 45, height: 45 }}>
                    <Image
                        source={assets.person01}
                        resizeMode="contain"
                        style={{ width: '100%', height: '100%' }}
                    />
                    <Image
                        source={assets.badge}
                        resizeMode="contain"
                        style={{
                            position: 'absolute',
                            width: 15,
                            height: 15,
                            bottom: 0,
                            right: 0,
                        }}
                    />
                </View>
            </View>
            <View style={{ marginVertical: SIZES.font }}>
                <Text
                    style={{
                        fontFamily: FONTS.regular,
                        fontSize: SIZES.small,
                        color: COLORS.white,
                        marginTop: SIZES.base / 2,
                    }}
                >
                    Hello,Victoria 👋
                </Text>
                <Text
                    style={{
                        fontFamily: FONTS.bold,
                        fontSize: SIZES.large,
                        color: COLORS.white,
                        marginTop: SIZES.base / 2,
                    }}
                >
                    Let's find a masterpiece 👋
                </Text>
            </View>
            <View style={{ marginTop: SIZES.font }}>
                <View
                    style={{
                        width: '100%',
                        borderRadius: SIZES.font,
                        backgroundColor: COLORS.gray,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: SIZES.font,
                        paddingVertical: SIZES.small - 2,
                    }}
                >
                    <Image
                        source={assets.search}
                        style={{
                            width: 20,
                            height: 20,
                            resizeMode: 'contain',
                            marginRight: SIZES.base,
                        }}
                    />
                    <TextInput
                        placeholder="Search NFTs"
                        style={{ flex: 1, lineHeight: SIZES.font }}
                        onChangeText={onSearch}
                    />
                </View>
            </View>
        </View>
    );
};

export default HomeHead;
