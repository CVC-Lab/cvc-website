import React, { createContext, useState, useEffect, useContext } from "react"
import Cookies from "js-cookie"
import { navigate } from "gatsby"

const COOKIE_NAME = "password-protect"
const PASSWORD = process.env.GATSBY_INTERNAL_LINKS_PASSWORD

// Create context
const PasswordContext = createContext()

// Provider component
export const PasswordProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is already authenticated
    const storedPassword = Cookies.get(COOKIE_NAME)
    if (storedPassword === PASSWORD) {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const login = passwordCandidate => {
    if (passwordCandidate === PASSWORD) {
      Cookies.set(COOKIE_NAME, passwordCandidate)
      setIsAuthenticated(true)
      return true
    }
    return false
  }

  const logout = () => {
    Cookies.remove(COOKIE_NAME)
    setIsAuthenticated(false)
  }

  return (
    <PasswordContext.Provider
      value={{ isAuthenticated, isLoading, login, logout }}
    >
      {children}
    </PasswordContext.Provider>
  )
}

// Custom hook to use the password context
export const usePassword = () => {
  const context = useContext(PasswordContext)
  if (!context) {
    throw new Error("usePassword must be used within a PasswordProvider")
  }
  return context
}

// Helper function to check if a page is protected
export const isProtectedPage = (
  pathname,
  pagePaths,
  partialMatching = false,
) => {
  const isProtected = pagePaths.find(path => {
    const isIndexPage = pathname === "/"

    if (partialMatching && !isIndexPage) {
      return pathname.startsWith(path)
    }

    return path === pathname
  })

  return Boolean(isProtected)
}

// Protected route component
export const ProtectedRoute = ({
  children,
  location,
  pagePaths = [
    "/internal",
    "/internal/",
    "/cvc-website/internal",
    "/cvc-website/internal/",
  ],
  partialMatching = true,
}) => {
  const { isAuthenticated, isLoading } = usePassword()

  if (isLoading) {
    return <div>Loading...</div>
  }

  const pathname = location.pathname
  const isProtected = isProtectedPage(pathname, pagePaths, partialMatching)

  if (isProtected && !isAuthenticated) {
    navigate("/password-protect", { state: { redirectTo: pathname } })
    return null
  }

  return children
}

export default PasswordContext
