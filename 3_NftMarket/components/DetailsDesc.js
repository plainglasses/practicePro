/*
 * @Author: QiTianDaSheng
 * @Date: 2022-10-01 18:22:58
 * @Descripttion:
 * @LastEditors: QiTianDaSheng
 * @LastEditTime: 2022-10-03 22:31:22
 */
import { View, Text } from 'react-native';

import React from 'react';
import { useState } from 'react';
import { EthPrice, NFTTitle } from './SubInfo';
import { COLORS, SIZES, SHADOWS, assets, FONTS } from '../constants';

const DetailsDesc = ({ data }) => {
    const [text, setText] = useState(data.description.slice(0, 100));
    const [readMore, setReadMore] = useState(false);
    return (
        <React.Fragment>
            <View
                style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <NFTTitle
                    title={data.name}
                    subTitle={data.creator}
                    titleSize={SIZES.extraLarge}
                    subTitleSize={SIZES.font}
                />
                <EthPrice price={data.price} />
            </View>
            <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
                <Text
                    style={{
                        fontSzie: SIZES.font,
                        fontFamily: FONTS.semiBold,
                        color: COLORS.primary,
                    }}
                >
                    Description
                </Text>
                <View
                    style={{
                        marginTop: SIZES.base,
                    }}
                >
                    <Text
                        style={{
                            fontSize: SIZES.small,
                            fontFamily: FONTS.regular,
                            color: COLORS.secondary,
                            lineHeight: SIZES.large,
                        }}
                    >
                        {text}
                        {readMore && '  '}
                        {!readMore && '...  '}
                        <Text
                            style={{
                                fontSize: SIZES.small,
                                fontFamily: FONTS.semiBold,
                                color: COLORS.primary,
                                marginLeft: 100,
                            }}
                            onPress={() => {
                                if (!readMore) {
                                    setText(data.description);
                                    setReadMore(true);
                                } else {
                                    setText(data.description.slice(0, 100));
                                    setReadMore(false);
                                }
                            }}
                        >
                            {readMore ? 'Show Less' : 'Show more'}
                        </Text>
                    </Text>
                </View>
            </View>
        </React.Fragment>
    );
};

export default DetailsDesc;
