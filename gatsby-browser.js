import "@fontsource/libre-franklin/300.css"
import "@fontsource/libre-franklin/400.css"
import "@fontsource/libre-franklin/500.css"
import "@fontsource/libre-franklin/600.css"
import "@fontsource/libre-franklin/700.css"
import "./src/styles/global.css"
import React from "react"
import {
  PasswordProvider,
  ProtectedRoute,
} from "./src/components/password-protect/PasswordContext"
import { SiteProvider } from "./src/context/SiteContext"

// Wrap the app with the password provider and site provider
export const wrapRootElement = ({ element }) => {
  return (
    <PasswordProvider>
      <SiteProvider>
        {element}
      </SiteProvider>
    </PasswordProvider>
  )
}

// Wrap the page element with the protected route
export const wrapPageElement = ({ element, props }) => {
  return <ProtectedRoute {...props}>{element}</ProtectedRoute>
}
