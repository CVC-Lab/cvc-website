import * as React from "react";
import { Link } from "gatsby";
import { Grid } from "@mui/material";
import "./tiles.css";

const NewsTiles = ({ newsTiles }) => (
  <div
    className="publications-class"
    id="news"
    style={{
      background: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: `left`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1050,
        paddingBottom: `1.45rem`,
        marginLeft: `1.25rem`,
        marginRight: `1.25rem`,
        width: `100%`,
      }}
    >
      <h4
        className="header-subtitle"
        style={{
          color: `#787575`,
          fontSize: `1.0rem`,
          fontWeight: `600`,
          margin: `auto`,
          paddingBottom: `1.0rem`,
          paddingTop: `2.0rem`,
          marginBottom: "1rem",
        }}
      >
        News
      </h4>
      <Grid container direction="column" spacing={2}>
        {newsTiles.map((tile) => (
          <Grid item key={tile.name}>
            <div className="Card">
              <Link
                style={{
                  color: `#333f48`,
                  textDecoration: `none`,
                  fontSize: `.73rem`,
                }}
                to={tile.link}
              >
                <div className="lower-container-pubs">
                  <h3> {tile.name} </h3>
                  <h4> {tile.description} </h4>
                </div>
              </Link>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  </div>
);

export default NewsTiles;
