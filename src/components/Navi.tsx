import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './../styles/components/navi.module.scss';
import { Link } from 'react-router-dom';
const Navi: React.FC = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id={styles.navi}>
      <Container className={styles.container}>
        <Navbar.Brand className={styles.navi_name}>
          <Link to="/">Sviatlana Kapusta</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end"
          style={{
            padding: 0,
          }}
        >
          <Nav>
            <Nav.Link>
              <Link to="projects" className={styles.navi_link}>
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="resume" className={styles.navi_link}>
                Resume
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="about" className={styles.navi_link}>
                About Me
              </Link>{' '}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navi;
