import * as Location from "expo-location"; 
import { useEffect, useState } from "react"; 

export default function useLocation() {
  const [coords, setCoords] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
  
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync(); 
        if (status !== "granted") {
          setErrorMsg("Permissão negada para acessar a localização");
          return;
        }

        let location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High, 
        });
        setCoords({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      } catch (error) {
        setErrorMsg("Erro ao obter a localização");
      }
    })(); 
  }, []); 
  return { coords, errorMsg };
}
