import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Bounce } from "react-reveal";

const Category = ({ filterByCategory, AllCategories }) => {
  // To filter by category
  const onFilter = (cat) => {
    filterByCategory(cat);
  };
  return (
    <Row className="my-2 mb-5">
      <Bounce>
        <Col sm="12" className="d-flex justify-content-center">
          {AllCategories.length >= 1
            ? AllCategories.map((cat) => {
                return (
                  <div>
                    <button onClick={() => onFilter(cat)} className="btn m-2">
                      {cat}
                    </button>
                  </div>
                );
              })
            : null}
        </Col>
      </Bounce>
    </Row>
  );
};

export default Category;
