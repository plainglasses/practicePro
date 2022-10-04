/*
 * @Author: QiTianDaSheng
 * @Date: 2022-09-27 15:06:27
 * @Descripttion:
 * @LastEditors: QiTianDaSheng
 * @LastEditTime: 2022-10-01 18:07:32
 */
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CircleButton, RectButton } from '../components';
import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { SubInfo, NFTTitle, EthPrice } from './SubInfo';

const NftCard = ({ data }) => {
    const navigation = useNavigation();
    return (
        <View
            style={{
                backgroundColor: COLORS.white,
                borderRadius: SIZES.font,
                marginBottom: SIZES.extraLarge,
                margin: SIZES.base,
                ...SHADOWS.dark,
            }}
        >
            <View style={{ width: '100%', height: 250 }}>
                {/* 调整图片的宽高resizeMode,cover表示cover:
             在保持图片宽高比的前提下缩放图片，直到宽度和高度都大于等于容器视图的尺寸
            （如果容器有 padding 内衬的话，则相应减去）。译注：这样图片完全覆盖甚至超出容器，容器中不留任何空白。 */}
                <Image
                    source={data.image}
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: '100%',
                        borderTopLeftRadius: SIZES.font,
                        borderTopRightRadius: SIZES.font,
                    }}
                />
                {/* there we can transmite all the props to the CircleButton component */}
                <CircleButton
                    imgUrl={assets.heart}
                    right={10}
                    top={10}
                    handlePress={() => {}}
                />
            </View>
            <SubInfo />
            <View style={{ width: '100%', padding: SIZES.font }}>
                <NFTTitle
                    title={data.name}
                    subTitle={data.creator}
                    titleSize={SIZES.large}
                    subTitleSize={SIZES.small}
                />
                <View
                    style={{
                        marginTop: SIZES.font,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <EthPrice price={data.price} />
                    {/* transimite the data of the card which is clicked */}
                    <RectButton
                        minWidth={120}
                        fontSize={SIZES.font}
                        handlePress={() => {
                            navigation.navigate('Detail', { data });
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default NftCard;
