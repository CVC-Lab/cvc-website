import * as React from "react"
import { Suspense, lazy } from "react"
import { useSiteMetadata } from "../context/SiteContext"
import Layout from "../components/layout"
import LoadingFallback from "../components/LoadingFallback"

// Lazy load component
const SoftwareList = lazy(() => import("../components/software_list"))

const SoftwarePage = () => {
  const { softwareProjects } = useSiteMetadata()
  
  return (
    <Layout>
      <Suspense fallback={<LoadingFallback />}>
        <SoftwareList softwareProjects={softwareProjects} />
      </Suspense>
    </Layout>
  )
}

export default SoftwarePage
