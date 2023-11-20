import * as React from "react";
import { Grid } from "@mui/material";
import "./publication_table.css";

const groupByYear = (publications) => {
  return publications.reduce((groupedPublications, publication) => {
    const year = publication.PublishedDateYear;
    if (!groupedPublications[year]) {
      groupedPublications[year] = [];
    }
    groupedPublications[year].push(publication);
    return groupedPublications;
  }, {});
};

const PublicationTable = ({ publicationData = [] }) => {
  const groupedPublications = groupByYear(publicationData);
  
  return (
    <div className="publications-class" id="publications">
      <div className="publication-container">
        <h4 className="header-subtitle">Publications</h4>
        <Grid container direction="column" spacing={2}>
          {Object.entries(groupedPublications)
            .sort(([year1], [year2]) => year2 - year1)
            .map(([year, publications]) => (
            <div key={year} style={{marginBottom: "30px"}}>
              <Grid item className="year-header">
                <h3>{year}</h3>
              </Grid>
              {publications.map((publication) => (
                <Grid item key={publication.Authors} style={{marginBottom: "15px"}}> 
                  <div className="Card">
                    <div className="lower-container-pubs">
                      <h3> {publication.Title} </h3>
                      <h4> {publication.Authors} </h4>
                      <h4>
                      {publication.PublishedDateYear} (
                        {publication.PublicationType}
                        {publication.PDFLink && publication.PDFLink !== 'NULL' && (
                        <> - <a href={publication.PDFLink}>pdf</a></>
                        )}
                      )
                      </h4>
                    </div>
                  </div>
                </Grid>
              ))}
            </div>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default PublicationTable;
