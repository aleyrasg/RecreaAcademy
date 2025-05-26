import Layout from "../../components/Layout/Layout";
import "./RutasFormativas.css";
import ArcoRecrea from '../../components/ArcoRecrea/ArcoRecrea';
import { 
  Card,
  Text
} from '@chakra-ui/react';

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
            <Text
              variant="h5" fontWeight="bold" sx={{ color: '#FC083B' }}>
              Rutas Formativas
            </Text>
            <p>¡Conoce cada una de nuestras rutas formativas!</p>
          </div>
        </Card>
      </ArcoRecrea>
    </Layout>
  );
}

export default RutasFormativas;