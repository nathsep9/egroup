import { Container } from "@mui/material";
import ProductsList from "components/Products";

function Products() {
  return (
    <div className="App">
      <Container
        sx={{
          marginY: (theme) => theme.spacing(2),
        }}
      >
        <h1>Productos</h1>
        <ProductsList />
      </Container>
    </div>
  );
}

export default Products;
