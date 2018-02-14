import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Weather from './weather';

const api_key = '6415d962ffe762edc096a4bfd0c8d168';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: {
                name: 'Aguascalientes',
                coord: {
                    lon: 0,
                    lat: 0
                }
            },
            conditions: {
                description: '',
                temperature: 0,
                humidity: 0
            }
        }
        this.weatherService = new Weather();
    }

    componentDidMount() {
        this.weatherService.grab(this.state.city.name)
            .then(w => {
                this.setState({
                    city: {
                        name: w.name,
                        coord: {
                            lon: w.coord.lon,
                            lat: w.coord.lat
                        }
                    },
                    conditions: {
                        description: w.weather[0].main,
                        temperature: w.main.temp,
                        humidity: w.main.humidity
                    }
                });
                console.log(w);
            });
    }

    render() {
        return (
            <div>
                <h1>Weather Report for {this.state.city.name}</h1>
                <h2>Current Conditions</h2>
                <h3>{this.state.conditions.temperature}°C {this.state.conditions.description}</h3>
                
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));