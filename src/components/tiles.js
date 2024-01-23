import * as React from "react";
import { Link } from "gatsby";
import { Grid, Tabs, Tab } from "@mui/material";
import "./tiles.css";

const projectTabs = ['Computer Vision', 'Reinforcement Learning', 'Scientific ML'];

const Tiles = ({ projectTiles }) => {
  const [activeTab, setActiveTab] = React.useState(projectTabs[0]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const filteredTiles = projectTiles.filter(tile =>
    tile.tags.includes(activeTab)
  );

  return (
    <div className="tiles-class" id="projects">
      <div className="inner-container">
        <h4 className="header-subtitle">Projects</h4>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="project categories"
        >
          {projectTabs.map(tab => (
            <Tab label={tab} value={tab} key={tab} />
          ))}
        </Tabs>
        <Grid container spacing={2}>
          {filteredTiles.map(tile => (
            <Grid item xs={12} sm={4} key={tile.name}>
              <div className="Tile">
                <div className="upper-container">
                  <h3>{tile.name}</h3>
                  <div className="image-container">
                    <Link to={tile.link}>
                      <img src={require(`../images/${tile.img_name}.png`).default} 
                        alt="project preview" />
                    </Link>
                  </div>
                </div>
                <div className="lower-container">
                  <h4> {tile.description} </h4>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Tiles;
