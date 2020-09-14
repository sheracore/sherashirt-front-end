import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Col, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Profile extends Component {
  render() {
    return (
      <div className="profile_div">
        <Row>
          <Col xs="6">
            <Card className="cardcustom">
              <CardHeader>
                <i className="fa fa-user fa-lg mt-4"></i><strong>Profile</strong>
              </CardHeader>
              <CardBody className="cardbody">
                  <p className="lable" >Go to Dashboard</p>
                <Link to="/dashboard">
                    <Button color="primary" className="profile" tabIndex={-1}>Dashboard</Button>
                </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Profile;
