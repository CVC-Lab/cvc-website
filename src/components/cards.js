import * as React from "react"
import { Grid, Tabs, Tab, Box } from "@mui/material"
import "./cards.css"
import { database } from "../data/database"
import { ref, get } from "firebase/database"

const TabPanel = props => {
  const { children, value, index, ...other } = props

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
  )
}

const sortMembers = members => {
  const positionOrder = [
    "Director, Principle Investigator",
    "Research Administrator",
    "Research Fellow from Purdue University",
    "Postdoctoral Researcher",
  ]

  const comparePositions = (a, b) => {
    const positionA = positionOrder.indexOf(a.Position)
    const positionB = positionOrder.indexOf(b.Position)

    if (positionA !== positionB) {
      return positionA - positionB
    }

    return a.Name.localeCompare(b.Name)
  }

  return members.slice().sort(comparePositions)
}

function renderMembersByTitle(members) {
  const sortedMembers = sortMembers(members)

  const studentsByTitle = {
    "Graduate Student": [],
    "Undergraduate Student": [],
    "High School Student": [],
  }

  const facultyTiles = []

  sortedMembers.forEach(member => {
    const positionLower = member.Position.toLowerCase()
    if (
      (positionLower.includes("graduate") &&
        !positionLower.includes("undergraduate")) ||
      positionLower.includes("phd")
    ) {
      studentsByTitle["Graduate Student"].push(member)
    } else if (member.Position === "Undergraduate Student") {
      studentsByTitle["Undergraduate Student"].push(member)
    } else if (member.Position === "High School Student") {
      studentsByTitle["High School Student"].push(member)
    } else {
      facultyTiles.push(member)
    }
  })

  return (
    <div className="student-titles">
      <h3 className="title-header"></h3>
      <Grid style={{ marginBottom: "2rem" }} container spacing={4}>
        {facultyTiles.map(people => renderCard(people, true))}
      </Grid>
      <h3 className="title-header">Graduate Students</h3>
      <Grid className="title-grid" container spacing={4}>
        {studentsByTitle["Graduate Student"].map(people =>
          renderCard(people, !people.isExactTitle)
        )}
      </Grid>
      <h3 className="title-header">Undergraduate Students</h3>
      <Grid className="title-grid" container spacing={4}>
        {studentsByTitle["Undergraduate Student"].map(people =>
          renderCard(people, false)
        )}
      </Grid>
      {studentsByTitle["High School Student"] &&
        studentsByTitle["High School Student"].length > 0 && (
          <>
            <h3 className="title-header">High School Students</h3>
            <Grid className="title-grid" container spacing={4}>
              {studentsByTitle["High School Student"].map(people =>
                renderCard(people, false)
              )}
            </Grid>
          </>
        )}
    </div>
  )
}

function renderCard(people, showFullTitle = false) {
  return (
    <Grid
      item
      xs={6}
      sm={4}
      md={2}
      key={people.Name}
      className="member-grid-item"
    >
      <div className="Card">
        <div className="upper-container">
          <div className="image-container">
            <img
              src={require(`../images/people/${people.Image}`).default}
              alt={`${people.Name}'s profile`}
            />
          </div>
        </div>
        <div className="lower-container">
          <h3>{people.Name}</h3>
          {showFullTitle && <h4>{people.Position}</h4>}
        </div>
      </div>
    </Grid>
  )
}

const Cards = () => {
  const [peopleCards, setPeopleCards] = React.useState([])
  const [value, setValue] = React.useState(0)

  React.useEffect(() => {
    const fetchPeopleCards = async () => {
      const dbRef = ref(
        database,
        "1PMgY4FYwz04Ptq1Kc9ByStWG-Z6RsR3bcR7iDMbaiN0/Sheet1"
      )
      try {
        const snapshot = await get(dbRef)
        if (snapshot.exists()) {
          const data = snapshot.val()
          setPeopleCards(Object.values(data))
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchPeopleCards()
  }, [])
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const currentMembers = peopleCards.filter(person => person.Current === true)
  const alumniMembers = peopleCards.filter(person => person.Current === false)

  return (
    <div className="people-class" id="people">
      <div className="people-container">
        <h4 className="header-subtitle">People</h4>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="people categories"
        >
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
  )
}

export default Cards
