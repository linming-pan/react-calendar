import React, { Component } from 'react'
import './EventItem.css'

export class EventItem extends Component {
    render() {
        const { startTime, endTime, title, place } = this.props.eventItem;
        return (
            <div className="event-item">
                <div className="event-item-cell time">
                    <div className="start-time">{ startTime }</div>
                    <div className="end-time">{ endTime }</div>
                </div>
                <div className="event-item-cell content">
                    <div className="title">{ title }</div>
                    <div className="place">{ place }</div>
                </div>
            </div>
        )
    }
}



export default EventItem
