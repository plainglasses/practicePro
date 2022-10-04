/*
 * @Author: QiTianDaSheng
 * @Date: 2022-09-27 15:04:42
 * @Descripttion:
 * @LastEditors: QiTianDaSheng
 * @LastEditTime: 2022-09-27 17:59:40
 */
import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/core';
import React from 'react';

const FocusedStatusBar = (props) => {
    console.log('the props switch to this place', props);
    // change the text when we focused on this page we places this hooks
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;
