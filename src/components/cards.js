import * as React from "react";
import { Grid } from "@mui/material";
import "./cards.css";

const Cards = ({ peopleCards }) => (
  <div
    className="people-class"
    id="people"
    style={{
      background: "#F0F3F4",
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
        paddingBottom: `5.45rem`,
        marginLeft: `1.25rem`,
        marginRight: `1.25rem`,
        width: `100%`,
      }}
    >
      <h4
        className="header-subtitle"
        style={{
          color: `#787575`,
          fontSize: `.75rem`,
          fontWeight: `600`,
          margin: `auto`,
          paddingBottom: `1.0rem`,
          paddingTop: `2.0rem`,
          marginBottom: "1rem",
        }}
      >
        People
      </h4>
      <Grid container spacing={2}>
        {peopleCards.map((people) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={2}
            key={people.name}
            style={{
              height: "220px",
              width: "150px",
              overflow: "hidden",
            }}
          >
            <div className="Card">
              <div className="upper-container">
                <div className="image-container">
                  <img
                    src={require(`../images/people/${people.image}`).default}
                    alt="profile picture"
                  />
                </div>
              </div>
              <div className="lower-container">
                <h3> {people.name} </h3>
                <h4> {people.position} </h4>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  </div>
);

export default Cards;