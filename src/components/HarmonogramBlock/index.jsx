import React from "react"
import moment from "moment"

import { Container, Header, HeaderWrapper, Time, TimeWrapper, Location, Note, Activity, Person, ActivityLocation, Activities } from "./styles"

// {
//   "name": "Večerní blok",
//   "start": "2020-09-25T22:00:00.000Z",
//   "end": "2020-09-26T00:00:00.000Z",
//   "note": null,
//   "people": [],
//   "activities": [
//     {
//       "name": "Čajovna"
//     },
//     {
//       "name": "Ticha Adorace"
//     },
//     {
//       "name": "Cimbálová muzika Hlaholica"
//     }
//   ]
// }

const HarmonogramBlock = ({ block }) => {
  const start = moment(block.start).format("HH:ss")
  const end = block.end ? moment(block.end).format("HH:ss") : null
  return (
    <Container>
      <HeaderWrapper>
        <TimeWrapper>
          <Time>{start}</Time>{" "}
          {end && (
            <>
              <div> - </div> <Time> {end}</Time>
            </>
          )}
        </TimeWrapper>
        <Header>{block.name}</Header>
      </HeaderWrapper>
      {block.location && <Location>{block.location.name}</Location>}
      {block.people && block.people.map((person) => <Person key={person.id}>{person.name}</Person>)}
      {block.note && <Note>{block.note}</Note>}
      {block.activities.length !== 0 && (
        <Activities>
          {block.activities.map((activity) => (
            <Activity key={activity.id}>
              <div>{activity.name}</div>
              <div>
                <ActivityLocation>{activity.location.name}</ActivityLocation>
                <Person>{activity.person.name}</Person>
              </div>
            </Activity>
          ))}
        </Activities>
      )}
    </Container>
  )
}

export default HarmonogramBlock
