import "@fontsource/libre-franklin"
import React from "react"
import { PasswordProvider, ProtectedRoute } from "./src/components/password-protect/PasswordContext"

// Wrap the app with the password provider
export const wrapRootElement = ({ element }) => {
  return <PasswordProvider>{element}</PasswordProvider>
}

// Wrap the page element with the protected route
export const wrapPageElement = ({ element, props }) => {
  return <ProtectedRoute {...props}>{element}</ProtectedRoute>
}
