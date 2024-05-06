'use client'
import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Navbar } from 'react-bootstrap';
import styles from './styles/Navbar.module.scss';
import "normalize.css";
import Link from 'next/link';
import Image from 'next/image'

function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar className={styles.NavbarLayout}>
      <Button 
        className={styles.PagesButton} 
        variant="primary" onClick={handleShow}>
      </Button>
      <Offcanvas
        className={styles.OffcanvasLayout}
        show={show} 
        onHide={handleClose}>
        <Offcanvas.Header
          className={styles.OffcanvasHeader} 
          closeButton>
          <Offcanvas.Title 
            className={styles.OffcanvasNavbarTitle}>
            MakeMake
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
          <div>
            <Link href="/home">Home</Link>
          </div>
          <div>
            <Link href="/news">News</Link>
          </div>
          <div>
            <Link href="/merch">Merch</Link>
          </div>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
      <Image
       className={styles.MakeMakeLogo}
        src="/Logo.svg"
        width={75}
        height={75}
        alt="MakeMake Logo"
      />
    </Navbar>
  );
}

export default Example;
