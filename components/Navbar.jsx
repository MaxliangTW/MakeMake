'use client'
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import styles from './styles/Navbar.module.scss';

function Navbar() {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const toggleOffcanvas = () => {
        setShowOffcanvas(!showOffcanvas); // 切換 Offcanvas 的顯示狀態
    };

    return (
        <div className={styles.Navbar}>
            <Button 
                className={styles.offcanvasButton} 
                variant="primary" 
                onClick={toggleOffcanvas}>
                    er
            </Button>
            <Offcanvas
                show={showOffcanvas} 
                onHide={() => setShowOffcanvas(false)}
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>MakeMake</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Offcanvas content goes here.
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default Navbar;
/*
import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Navbar } from 'react-bootstrap';
import Link from 'next/link';

function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        按鈕
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>MakeMake</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul> 
            <div>Home</div>
            <div>News</div>
            <div>Merch</div>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Example;
*/