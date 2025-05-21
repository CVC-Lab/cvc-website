import * as React from "react"
import { Suspense, lazy } from "react"
import { Helmet } from "react-helmet"
import { useSiteMetadata } from "../context/SiteContext"

import Layout from "../components/layout"
import LoadingFallback from "../components/LoadingFallback"
import favicon from "../favicons/favicon.png"

// Lazily load components that aren't needed for initial render
const Tiles = lazy(() => import("../components/tiles"))
const Cards = lazy(() => import("../components/cards"))
const About = lazy(() => import("../components/about"))

const IndexPage = () => {
  const { projectTiles, peopleCards } = useSiteMetadata()

  return (
    <Layout>
      <Helmet>
        <meta name="icon" href={favicon} />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
          data-react-helmet="true"
        />
      </Helmet>

      <Suspense fallback={<LoadingFallback />}>
        <Tiles
          id="projects"
          projectTiles={projectTiles}
        />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Cards
          id="people"
          peopleCards={peopleCards || []}
        />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <About id="about" />
      </Suspense>
    </Layout>
  )
}

export default IndexPage
