import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import squirtle from '../../public/squirtle.png';

import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar sticky='top' bg='dark' variant='dark' className='mb-4'>
      <Container>
        <Navbar.Brand>
          <Image src={squirtle} width='30' className='me-2' />
          Pokeverse
        </Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link to='/' as={Link}>
            All Pokemon
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export { Navigation };