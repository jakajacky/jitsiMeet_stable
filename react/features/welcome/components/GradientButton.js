// 
// 自定义渐变背景色Button
// TODO: 增加rippleColor 实现ripple效果  点击处晕开一个圆

import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from "react-native"

import { translate } from '../../base/i18n';
import { Container, Text } from '../../base/react';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
    text: String,
    textColor: String,
    fontSize: Number,
    gradientBegin: String,
    gradientEnd: String,
    gradientDirection: String,
    width: Number,
    height: Number,
    radius: Number,
    disabled: Boolean,
    onClick:Function,
    textDecorationLine: String
};

/**
 * Creates a ReactElement for showing a ToolboxItem is for a beta feature.
 *
 * @extends {Component}
 */
class GradientButton extends Component<Props> {

    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
      const {
        text, textColor, fontSize, gradientBegin, gradientEnd, gradientDirection, width, height, radius, disabled, onClick, textDecorationLine
      } = this.props;
        return (
          <TouchableOpacity style={[styles.button, {height: height, borderRadius: radius}]}
          onPress={disabled? null : () => {
            if (onClick) {
              return onClick()
            }
          }}
          >
            <LinearGradient colors={[gradientBegin, gradientEnd]} start={{ x: 0, y: 0 }} end={{ x: gradientDirection=='horizontal'?1:0, y: gradientDirection=='horizontal'?0:1 }} style={[styles.buttonbg, {borderRadius: radius, width: width}]}>
              <Text style={[styles.buttontext, {color:textColor, fontSize: fontSize, textDecorationLine: textDecorationLine}]}>{ text }</Text>
            </LinearGradient>    
        </TouchableOpacity>
        );
    }
}

GradientButton.defaultProps = {
  text: "Button",
  textColor: "white",
  fontSize: 14,
  gradientBegin: "rgba(16, 35, 151, 1)",
  gradientEnd: "rgba(0, 234, 248, 1)",
  gradientDirection: "horizontal", // horizontal  vertical
  width: -1,
  height: 40,
  radius: 2,
  disabled: false,
  onClick: null,
  // 
  textDecorationLine: 'none'
}

export default translate(GradientButton);

const styles = StyleSheet.create({
	button: {
		height: 50,
		borderRadius: 50,
		backgroundColor: 'rgba(255,255,255,0)',
	},
	buttontext: {
		textAlign: 'center',
    fontSize: 14,
    marginLeft: 8,
    marginRight: 8,
    minWidth: 80,
    fontWeight: "bold"
	},
	buttonbg :{
		borderRadius: 50,
		height: "100%",
		justifyContent: 'center',
		textAlign:'center',
	},
});