import { Container } from "@mui/material";
import Carousel from "components/Carousel";
import { Description } from "./Description";
import "./App.css";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import Contant from "components/Card/Contant";

function App() {
  return (
    <div className="App">
      <Header />
      <Container
        sx={{
          marginY: (theme) => theme.spacing(2),
        }}
      >
        <Carousel />
        <Description />
        <h1>Productos</h1>
        <Card />
        <Contant />
      </Container>
    </div>
  );
}

export default App;
