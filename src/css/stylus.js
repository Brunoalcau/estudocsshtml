import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "backgroundColor": "#A0522D"
    },
    "container": {
        "display": "flex",
        "flexFlow": "row nowrap",
        "justifyContent": "center",
        "alignItems": "center",
        "marginLeft": 25,
        "marginRight": 25
    },
    "logo": {
        "order": 2,
        "height": "auto",
        "flex": "1 1 auto"
    },
    "img": {
        "maxWidth": "60%"
    },
    "nav": {
        "order": 4,
        "flex": "1 1 auto"
    },
    "nav-bar": {
        "display": "flex",
        "justifyContent": "flex-end",
        "listStyleType": "none"
    },
    "nav-bar li": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "nav-bar a": {
        "transition": "color 0.5s ease",
        "color": "white",
        "textDecoration": "none",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "nav-bar a:hover": {
        "color": "#FF4500"
    },
    "ative": {
        "color": "#FF4500 !important",
        "borderBottom": "3px solid #FF4500 !important"
    },
    "mobile-nav": {
        "display": "none"
    }
});