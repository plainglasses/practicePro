/*
 * @Author: QiTianDaSheng
 * @Date: 2022-09-26 18:47:58
 * @Descripttion:
 * @LastEditors: QiTianDaSheng
 * @LastEditTime: 2022-10-04 17:28:18
 */
import React from 'react';
import { useState } from 'react';
import { View, Text, safeArea, FlatList, SafeAreaView } from 'react-native';
import { COLORS, NFTData } from '../constants';
import { FocusedStatusBar, HomeHead, NftCard } from '../components';
const Home = () => {
    const [nftData, setNftData] = useState(NFTData);

    const handleSearch = (value) => {
        if (!value.length) {
            setNftData(NFTData);
        }
        const filteredData = NFTData.filter(
            (item) =>
                item.name.toLowerCase().includes(value.toLowerCase()) === true
        );
        console.log(filteredData);
        if (filteredData.length) {
            setNftData(filteredData);
        } else {
            setNftData(NFTData);
        }
    };

    const renderItem = ({ item }) => {
        return <NftCard data={item} />;
    };
    /* safeAreaView 的目的是避免内容被渲染在不可视的内容区域中，例如iphone的刘海（hang） 
       ListHeaderComponent 指定FlatList最初渲染的部分
    */
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar style={{ background: COLORS.primary }} />
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        zIndex: 0,
                    }}
                >
                    <FlatList
                        data={nftData}
                        renderItem={renderItem}
                        keyExtractor={(item) => {
                            item.id;
                        }}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={
                            <HomeHead onSearch={handleSearch} />
                        }
                    />
                    <View
                        style={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0,
                            zIndex: -1,
                        }}
                    >
                        <View
                            style={{
                                height: 300,
                                backgroundColor: COLORS.primary,
                            }}
                        />
                        <View
                            style={{
                                borderColor: 'black',
                                flex: 1,
                                backgroundColor: COLORS.white,
                            }}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Home;
