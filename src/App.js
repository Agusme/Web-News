/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from "react-bootstrap";
import Heading from './components/Heading';
import NewForm from './components/NewForm';
import { useEffect, useState } from 'react';
import axios from 'axios';
import NewList from './components/NewList';

function App() {

  const [news, setNews] = useState([])


  useEffect(() => {
    APIrequest()
  }, []);

  const APIrequest = async () => {
    try {
      const res = await axios.get("https://newsapi.org/v2/everything?q=apple&from=2023-11-10&to=2023-11-10&sortBy=popularity&apiKey=dc31507cee9c482f80955cce75597de1")
      setNews(res.data.articles)
      console.log(res.data)
    } catch (error) {
      console.log("error en el server");

    }

  }



  return (
    <Container>
      <Heading></Heading>
      <Card>
        <NewForm></NewForm>
      </Card>
      <NewList news={news} ></NewList>
    </Container>
  );
}

export default App;
