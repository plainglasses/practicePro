/*
 * @Author: QiTianDaSheng
 * @Date: 2022-09-24 19:06:29
 * @Descripttion:
 * @LastEditors: QiTianDaSheng
 * @LastEditTime: 2022-09-29 17:54:30
 */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React, { useState } from 'react';
/* react native 路由 */
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';

/* import the pages which can be used */

import { Home, Detail } from './screen';

// get our react native page stack
const Stack = createStackNavigator();

// all the elements for the  DefaultTheme
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'transparent',
    },
};

const App = () => {
    // use fonts in the entire app

    // expo will import this fontstyle into fontFamily property which can use in your project
    // 此处字体加载的拼写一定不能错，要和assets文件中的FONTS一致，因为js区分大小写
    const [loaded, error] = useFonts({
        InterBold: require('./assets/fonts/Inter-Bold.ttf'),
        InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
        InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
        InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
        InterLight: require('./assets/fonts/Inter-Light.ttf'),
    });

    if (!loaded) {
        console.log(loaded, error);
        return null;
    }

    /*  const [fontsLoaded, setFontsLoaded] = useState(false);

    const LoadFonts = async () => {
        await useFonts(); // Here we will have to await the call
    };

    if (!fontsLoaded) {
        console.log(fontsLoaded);
        return (
            <AppLoading
                startAsync={LoadFonts}
                onFinish={() => setFontsLoaded(true)}
                onError={(error) => console.log(error)}
            />
        );
    }  */

    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="Home"
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Detail" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({});
export default App;
