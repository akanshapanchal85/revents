import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../feature/events/eventDashboard/EventDashboard';
import Navbar from '../../feature/nav/Navbar';
import './styles.css';

function App() {

  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <Navbar setFormOpen = {setFormOpen}/>
      <Container className='main'>
      <EventDashboard formOpen = {formOpen} setFormOpen = {setFormOpen}/>
      </Container>
    </>
  );
}

export default App;
