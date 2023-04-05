import { Navbar, Nav, Container, Stack } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" static="bottom" className="mt-5">
      <Container>
        <Nav className="mx-auto m-3">
          <Container>
            <Stack direction="horizontal" gap={5}>
              <div className="text-light">Gift Cards</div>
              <div className="text-light">Contact Us</div>
              <div className="text-light">Investors</div>
              <div className="text-light">Franchising</div>
              <div className="text-light">Blog</div>
              <div className="text-light">Privacy Policy</div>
              <div className="text-light">Terms and Conditions</div>
              <div className="text-light">Manage Privacy Preferences</div>
            </Stack>
          </Container>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
