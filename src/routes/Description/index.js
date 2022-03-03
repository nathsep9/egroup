import { Container } from "@mui/material";
import Carousel from "components/Carousel";
import { Description } from "components/Description";
import Contact from "components/Contact";

function DescriptionPage() {
  return (
    <div className="App">
      <Container
        sx={{
          marginY: (theme) => theme.spacing(2),
        }}
      >
        <Carousel />
        <Description />
        <Contact />
      </Container>
    </div>
  );
}

export default DescriptionPage;
