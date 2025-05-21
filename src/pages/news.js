import * as React from "react"
import { Suspense, lazy } from "react"
import { useSiteMetadata } from "../context/SiteContext"

import Layout from "../components/layout"
import LoadingFallback from "../components/LoadingFallback"

// Lazy load component
const NewsTiles = lazy(() => import("../components/news_tiles"))

const NewsPage = () => {
  const { newsTiles } = useSiteMetadata()

  return (
    <Layout>
      <Suspense fallback={<LoadingFallback />}>
        <NewsTiles
          id="news"
          newsTiles={newsTiles}
        />
      </Suspense>
    </Layout>
  )
}

export default NewsPage
