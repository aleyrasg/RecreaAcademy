import React from 'react'
import Sidebar from '../../components/sidebar'

function Ranking() {
  return (
    <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ padding: '20px', flex: 1 }}>
        {/* Aquí iría el contenido principal */}
        <h1>Bienvenido a Recrea Academy</h1>
      </main>
    </div>
  )
}

export default Ranking
