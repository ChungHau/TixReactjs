import React, { Component } from 'react';
import Header from '../Header'
export default class index extends Component {
    render() {
        return (
            <>
                <Header />
                {this.props.children}
            </>
        )
    }
}