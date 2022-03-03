import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PhoneIcon from "@mui/icons-material/Phone";

import Link from "@mui/material/Link";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const phone = "+56955555555";

export default function Contant() {
  return (
    <Box>
      <h1>Contacto</h1>
      <Grid container>
        <Grid item xs={12}>
          <Item
            sx={{
              padding: (theme) => theme.spacing(5),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            component={Link}
            href={`tel:${phone}`}
            underline="none"
          >
            <PhoneIcon /> {phone}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
