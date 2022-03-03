import Header from "components/Header";
import { Routes, Route } from "react-router-dom";

import { ROUTES } from "constantsApp";
import Main from "routes/Main";
import Products from "routes/Products";
import Description from "routes/Description";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path={ROUTES.PRODUCTS} element={<Products />} />
        <Route path={ROUTES.DESCRIPTION} element={<Description />} />
      </Routes>
    </>
  );
}

export default App;
