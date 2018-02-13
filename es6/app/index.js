import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const api_key = '6415d962ffe762edc096a4bfd0c8d168';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: 'Aguascalientes'
        }
    }

    componentDidMount() {
        this.grabWeather(this.state.city)
    }

    grabWeather(city) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
            .then(response => response.json())
            .then(obj => {
                this.setState({description: obj.weather[0].description})
            });
    }

    render() {
        return (
            <div>
                <h3>Weather Report for {this.state.city}</h3>
                <p>{this.state.description}</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));