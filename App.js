import React, { Component } from 'react';
import { 
    View,
    StatusBar 
} from 'react-native';
import {
    Scene,
    Router
} from 'react-native-router-flux';

import { Style } from './src/styles';
import Home from './src/scenes/Home';
import Quotes from './src/scenes/Quotes';

export default class App extends Component {
    render() {
        return (
            <View style={Style.container}>
                <StatusBar barStyle="light-content"/>
                <Router>
                    <Scene key="root">
                        <Scene key="Home" component={Home} hideNavBar={true} initial={true} />
                        <Scene key="Quotes" component={Quotes} hideNavBar={false} />
                    </Scene>
                </Router>
            </View>
        );
    }
}
