import * as React from "react"
import { PageProps, type HeadFC } from "gatsby"
import Layout, { createHead } from "../layouts/page"
import { StaticImage } from "gatsby-plugin-image"
import { ExternalLink, Link } from "../components/Link"

const IndexPage: React.FC<PageProps> = () => {

  return (
    <Layout title="Page Not Found" description="The page you're looking for doesn't exist. Check the URL and try again.">
      <p>Maybe try going back <Link to="/">home</Link>?</p>
      <figure>
        <StaticImage src="../images/404_cat.jpg" alt="A sad cat" height={600} />
        <figcaption>Photo by <ExternalLink href="https://unsplash.com/@wx1993?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Raychan</ExternalLink> on <ExternalLink href="https://unsplash.com/photos/PY3d9NScUP4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</ExternalLink>
        </figcaption>
      </figure>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = createHead({ title: "Page Not Found" })
