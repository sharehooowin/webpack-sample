// Greeter.js
import React,{Component} from 'react';
import styles from './Greeter.css';
var config = require('./config.json');

export default class Greeter extends Component{
    constructor(props){
        super(props);
        this.state={
            text:this.props.text
        }
    }

    render(){
        return(
            <div className={styles.greeter}>
                <h1>hello,{this.state.text}</h1>
                {config.greetText}
            </div>
        )
    }
}