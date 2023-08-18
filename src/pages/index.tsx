import * as React from "react"
import { graphql, type HeadFC } from "gatsby"
import Layout, { createHead } from "../layouts/page"
import styled from "styled-components";
import ShowCard from "../components/ShowCard";
import { type Show } from "../types/Show";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

interface IndexProps {
  data: {
    allShows: {
      nodes: Show[]
    }
  }
}

const groupShowsByTime = (shows: Show[]) => {
  const groupedShows = new Map<string, Show[]>()
  for (const show of shows) {
    const key = `${show.start}-${show.finish}`
    if (!groupedShows.has(key)) {
      groupedShows.set(key, [])
    }
    groupedShows.get(key)?.push(show)
  }
  return groupedShows
}

const TimeSlot = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const IndexPage: React.FC<IndexProps> = ({ data }) => {
  let showsByDay: Record<string, Show[]> = {};
  for (const show of data.allShows.nodes) {
    if (!showsByDay[show.parent.day]) {
      showsByDay[show.parent.day] = []
    }
    showsByDay[show.parent.day].push(show)
  };

  return (
    <Layout>
      {DAYS.map((day, i) => {
        if (!showsByDay[day.toLowerCase()]) return null;

        const shows = showsByDay[day.toLowerCase()]
        const groupedShows = groupShowsByTime(shows)

        return <div key={i}>
          <h1>{day}</h1>
          {Array.from(groupedShows).map(([key, shows]) => <TimeSlot key={key}>
            {shows.map((show, i) => <ShowCard key={i} {...show} />)}
          </TimeSlot>
          )}
        </div>
      })}

    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = createHead({ title: "Schedule" })

export const query = graphql`
      query AllShows {
        allShows {
        nodes {
        name
        start
      finish
      id
      type
      parent {
        ...on File {
        day: name
          }
        }
      }
    }
  }
      `;
