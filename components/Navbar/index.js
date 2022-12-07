// This is a navbar for landing pages

import { Navbar, Nav } from 'react-bootstrap'

import styles from './Navbar.module.css'

export default function MyNavbar() {
  return (
    <div className={styles.container}>
      <Navbar className={styles.navbar} collapseOnSelect expand="lg" variant="light">
        <Navbar.Toggle className={styles.toggle} aria-controls="responsive-navbar-nav">
          <img src="/navbar/menu.png" alt="menu" />
        </Navbar.Toggle>


        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav className={styles.nav_links}>
            <Nav.Link className={styles.nav_link} href="/firstPage">Test1</Nav.Link>
            <Nav.Link className={styles.nav_link} href="/secondPage">Test2</Nav.Link>
            <Nav.Link className={styles.nav_link} href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}