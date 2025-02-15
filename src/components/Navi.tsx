import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './../styles/components/navi.module.scss';
const Navi: React.FC = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id={styles.navi}>
      <Container>
        <Navbar.Brand href="#home" className={styles.navi_name}>
          Sviatlana Kapusta
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end"
          style={{
            marginRight: 124,
            padding: 0,
          }}
        >
          <Nav>
            <Nav.Link href="#projects" className={styles.navi_link}>
              Projects
            </Nav.Link>
            <Nav.Link href="#resume" className={styles.navi_link}>
              Resume
            </Nav.Link>
            <Nav.Link href="#about" className={styles.navi_link}>
              About Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navi;
