/**
 * IMPORTS
 */
import { CityAPIResponse } from "@services/getCityByNameService";

const mockCityAPIResponse: CityAPIResponse = {
  id: "1",
  name: "Belo Horizonte",
  sys: {
    country: "BR",
  },
  coord: {
    lat: 51.5085,
    lon: -0.1257,
  },
};

/**
 * EXPORTS
 */
export { mockCityAPIResponse };
