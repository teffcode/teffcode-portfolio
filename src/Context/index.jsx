import { createContext, useState } from 'react'

export const SiteContext = createContext()

export const SiteProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  return (
    <SiteContext.Provider value={{
      count,
      setCount,
    }}>
      {children}
    </SiteContext.Provider>
  )
}
