import { Sun, SunMoon } from 'lucide-react'
import React from 'react'

const DarkMode = ({ mode }) => {
  return (
    <>
        {
            mode ? <SunMoon className="text-sky-400" /> : <Sun className="text-sky-400" />
        }
    </>
  )
}

export default DarkMode