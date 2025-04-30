import React from 'react'
import Sidebar from '../../components/sidebar'

function Home() {
  return (
    <div>
      <Sidebar />
      <main style={{ padding: '20px', flex: 1 }}>
        {/* Aquí iría el contenido principal */}
        <h1>Home</h1>
      </main>
      
    </div>
  )
}

export default Home
