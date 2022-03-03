import { Container } from "@mui/material";
import Carousel from "components/Carousel";
import { Description } from "components/Description";
import { Card } from "components/Card";
import Contact from "components/Contact";

function Main() {
  return (
    <div className="App">
      <Container
        sx={{
          marginY: (theme) => theme.spacing(2),
        }}
      >
        <Carousel />
        <Description />
        <h1>Productos</h1>
        <Card />
        <Contact />
      </Container>
    </div>
  );
}

export default Main;
