import React from "react";
import "../bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function Tiles(props) {
  return (
    <div className="Tiles-one">
      <Card className="card-one" style={{ width: "18rem" }}>
        <Card.Img className = "article-img" variant="top" src={props.img} />
        <Card.Body>
          <Card.Text>
            <Card.Title>{props.name}</Card.Title>
            Email: <br /> {props.email}
          </Card.Text>
          <Card.Text>
            Phone:
            <br />
            {props.ph}
          </Card.Text>
          <Card.Text>
            Area of Specialisation:
            <br /> {props.sp}
          </Card.Text>
          <Button variant="primary" href="mailto: {props.email}">
            Contact
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Tiles;
  