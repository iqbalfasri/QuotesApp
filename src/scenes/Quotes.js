import React, { Component } from 'react';
import { 
    Text, 
    View 
} from 'react-native';

export default class Qutoes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quotes: 'Bangsat bangsat'
        }
    }
    
    render() {
        return (
            <View>
                <Text dataQutoes={this.state.quotes}> {this.state.quotes} </Text>
            </View>
        )
    }
}