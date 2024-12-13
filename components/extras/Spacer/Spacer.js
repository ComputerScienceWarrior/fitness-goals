import React from "react";
import { View } from "react-native";

const Spacer = ( props ) => {
    return (
        <View style={{ padding: props.padding, margin: props.margin }}></View>
    );
};

export default Spacer;
