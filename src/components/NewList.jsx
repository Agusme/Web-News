import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const NewList = ({ news}) => {


    
  return (
    
    <Card className="mt-4">
        
      <Row>
        {news.map((newItem, index) =>(

              <Col xl={3} lg={4} md={6}>
              <Card key={index} >
                  <Card.Img variant="top" src={newItem?.urlToImage} />
                  <Card.Body>
                    <Card.Text>{newItem?.author} </Card.Text>
                    <Card.Title>{newItem?.title}</Card.Title>
                    <Card.Text>
                    {newItem?.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
        ))
        }
    
      </Row>
    </Card>
  );
};

export default NewList;
