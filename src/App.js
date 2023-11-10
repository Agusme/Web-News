import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Card, Container } from "react-bootstrap";
import Heading from './components/Heading';
import NewForm from './components/NewForm';

function App() {
  return (
<Container>
  <Heading></Heading>
  <Card>
    <NewForm></NewForm>
  </Card>
</Container>
    );
}

export default App;
