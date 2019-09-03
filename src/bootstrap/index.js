import React, { Component } from "react";
import { StyleProvider } from "native-base";

import App from "../Main";
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";

export default class Bootstrap extends Component {
    render() {
        return (
            <StyleProvider style={getTheme(variables)}>
                <App />
            </StyleProvider>
        );
    }
};
