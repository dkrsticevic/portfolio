import { Col, Container, Row } from "react-bootstrap"
import About from "../components/About"
import Projects from "../components/Projects/Projects"

function Home() {

  return (
    <Container>
      <Row md={1} xs={1} lg={1} xl={2}>
      <Col id={"about"} xl={8}> 
        <About></About>
      </Col>
      <Col id={"projects"} xl={4}> 
         <Projects></Projects>
      </Col>
      </Row>
    </Container>
  )
}

export default Home
