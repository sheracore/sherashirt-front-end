import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Col, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="6">
            <Link to="/create">
            <Card className="main_col_left">
              <div className = "main_left_img">
                <p className="lable_left" >CREATE</p>
              </div>
            </Card>
            </Link>
          </Col>
          <Col xs="1">
            <Card className="main_col_center">
             </Card>
          </Col>
          <Col xs="5">
          <Link to="/create/design">
            <Card className="main_col_right">
              <div className = "main_right_img">
                <p className="lable_right" >IN PROGRESS...</p>
              </div>
            </Card>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Main;
