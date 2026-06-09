import type { ReactNode } from 'react'
import Navbar from './Navbar'
import { Footer } from './Footer'

export const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='grow'>{children}</div>
      <Footer />
    </div>
  )
}
