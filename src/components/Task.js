import React, { Component } from 'react';

export class Task extends Component {
    pageTitle = Task.name;
    render() {
        return (
            <h1>
                {this.pageTitle}
            </h1>
        );
    }
}