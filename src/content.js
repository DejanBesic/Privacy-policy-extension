import React from 'react';
import ReactDOM from 'react-dom';
import "./content.css";
import App from "./App";

class Main extends React.Component {
    render() {
        return (
            <App />
        )
    }
}

const app = document.createElement('div');
ReactDOM.render(<Main />, app);