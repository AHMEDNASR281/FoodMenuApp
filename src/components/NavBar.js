import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import React from "react";

const NavBar = () => {
  return (
    <Row>
      <Navbar bg="dark" expand="lg" varient="dark">
        <Container >
          <Navbar.Brand href="#" className="text-light">
            مطعم جديد
          </Navbar.Brand>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="ابحث هنا"
              className="me-2 "
              aria-label="Search"
            />
            <Button variant="outline-success" className="text-light">
              بحث
            </Button>
          </Form>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;
