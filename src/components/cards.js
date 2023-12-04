import * as React from "react";
import { Grid, Tabs, Tab, Box } from "@mui/material";
import "./cards.css";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Grid container spacing={4}>
            {children}
          </Grid>
        </Box>
      )}
    </div>
  );
}

const sortMembers = (members) => {
  const positionOrder = [
    'Director, Principle Investigator',
    'Research Administrator',
    'Research Fellow from Purdue University',
    'Postdoctoral Researcher'
  ];

  const comparePositions = (a, b) => {
    const positionA = positionOrder.indexOf(a.position);
    const positionB = positionOrder.indexOf(b.position);

    if (positionA !== positionB) {
      return positionA - positionB;
    }

    return a.name.localeCompare(b.name);
  };

  return members.slice().sort(comparePositions);
};

function renderMembersByTitle(members) {
  const sortedMembers = sortMembers(members);

  const studentsByTitle = {
    'Graduate Student': [],
    'Undergraduate Student': [],
    'High School Student': [],
  };

  const facultyTiles = [];

  sortedMembers.forEach(member => {
    const positionLower = member.position.toLowerCase();
    if ((positionLower.includes('graduate') && !positionLower.includes('undergraduate')) || positionLower.includes('phd')) {
      studentsByTitle['Graduate Student'].push(member);
    } else if (member.position === 'Undergraduate Student') {
      studentsByTitle['Undergraduate Student'].push(member);
    } else if (member.position === 'High School Student') {
      studentsByTitle['High School Student'].push(member);
    } else {
      facultyTiles.push(member);
    }
  });

  return (
    <div className="student-titles">
      <h3 className="title-header"></h3>
      <Grid style={{ marginBottom: '2rem' }} container spacing={4}>
        {facultyTiles.map((people) => renderCard(people, true))}
      </Grid>
      <h3 className="title-header">Graduate Students</h3>
      <Grid className="title-grid" container spacing={4}>
        {studentsByTitle['Graduate Student'].map((people) => 
          renderCard(people, !people.isExactTitle))}
      </Grid>
      <h3 className="title-header">Undergraduate Students</h3>
      <Grid className="title-grid" container spacing={4}>
        {studentsByTitle['Undergraduate Student'].map((people) => 
          renderCard(people, false))}
      </Grid>
        {studentsByTitle['High School Student'] && studentsByTitle['High School Student'].length > 0 && (
          <>
            <h3 className="title-header">High School Students</h3>
            <Grid className="title-grid" container spacing={4}>
              {studentsByTitle['High School Student'].map((people) => 
                renderCard(people, false))}
            </Grid>
          </>
        )}
    </div>
  );
}

function renderCard(people, showFullTitle = false) {
  return (
    <Grid
      item
      xs={6}
      sm={4}
      md={2}
      key={people.name}
      className="member-grid-item"
    >
      <div className="Card">
        <div className="upper-container">
          <div className="image-container">
            <img
              src={require(`../images/people/${people.image}`).default}
              alt={`${people.name}'s profile`}
            />
          </div>
        </div>
        <div className="lower-container">
          <h3>{people.name}</h3>
          {showFullTitle && <h4>{people.position}</h4>}
        </div>
      </div>
    </Grid>
  );
}

const Cards = ({ peopleCards }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const currentMembers = peopleCards.filter(person => person.status === 'current');
  const alumniMembers = peopleCards.filter(person => person.status === 'alumni');

  return (
    <div className="people-class" id="people">
      <div className="people-container">
        <h4 className="header-subtitle">People</h4>
        <Tabs value={value} onChange={handleChange} aria-label="people categories">
          <Tab label="Current Members" />
          <Tab label="Alumni" />
        </Tabs>
        <TabPanel value={value} index={0}>
        {renderMembersByTitle(currentMembers)}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {renderMembersByTitle(alumniMembers)}
      </TabPanel>
      </div>
    </div>
  );
};

export default Cards;