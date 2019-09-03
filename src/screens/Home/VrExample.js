import React, { Component } from "react";
import { PanoramaView } from "@lightbase/react-native-panorama-view";
import { View, StatusBar, Dimensions, Text } from "react-native";
import { Container } from "native-base";

const width = Dimensions.get("window").width;
const vr = require("../../../assets/img/vr.png");

export default class VrExample extends Component {
    render() {
        return (
            <Container>
                <StatusBar barStyle="light-content" hidden={false} showHideTransition={true} animated={true} />
                <View style={{ flex: 1 }}>
                    {/* <PanoramaView
                        style={{ flex: 1 }}
                        dimensions={{
                            height: Dimensions.get("window").height,
                            width: Dimensions.get("window").width
                        }}
                        inputType="mono"
                        imageUrl="https://raw.githubusercontent.com/googlevr/gvr-android-sdk/master/assets/panoramas/testRoom1_2kMono.jpg"
                    /> */}
                    <PanoramaView
                        style={{ height: 230 }}
                        dimensions={{ height: 230, width: width }}
                        inputType="mono"
                        imageUrl="https://raw.githubusercontent.com/googlevr/gvr-android-sdk/master/assets/panoramas/testRoom1_2kMono.jpg"
                    />
                </View>
            </Container>
        );
    }
}