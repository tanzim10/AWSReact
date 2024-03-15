import React from 'react'
import Header from '../component/header'

function AppLayout({children}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default AppLayout;
