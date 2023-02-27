import React, { Component } from 'react';
import { Navbar, NavbarBrand, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

class Header extends Component {
  render() {
    return(
    <React.Fragment>
      <Navbar dark>
        <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Card>
        <CardImg src="assets/images/restaurant.jpg" alt="Ristorante Con Fusion" />
        <CardBody>
          <CardTitle>Ristorante con Fusion</CardTitle>
          <CardText>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</CardText>
        </CardBody>
      </Card>
    </React.Fragment>
    );
  }
}

export default Header;
