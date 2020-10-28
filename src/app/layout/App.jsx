import { React,useState} from "react";
import { Container } from "semantic-ui-react";
import EventDashborad from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";



function App() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <>
      <NavBar setFormOpen={setFormOpen}/>
      <Container className='main'>
        <EventDashborad formOpen ={formOpen} setFormOpen={setFormOpen}/>
      </Container>
      
    </>
  );
}

export default App;
