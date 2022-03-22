import * as React from "react"
import { GridList, GridListTile } from '@material-ui/core';
import './publication_table.css'

const PublicationTable = ({ publicationData }) => (
  <div className="publications-class" id="publications" style={{background: 'white', display:'flex', alignItems: 'center', justifyContent: 'center', textAlign: `left`}}>
    <div style={{margin: `0 auto`, maxWidth: 1050, paddingBottom: `1.45rem`, marginLeft: `1.25rem`, marginRight: `1.25rem`, width: `100%`}}>
      <h4 className="header-subtitle" style={{color: `#787575`, fontSize: `1.0rem`, fontWeight: `600`, margin: `auto`, paddingBottom: `1.0rem`,
        paddingTop: `2.0rem`, marginBottom: '1rem'}}>
        Publications
      </h4>
      <GridList cols={1}>
        {(publicationData.sort((a,b) => b.PublishedDateYear - a.PublishedDateYear)).map(publication => (
          <GridListTile key={publication.Authors}>
            <div className='Card'>
              <div className='lower-container-pubs'>
                <h3> {publication.Title} </h3>
                <h4> {publication.Authors} </h4>
                <h4> {publication.PublishedDateYear} ({publication.PublicationType} - <a href={publication.PDFLink}>pdf</a>) </h4>
              </div>
            </div>
          </GridListTile>
        ))}
      </GridList>
    </div>
  </div>
)

export default PublicationTable
