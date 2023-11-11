import React, { useEffect, useState } from 'react';
import {  Col, Form, FormLabel, FormSelect, Row } from 'react-bootstrap';

const NewForm = () => {
const [inputs, setInputs] =useState("")

useEffect(() => {
    console.log(inputs);
  }, [inputs]);
/* 
showCategories=(categoría)=>{

} */


    return (
      <Form >
          <Row className='p-4'>
               <Col xs={3}>
               <FormLabel className='px-3'>Buscar por categoría: </FormLabel>
               </Col> 
                <Col xs={9}>
                    <FormSelect         value={inputs}      onChange={({ target }) => {
                        setInputs(target.value)
                    }
}
>
                    <option disabled>Options</option>
                        <option value="bussines">Bussines</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="general">General</option>
                        <option value="health">Health</option>
                        <option value="science">Science</option>
                        <option value="sport">Sport</option>
                        <option value="technology">Technology</option>

                    </FormSelect>
                </Col>
            </Row>
 

      </Form>
    );
};

export default NewForm;