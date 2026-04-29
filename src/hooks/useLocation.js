import * as Location from "expo-location"; // Módulo de localizaçõ do Expo
import { useEffect, useState } from "react"; // Os Hooks de Efeitos Colaterais e Estado/Ciclo de Vida do React

export default function useLocation() {
  const [coords, setCoords] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    // Efeito colateral para obter a localização
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync(); // Solicita permissão para acessar a localização
        if (status !== "granted") {
          setErrorMsg("Permissão negada para acessar a localização");
          return;
        }

        let location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High, // Define a acurácia como alta
        });
        setCoords({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      } catch (error) {
        setErrorMsg("Erro ao obter a localização");
      }
    })(); // Função auto-invoca para obter a localização
  }, []); // O array vazio [] significa que o efeito só será executado um vez (semelhante ao componentDidMount)
  return { coords, errorMsg };
}
