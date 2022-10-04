/*
 * @Author: QiTianDaSheng
 * @Date: 2022-09-29 17:32:58
 * @Descripttion:
 * @LastEditors: QiTianDaSheng
 * @LastEditTime: 2022-09-29 17:34:47
 */
import * as Font from 'expo-font';

const useFonts = async () => {
    await Font.loadAsync({
        interBold: require('./assets/fonts/Inter-Bold.ttf'),
        interSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
        interMedium: require('./assets/fonts/Inter-Medium.ttf'),
        interRegular: require('./assets/fonts/Inter-Regular.ttf'),
        interLight: require('./assets/fonts/Inter-Light.ttf'),
};

export default useFonts;
