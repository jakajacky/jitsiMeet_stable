import React from 'react';
import {
    Animated,
    Keyboard,
    SafeAreaView,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    View,
    Button,
    StyleSheet,
    Dimensions,
    LayoutAnimation,
    Image
} from 'react-native';
import { Header, LoadingIndicator, Text } from '../../base/react';
import GradientButton from "./GradientButton"
import { Icon } from '../../base/icons';

class Home extends React.Component {
    render() {
        const {animationStart, pushToJoin, pushToLogin} = this.props
        return (
            <View style = { [
                styless.titleView,
                {left: animationStart?"-100%":0}
            ] }>
                <View style={
                    styless.containerTopView
                }>
                    <Text style={ styless.titleText }>
                        { "云会" }
                    </Text>
                    <Text style={ styless.contentText }>
                        { "视频在线通话系统" }
                    </Text>
                </View>

                <View style={styless.containerBottomView}>
                    <GradientButton
                    text="发起会议"
                    textColor="rgba(6, 99, 163, 1)"
                    fontSize={ 15 }
                    gradientBegin="white"
                    gradientEnd="white"
                    radius={ 22 }
                    width={ Dimensions.get('window').width - 60 }
                    height={ 44 }
                    onClick={ this._pushToStart }
                    ></GradientButton>
                    <View
                    style={{height:16}}
                    ></View>
                    <GradientButton
                    text="加入会议"
                    textColor="#fff"
                    fontSize={ 15 }
                    radius={ 22 }
                    width={ Dimensions.get('window').width - 60 }
                    height={ 44 }
                    onClick={ pushToJoin }
                    ></GradientButton>
                    <View
                    style={{height:16}}
                    ></View>
                    <GradientButton
                    text="登录"
                    fontSize={ 14 }
                    textColor="#fff"
                    gradientBegin="rgba(255,255,255,0)"
                    gradientEnd="rgba(255,255,255,0)"
                    textDecorationLine="underline"
                    onClick={ pushToLogin }
                    ></GradientButton>
                    
                    <Text
                    style={{position:"absolute",bottom:40,color:"rgba(78, 88, 110, 1)",fontSize:12}}
                    >
                    {'All right reserved by 百视云'}
                    </Text>
                </View>
            </View>
        )
    }
}

export default Home

const styless = StyleSheet.create({
    titleText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 40,
    },
    contentText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 17,
        marginTop: 8
    },
    titleView: {
        backgroundColor: "rgba(0,0,0,0)",
        position: "absolute",
        width: "100%",
        height: "100%"
    },
    naviView: {
        backgroundColor: "red",
        position: "absolute",
        width: "100%",
        height: "100%",
        opacity: 0
    },
    containerTopView: {
        marginTop: 108,
        marginLeft: 30,
    },
    containerBottomView: {
        marginLeft: 30,
        marginRight: 30,
        height: '35%',
        position: "absolute",
        bottom: 0,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    buttonView: {
        fontSize: 12,
        fontWeight: "bold"
    }
})