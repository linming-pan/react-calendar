import React, { Component } from 'react'
import EventItem from './EventItem'
import EventForm from './EventForm'

export class EventItemContainer extends Component {

    state = { showForm: false }

    openEventForm = (date)  => {
        console.log("open form", date)
        this.setState( {showForm: true} )
    }
    closeEventForm = () => {
        this.setState( {showForm:false})
    }

    render() {
        const dateString = this.props.date.getDate() + "." + (this.props.date.getMonth()+1) + "." + this.props.date.getFullYear()

        return (
            <div className="calendar-container-item" style={calendarContentStyle}>
                <div className="event-container-title">
                    <span>{ dateString }</span>
                    <button className="event-add-button" onClick={ this.openEventForm.bind(this, this.props.date) }>+</button>
                </div>
                <div className="event-container">{ this.props.eventItems.map( (item) => (
                        <EventItem key={item.id} eventItem={item}/>
                    ))}
                </div>
                { this.state.showForm && <EventForm cancel={this.closeEventForm}/> }
            </div>
        )
    }
}

const calendarContentStyle = {
    width: '600px'
}

export default EventItemContainer
