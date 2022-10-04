/*
 * @Author: QiTianDaSheng
 * @Date: 2022-09-26 18:47:40
 * @Descripttion:
 * @LastEditors: QiTianDaSheng
 * @LastEditTime: 2022-10-04 20:14:31
 */
import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    StatusBar,
    FlatList,
} from 'react-native';
import {
    CircleButton,
    RectButton,
    SubInfo,
    FocusedStatusBar,
    DetailsDesc,
    DetailsBid,
} from '../components';
import { COLORS, SHADOWS, FONTS, SIZES, assets } from '../constants';
const DetailsHeader = ({ data, navigation }) => {
    return (
        <View style={{ width: '100%', height: 373 }}>
            {/* resizeMode can only dose matter when it's width and height are designed */}
            <Image
                source={data.image}
                resizeMode="cover"
                style={{ width: '100%', height: '100%' }}
            />
            <CircleButton
                left={15}
                top={StatusBar.currentHeight + 10}
                imgUrl={assets.left}
                handlePress={() => {
                    navigation.goBack();
                }}
            />
            <CircleButton
                right={15}
                top={StatusBar.currentHeight + 10}
                imgUrl={assets.heart}
            />
        </View>
    );
};

const Detail = ({ route, navigation }) => {/
    /* the navigation component is a default things we get through the stack.screen */
    // the data which is switch to this component are contianed in the route object
    /* console.log('+++++++++++++++++++++', 'route.params.data'); */
    const { data } = route.params;

    const renderItem = ({ item }) => {
        return <DetailsBid bid={item} />;
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* fit nicely with our white nft detail page 
                translucent indicate that the statesBar is transparent*/}
            <FocusedStatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent={true}
            />
            <View
                style={{
                    width: '100%',
                    position: 'absolute',
                    bottom: 0,
                    paddingVertical: SIZES.font,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(255,255,255,0.5)',
                    zIndex: 1,
                }}
            >
                <RectButton
                    minWidth={170}
                    fontSize={SIZES.large}
                    {...SHADOWS.dark}
                />
            </View>
            <FlatList
                data={data.bids}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: SIZES.extraLarge * 3,
                }}
                ListHeaderComponent={() => {
                    return (
                        <React.Fragment>
                            <DetailsHeader
                                data={data}
                                navigation={navigation}
                            />
                            <SubInfo />
                            <View style={{ padding: SIZES.font }}>
                                <DetailsDesc data={data} />
                                {data.bids.length > 0 && (
                                    <Text
                                        style={{
                                            fontSize: SIZES.font,
                                            fontFamily: FONTS.semiBold,
                                            color: COLORS.primary,
                                        }}
                                    >
                                        Current Bid
                                    </Text>
                                )}
                            </View>
                        </React.Fragment>
                    );
                }}
            />
        </SafeAreaView>
    );
};

export default Detail;
