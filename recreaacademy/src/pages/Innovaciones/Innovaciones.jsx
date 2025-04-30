import React from 'react'
import Sidebar from '../../components/sidebar'

function Innovaciones() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ padding: '20px', flex: 1 }}>
        {/* Aquí iría el contenido principal */}
        <h1> Innovaciones</h1>
      </main>
    </div>
  )
}

export default Innovaciones
