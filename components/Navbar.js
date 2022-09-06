import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Children } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar({children}) {
  return (
    <>
      <Head>
          <title>Felipe Neves Ricardo</title>
          <meta name="description" content="A personal web site" />          
        </Head> 
      <Navbar id="nav" expand="sm" bg="dark" variant="dark">
        <Navbar.Brand>Atívidade Prática</Navbar.Brand>
        <Nav className="mr-auto">

        <Nav.Link href="/home">Sobre Mim</Nav.Link>
        <Nav.Link href="/formacao">Formação</Nav.Link>
        <Nav.Link href="/portifolio">Portifólio</Nav.Link>
        <Nav.Link href="/contato">Contato</Nav.Link>
        </Nav>
      </Navbar>
    {children}
      </>
  )
}

export default NavBar;