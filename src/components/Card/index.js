import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Products from "components/Products";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={6}>
        <Item>
          <Products />
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
          <Products />
        </Item>
      </Grid>
    </React.Fragment>
  );
}

export function Card() {
  return (
    <Box sx={{ flexGrow: 1, marginY: (theme) => theme.spacing(2) }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}
