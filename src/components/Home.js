import React, { Component } from 'react';

export class Home extends Component {
    pageTitle = Home.name;
    render() {
        return (
            <h1>
                {this.pageTitle}
            </h1>
        );
    }
}