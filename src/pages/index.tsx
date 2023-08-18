import * as React from "react"
import { graphql, type HeadFC } from "gatsby"
import Layout, { createHead } from "../layouts/page"
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

const IndexPage: React.FC<IndexProps> = ({ data }) => {
  return (
    <Layout>
      {DAYS.map(day => <>
        <h1>{day}</h1>
        {
          data.allShows.nodes.filter(show => show.parent.day === day.toLowerCase()).map(show => (
            <ShowCard key={show.id} {...show} />))
        }
      </>)}

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
          ... on File {
            day: name
          }
        }
      }
    }
  }
`;
