import React, { Component } from 'react'
import './EventForm.css'

export class EventForm extends Component {

    state = {
    }

    submit = () => {
        console.log("submit")
    }

    test = () => {
        console.log("test!")
    }

    render() {
        return (
            <React.Fragment>
            <div className="event-form-overlay"
                onClick={ this.test() }>
            </div>
            <div className="event-form-container">
                <button onClick={ this.test() }>Submit</button>
                {/* <form id="event-add-event">
                    <label for="date">Date:</label><br/>

                    <label for="from">From:</label><br/>
                    <input type="text" id="from" name="from" value="John"/><br/>

                    <label for="to">To:</label><br/>
                    <input type="text" id="to" name="to" value="Doe"/><br/>

                    <label for="title">Title:</label><br/>
                    <input type="text" id="title" name="title" value="title"/><br/>

                    <label for="place">Place:</label><br/>
                    <input type="text" id="place" name="place" value="place"/><br/>
                    <button onClick={ this.props.cancel}>Cancel</button>
                    <button onClick={ this.submit() }>Create</button>
                </form> */}
            </div>
            </React.Fragment>
        )
    }
}

export default EventForm
