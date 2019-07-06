import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
    constructor (props) {
        super(props);
    }
    componentDidMount() {
        axios.get('http://localhost:3000/ProductOverview')
        .then(results => console.log(results))
        .catch(err => console.log("cannot find page", err))
    }
    render() {
       return(<div>hello</div>) 
    }
}