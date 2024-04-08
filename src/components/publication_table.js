import * as React from "react";
import "./publication_table.css";
import { database } from '../data/database'
import { ref, get } from 'firebase/database';

const publicationTypeOrder = [
  "Journal Publications",
  "arXiv",
  "Conference Presentations & Publications",
  "Technical Reports",
  "Book",
  "Edited Books",
  "Book Chapters",
];

const groupByYearAndType = (publications) => {
  return publications.reduce((groupedPublications, publication) => {
    const year = publication.PublishedDateYear;
    const type = publication.PublicationType;

    if (!groupedPublications[year]) {
      groupedPublications[year] = {};
    }

    if (!groupedPublications[year][type]) {
      groupedPublications[year][type] = [];
    }

    groupedPublications[year][type].push(publication);
    return groupedPublications;
  }, {});
};

const PublicationTable = () => {
  const [publicationData, setPublicationData] = React.useState([]);

  React.useEffect(() => {
    const dbRef = ref(database, '1InxBkoDuYJs2Vdk-roy03CmDgaz4T3Xt-QGVapgn0C0/Papers');
      get(dbRef).then((snapshot) => {
        if (snapshot.exists()) {
          setPublicationData(Object.values(snapshot.val()));
        }
      }).catch((error) => {
        console.error("Firebase error:", error);
      });
  }, []);

  const groupedPublications = groupByYearAndType(publicationData);

  return (
    <div className="publications-class" id="publications">
      <div className="publication-container">
        <h4 className="header-sub">Publications</h4>
        <div className="publication-list">
          {Object.entries(groupedPublications)
            .sort(([year1], [year2]) => year2 - year1)
            .map(([year, types]) => (
              <div key={year} className="year-section">
                <h3 className="year-header">{year}</h3>
                {publicationTypeOrder
                  .filter(type => types[type])
                  .map(type => (
                    <div key={type} className="type-section">
                      <h4 className="type-header">{type}</h4>
                      {types[type].map(publication => (
                        <div key={publication.Authors} className="publication-card">
                          <div className="lower-container-pubs">
                            <h3>{publication.Title}</h3>
                            <h4>{publication.Authors}</h4>
                            {publication.Location && publication.Location !== 'NULL' &&
                              <h4 dangerouslySetInnerHTML={{ __html: `<i>${publication.Location}</i>` }}></h4>
                            }
                            {publication.PDFLink && publication.PDFLink !== 'NULL' && (
                              (publication.PDFLink.startsWith('http://') || publication.PDFLink.startsWith('https://')) && (
                                <div>
                                  <a href={publication.PDFLink} target="_blank" rel="noopener noreferrer">Publication PDF</a>
                                </div>
                              )
                            )}
                            {publication.ProjectLink && publication.ProjectLink !== 'NULL' && (
                              (publication.ProjectLink.startsWith('http://') || publication.ProjectLink.startsWith('https://')) && (
                                <div>
                                  <a href={publication.ProjectLink} target="_blank" rel="noopener noreferrer">Project Page</a>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PublicationTable;
