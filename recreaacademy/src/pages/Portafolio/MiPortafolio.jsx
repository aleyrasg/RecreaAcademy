import React from 'react'
import Sidebar from '../../components/sidebar'

function MiPortafolio() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ padding: '20px', flex: 1 }}>
        {/* Aquí iría el contenido principal */}
        <h1>Mi portafolio</h1>
      </main>
      
    </div>
  )
}

export default MiPortafolio
