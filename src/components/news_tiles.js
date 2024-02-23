import React, { useState } from "react";
import { Link } from "gatsby";
import "./tiles.css";

const NewsTiles = ({ newsTiles }) => {
  const sortedNewsTiles = newsTiles.sort((a, b) => {
    const dateDifference = new Date(b.date) - new Date(a.date);
    if (dateDifference !== 0) return dateDifference;
    return b.name.localeCompare(a.name);
  });

  const [currentPage, setCurrentPage] = useState(1);
  const tilesPerPage = 20;

  const lastTile = currentPage * tilesPerPage;
  const firstTile = lastTile - tilesPerPage;
  const currentTiles = sortedNewsTiles.slice(firstTile, lastTile);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
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
        <h1
          className="header-subtitle"
          style={{
            color: `#333f48`,
            fontSize: `1.5rem`,
            fontWeight: `700`,
            margin: `auto`,
            textAlign: `center`,
            paddingBottom: `1.0rem`,
            paddingTop: `2.0rem`,
            marginBottom: "1rem",
          }}
        >
          News
        </h1>
        <div>
          {currentTiles.map((tile) => {
            const date = new Date(tile.date);
            const dateString = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

            return (
              <div key={tile.name} style={{ display: 'flex', marginBottom: '1.5rem' }}>
                <div className="lower-container-pubs" style={{ width: '120px', textAlign: 'right'}}>
                  <h3>{dateString}</h3>
                </div>
                <div style={{ flexBasis: '80%' }}>
                  <Link
                    style={{
                      color: `#333f48`,
                      textDecoration: `none`,
                      fontSize: `.73rem`,
                    }}
                    to={tile.link}
                  >
                    <div className="lower-container-pubs">
                      <h3>{tile.name}</h3>
                      {tile.description && <h4>{tile.description}</h4>}
                    </div>                  
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          {[...Array(Math.ceil(sortedNewsTiles.length / tilesPerPage)).keys()].map((pageNumber) => (
            <button
              key={pageNumber + 1}
              onClick={() => paginate(pageNumber + 1)}
              style={{
                backgroundColor: currentPage === pageNumber + 1 ? '#333f48' : 'transparent',
                color: currentPage === pageNumber + 1 ? '#fff' : '#333f48',
                border: '1px solid #333f48',
                padding: '0.5rem',
                margin: '0.5rem',
                cursor: 'pointer',
              }}
            >
              {pageNumber + 1}
            </button>
          ))}
        </div>
        </div>
    </div>
  );
};

export default NewsTiles;
