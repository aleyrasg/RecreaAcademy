import Layout from "../../components/Layout/Layout";
import "./RutasFormativas.css";
import ArcoRecrea from '../../components/ArcoRecrea/ArcoRecrea';
import Card from '@mui/material/Card';

function RutasFormativas() {
  return (
    <Layout>
      <div className="rutas-formativas-header">
        <h1>Rutas Formativas</h1>
        <p>¡Conoce cada una de nuestras rutas formativas!</p>
      </div>

      <ArcoRecrea>
        <Card className="card" sx={{ maxWidth: 300 }}>
          <div className="card-content">
            <h2>Rutas Formativas</h2>
            <p>¡Conoce cada una de nuestras rutas formativas!</p>
          </div>
        </Card>
      </ArcoRecrea>
    </Layout>
  );
}

export default RutasFormativas;