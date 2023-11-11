/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from "react-bootstrap";
import Heading from './components/Heading';
import NewForm from './components/NewForm';
import { useEffect, useState } from 'react';
import axios from 'axios';
import NewList from './components/NewList';
import { BrowserRouter } from 'react-router-dom';

function App() {

  const [news, setNews] = useState([])

  const [category, setCategory] = useState('general');

  useEffect(() => {
    APIrequest()
  }, [category]);

  const APIrequest = async () => {
    try {
      const res = await axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=dc31507cee9c482f80955cce75597de1`)
      setNews(res.data.articles)
      console.log(res.data)
    } catch (error) {
      console.log("error en el server");

    }

  }

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    APIrequest(newCategory); 
  };


  return (
<BrowserRouter>
<Container>
      <Heading></Heading>
      <Card>
        <NewForm handleCategoryChange={handleCategoryChange}></NewForm>
      </Card>
      <NewList news={news}></NewList>
    </Container>
</BrowserRouter>

  
  );
}

export default App;
