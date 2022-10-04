/*
 * @Author: QiTianDaSheng
 * @Date: 2022-10-01 18:23:12
 * @Descripttion:
 * @LastEditors: QiTianDaSheng
 * @LastEditTime: 2022-10-04 16:30:53
 */
import { View, Text, Image } from 'react-native';
import { EthPrice } from './SubInfo';
import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants';
import React from 'react';

const DetailsBid = ({ bid }) => {
    return (
        <View
            style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginVertical: SIZES.base,
                paddingHorizontal: SIZES.base * 2,
            }}
        >
            <Image
                source={bid.image}
                resizeMode="contain"
                style={{ width: 48, height: 48 }}
            />
            <View>
                <Text
                    style={{
                        fontFamily: FONTS.semiBold,
                        fontSIze: SIZES.small,
                        color: COLORS.primary,
                    }}
                >
                    Bid place by {bid.name}
                </Text>
                <Text
                    style={{
                        fontFamily: FONTS.semiBold,
                        fontSize: SIZES.small - 2,
                        color: COLORS.secondary,
                        marginTop: 3,
                    }}
                >
                    {bid.date}
                </Text>
            </View>
            <EthPrice price={bid.price} />
        </View>
    );
};

export default DetailsBid;
