import { ButtonGroup, Grid, IconButton, Typography } from "@material-ui/core";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import React from "react";
import "./footerStyles.css";
export default function Footer() {
  return (
    <Grid container className="footer">
      <Grid item xs={12} sm={6} className="left">
        <Typography align="center" variant="body1">
          Academy Road <br />
          Opposite of Shahid Salam Stadium <br />
          Feni, 3900
          <br />
          Chittagong, Bangladesh
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} className="right">
        <Typography variant="body1" align="center">
          Contact with us --
          <br />
          E-mail : sharif@gmail.com
          <br />
          Phone : 01818181818
          <br />
          <ButtonGroup>
            <IconButton style={{ color: "white" }}>
              <Facebook />
            </IconButton>
            <IconButton style={{ color: "white" }}>
              <Instagram />
            </IconButton>
            <IconButton style={{ color: "white" }}>
              <Twitter />
            </IconButton>
          </ButtonGroup>
        </Typography>
      </Grid>
    </Grid>
  );
}
