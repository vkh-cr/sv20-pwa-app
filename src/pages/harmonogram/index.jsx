import React from "react"
import { useQuery, gql } from "@apollo/client"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

import { Container } from "./styles"
import HarmonogramBlock from "../../components/HarmonogramBlock"

const Harmonogram = () => {

  const GET_SOMETHING = gql`
    query GetFriday {
      getBlocksForDay(day: FRIDAY) {
        id
        name
        start
        end
        note
        location {
          name
        }
        people {
          name
          id
        }
        activities {
          id
          name
          person {
            name
          }
          location {
            name
          }
        }
      }
    }
  `

  const { loading, error, data } = useQuery(GET_SOMETHING)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  console.log(data)
  return (
    <>
      <Container>
        <Tabs>
          <TabList>
            <Tab>Čtvrtek</Tab>
            <Tab>Pátek</Tab>
            <Tab>Sobota</Tab>
            <Tab>Neděle</Tab>
          </TabList>

          <TabPanel>
            <h2>Pátek</h2>
            {data.getBlocksForDay.map((block) => (
              <HarmonogramBlock key={block.id} block={block} />
            ))}
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </Container>
    </>
  )
}

export default Harmonogram
