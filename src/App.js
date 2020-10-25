import React, { Component } from 'react';
import logo from './logo.svg';
import Calendar from 'react-calendar'
import './Calendar.css';
import './App.css';
import EventItemContainer from './components/EventItemContainer';

class App extends Component {
    state = {
        date: new Date(),
        eventItems : [
            {
                id: 1,
                startTime: '07:30',
                endTime: '16:30',
                title: 'Work',
                place: 'Office'
            },
            {
                id: 2,
                startTime:'18:30',
                endTime:'20:00',
                title: 'Movie',
                place: 'Cinema X'
            }
        ]
    }

    onChange = (date) => {
        this.setState({ date })
    }

    render() {
        return (
            <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            <h1>React Calendar</h1>
                <div className="calendar-container">
                    <Calendar
                        onChange={ this.onChange }
                        value={ this.state.date }
                        defaultView="month"
                        maxDetail="month"
                        minDetail="year"
                    />

                        <EventItemContainer eventItems={this.state.eventItems} date={this.state.date}/>

                </div>
            </header>
            </div>
        );
    }
}

export default App;
