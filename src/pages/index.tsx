import * as React from "react"
import { graphql, type HeadFC } from "gatsby"
import Layout, { createHead } from "../layouts/page"
import ShowCard, { type Show } from "../components/ShowCard";

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
      <h1>Monday</h1>
      {data.allShows.nodes.filter(show => show.parent.day === "monday").map(show => (
        <ShowCard key={show.id} {...show} />
      ))}


      <h1>Tuesday</h1>
      {data.allShows.nodes.filter(show => show.parent.day === "tuesday").map(show => (
        <ShowCard key={show.id} {...show} />
      ))}
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = createHead({ title: "Home" })

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
