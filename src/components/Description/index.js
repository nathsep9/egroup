import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { ListImage } from "../ListImage";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export const Description = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <h1>Bienvenidos a MercaMundial</h1>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Item>
            <ListImage />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            porro hic ullam magnam quae consequatur animi nemo corporis,
            deserunt ipsa distinctio optio ut earum nostrum non a suscipit in
            dolores! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptates voluptatem facilis, nostrum dolorem et minus. A
            voluptatem aliquam ratione ad. Saepe molestias quia possimus nam
            numquam quisquam eius iste distinctio? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Beatae porro hic ullam magnam quae
            consequatur animi nemo corporis, deserunt ipsa distinctio optio ut
            earum nostrum non a suscipit in dolores! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Voluptates voluptatem facilis, nostrum
            dolorem et minus. A voluptatem aliquam ratione ad. Saepe molestias
            quia possimus nam numquam quisquam eius iste distinctio? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Beatae porro hic ullam
            magnam quae consequatur animi nemo corporis, deserunt ipsa
            distinctio optio ut earum nostrum non a suscipit in dolores! Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            voluptatem facilis, nostrum dolorem et minus. A voluptatem aliquam
            ratione ad. Saepe molestias quia possimus nam numquam quisquam eius
            iste distinctio? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Beatae porro hic ullam magnam quae consequatur animi nemo
            corporis, deserunt ipsa distinctio optio ut earum nostrum non a
            suscipit in dolores! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Voluptates voluptatem facilis, nostrum dolorem et
            minus. A voluptatem aliquam ratione ad. Saepe molestias quia
            possimus nam numquam quisquam eius iste distinctio? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Beatae porro hic ullam
            magnam quae consequatur animi nemo corporis, deserunt ipsa
            distinctio optio ut earum nostrum non a suscipit in dolores! Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            voluptatem facilis, nostrum dolorem et minus. A voluptatem aliquam
            ratione ad. Saepe molestias quia possimus nam numquam quisquam eius
            iste distinctio?
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};
