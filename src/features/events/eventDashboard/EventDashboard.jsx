import React, {useState} from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import EventForm from '../eventForm/EventForm';
import EventList from './EventList';

import {sampleData} from '../../../app/api/sampleData';

export default function EventDashborad({formOpen,setFormOpen,selectEvent,selectedEvent}){

    const [events, setEvents] = useState(sampleData);
    
    function handleCreateEvent(event){
        setEvents([...events, event]);
    }

    function handleUpdateEvent(updatedEvent){
        setEvents(events.map(evt=> evt.id===updatedEvent.id ? updatedEvent:evt ));
        selectEvent(null);
        
    }

    function handleDeleteEvent(eventId){
        setEvents(events.filter(evt=> evt.id!==eventId));
    }

    
    return (

        <Grid>
            <GridColumn width={10}> 
                <EventList events ={events} selectEvent={selectEvent} deleteEvent= {handleDeleteEvent}/>
            </GridColumn>
            <GridColumn width={6}> 
                {formOpen && 
                <EventForm setFormOpen={setFormOpen} setEvents={setEvents} createEvent={handleCreateEvent} selectedEvent={selectedEvent} 
                key={selectedEvent?selectedEvent.id:null}
                updateEvent={handleUpdateEvent}
                />}
            </GridColumn>
        </Grid>

    )
}