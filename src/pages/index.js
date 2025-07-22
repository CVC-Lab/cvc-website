import * as React from 'react'
import { Suspense, lazy } from 'react'
import { Helmet } from 'react-helmet'
import { useSiteMetadata } from '../context/SiteContext'

import Layout from '../components/layout'
import LoadingFallback from '../components/LoadingFallback'
import favicon from '../favicons/favicon.png'
import Tiles from '../components/tiles'

// Lazily load components that aren't needed for initial render
const Cards = lazy(() => import('../components/cards'))
const About = lazy(() => import('../components/about'))
const VideoBanner = lazy(() => import('../components/VideoBanner'))

const IndexPage = () => {
  const { projectTiles, peopleCards } = useSiteMetadata()

  // Research visualization videos
  const researchVideos = [
    {
      src: require('../videos/translation_siggraph.mp4').default,
      title: 'Anisotropic Convolutional Networks',
      description: 'SIGGRAPH: Building translation-equivariant CNNs using anisotropic convolutions',
      projectLink: '/projects/angstrom',
    },
    {
      src: require('../videos/hydro6A80.mp4').default,
      title: 'Subsurface Flow Modeling',
      description: 'Advanced hydrogeological modeling and subsurface flow visualization',
      projectLink: '/projects/subsurface-modeling',
    },
    {
      src: require('../videos/minihalos_800x600_10.mp4').default,
      title: 'Dark Matter Minihalos Simulation',
      description: 'High-resolution cosmological simulation of dark matter structure formation',
    },
    {
      src: require('../videos/perfly.mp4').default,
      title: 'Fluid Dynamics Visualization',
      description: 'Advanced computational fluid dynamics simulation with particle tracking',
    },
    {
      src: require('../videos/gramicidin.mp4').default,
      title: 'Gramicidin Molecular Dynamics',
      description: 'Molecular dynamics simulation of gramicidin ion channel',
    },
    {
      src: require('../videos/muscle_s.mp4').default,
      title: 'Muscle Fiber Simulation',
      description: 'Biomechanical simulation of muscle fiber contraction',
    },
    {
      src: require('../videos/demo_512.mp4').default,
      title: 'Scientific Visualization Demo',
      description: 'High-performance computing visualization demonstration',
    },
    {
      src: require('../videos/SOT.mp4').default,
      title: 'State-of-the-Art Rendering',
      description: 'Advanced rendering techniques for scientific data',
    },
    {
      src: require('../videos/gulffinal.mp4').default,
      title: 'Gulf Stream Simulation',
      description: 'Ocean current dynamics and temperature visualization',
    },
    {
      src: require('../videos/vm256.mp4').default,
      title: 'Volume Rendering',
      description: 'Advanced 3D volume rendering of scientific datasets',
    },
  ]

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

      <Tiles id="projects" projectTiles={projectTiles || []} />

      {/* Video Banner showcasing research visualizations */}
      <Suspense fallback={<LoadingFallback />}>
        <VideoBanner videos={researchVideos} />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Cards id="people" peopleCards={peopleCards || []} />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <About id="about" />
      </Suspense>
    </Layout>
  )
}

export default IndexPage
