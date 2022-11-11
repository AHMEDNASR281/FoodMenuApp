import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Zoom } from "react-reveal";

const ItemsList = ({ itemsData }) => {
  return (
    <Row>
      <Zoom>
        {itemsData.length >= 1 ? (
          itemsData.map((item) => {
            return (
              <Col key={item.id} sm="12" className="mb-3">
                <Card
                  className="d-flex flex-row"
                  style={{ backgroundColor: "#f8f8f8" }}
                >
                  <Card.Img
                    className="img-item"
                    variant="top"
                    src={item.imgUrl}
                  />
                  <Card.Body>
                    <Card.Title>
                      <div className="d-flex justify-content-between">
                        <div className="item-title">{item.title}</div>
                        <div className="item-price">{item.price}</div>
                      </div>
                    </Card.Title>
                    <Card.Text className="py-2">
                      <div className="item-description">{item.description}</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <h3 className="text-center">لا يوجد اصناف منها حاليا</h3>
        )}
      </Zoom>
    </Row>
  );
};

export default ItemsList;
