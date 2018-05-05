import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Style } from '../styles';
import Lib from '../lib';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            author: '',
            cat: '',
            quote: '',
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        })
        this.fetchQuotes();
    }

    fetchQuotes() {
        const url = 'https://talaikis.com/api/quotes/random/';
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                const { author, cat, quote } = data;
                const isLoading = false
                this.setState({
                    author,
                    cat,
                    quote,
                    isLoading
                })
            })
            .catch(error => {
                alert(error)
            })
    }

    render() {
        return (
            <View style={Style.container}>
                <View style={Style.content}>
                    {
                        (this.state.isLoading) ?
                            <Text style={Style.text}>Loading...</Text> :
                            <View>
                                <Text style={[Style.text, Style.quotesText]}>{this.state.quote}</Text>
                                <Text style={[Style.text, Style.quotesText, {marginVertical: 10, color: '#f0f0f0'}]}>- {this.state.author}</Text>
                            </View>
                    }
                </View>
                <View style={Style.buttonGroup}>
                    <TouchableOpacity onPress={() => this.fetchQuotes()} style={Style.button}>
                        <Text style={[Style.text, Style.buttonText]}>More Quotes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Actions.Quotes()} style={Style.button}>
                        <Text style={[Style.text, Style.buttonText]}>My Favourite</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}