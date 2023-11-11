import React, { useEffect, useState } from "react";
import { Col, Form, FormLabel, FormSelect, Row } from "react-bootstrap";

const NewForm = ({ handleCategoryChange }) => {
  const [inputs, setInputs] = useState("");

  useEffect(() => {
    console.log(inputs);
  }, [inputs]);

  const handleChange = (e) => {
    const selectedCategory = e.target.value;
    setInputs(selectedCategory);
    handleCategoryChange(selectedCategory);
  };

  return (
    <Form>
      <Row className="p-4">
        <Col xs={3}>
          <FormLabel className="px-3">Buscar por categoría: </FormLabel>
        </Col>
        <Col xs={9}>
          <FormSelect value={inputs} onChange={handleChange}>
            <option disabled>Options</option>
            <option value="general">General</option>

            <option value="business">Bussines</option>
            <option value="entertainment">Entertainment</option>
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
