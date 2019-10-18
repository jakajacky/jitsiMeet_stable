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
import { GooglePlayButton } from '@freakycoder/react-native-button';

class LoginView extends React.Component {
    state = {
        Phone: '',
        Code: '',
    };

    constructor(props) {
        super(props);
    }

    /**
     * 输入框内容发生变化
     */
    onChangeText(text) {
        console.log(text);
    }

    render() {
        const {animationStart, animationChanged} = this.props
        return (
            <View style = { [
                styless.naviView,
                {left: animationStart?0:"100%"}
            ] }>
                <TouchableOpacity
                onPress={() => {
                    animationChanged(false)
                }}
                >
                    <Image
                    style={styless.backIcon}
                    resizeMode="contain" 
                    source={require('../../../../images/ArrowLeft.png')}
                    />
                </TouchableOpacity>
                <View style={
                    styless.containerTopView
                }>
                    <Text style={ styless.titleText }>
                        { "登录" }
                    </Text>
                    <Text style={ styless.contentText }>
                        { "视频在线通话系统" }
                    </Text>
                </View>

                <View style={styless.containerMiddleView}>
                    <View
                    style={ styless.cTextInputBackground }>
                        <TextInput
                        style={ styless.cTextInput }
                        onChangeText={text => this.onChangeText(text)}
                        placeholder={ "手机号" }
                        placeholderTextColor="rgba(255, 255, 255, 0.64)"
                        value={this.state.Phone}
                        />
                    </View>
                    <View style={styless.cTextInputContainer}>
                        <View
                        style={ [styless.cTextInputBackground, {marginTop: 0, width: "57%"}] }>
                            <TextInput
                            style={ [styless.cTextInput] }
                            onChangeText={text => this.onChangeText(text)}
                            placeholder={ "验证码" }
                            placeholderTextColor="rgba(255, 255, 255, 0.64)"
                            value={this.state.Code}
                            />
                        </View>
                        <GooglePlayButton
                        outline
                        text="获取验证码"
                        textStyle
                        textColor={ "white" }
                        borderWidth={1}
                        borderRadius={22}
                        width={ Dimensions.get('window').width * 0.4 }
                        height={ 42 }
                        ></GooglePlayButton>
                    </View>
                </View>
                
                <View style={styless.containerBottomView}>

                    
                    <GradientButton
                    text="登录"
                    textColor="#fff"
                    fontSize={ 15 }
                    radius={ 22 }
                    width={ Dimensions.get('window').width - 60 }
                    height={ 44 }
                    onClick={ function () {
                        alert('加入会议')
                    } }
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

export default LoginView

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
        marginTop: 8,
        opacity: 0,
    },
    titleView: {
        backgroundColor: "rgba(0,0,0,0)",
        position: "absolute",
        width: "100%",
        height: "100%"
    },
    naviView: {
        backgroundColor: "rgba(0,0,0,0)",
        position: "absolute",
        width: "100%",
        height: "100%",
        opacity: 1
    },
    containerTopView: {
        marginTop: 34,
        marginLeft: 30,
    },
    containerMiddleView: {
        marginLeft: 30,
        marginRight: 30,
        position: "absolute",
        bottom: "50%",
        paddingBottom: 40,
    },
    containerBottomView: {
        marginLeft: 30,
        marginRight: 30,
        height: '50%',
        position: "absolute",
        bottom: 0,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    buttonView: {
        fontSize: 12,
        fontWeight: "bold"
    },
    backIcon: {
        width:18,
        height:16,
        marginTop: 58,
        marginLeft: 30,
    },
    cTextInputBackground: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)', 
        borderRadius: 22, 
    },
    cTextInput: {
        height: 44, 
        borderRadius: 22, 
        borderColor: 'rgba(255, 255, 255, 1)', 
        borderWidth: 0, 
        backgroundColor: 'rgba(255, 255, 255, 0)', 
        paddingLeft: 10,
        color: 'white'
    },
    cTextInputContainer: {
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
    }
})