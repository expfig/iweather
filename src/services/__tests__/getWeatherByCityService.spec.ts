/**
 * IMPORTS
 */

import { api } from "../api";

import { getWeatherByCityService } from "../getWeatherByCityService";
import { mockWeatherAPIResponse } from "../../__test__/mocks/api/mock-time-api-response";

describe("Service API: getWeatherByCityService", () => {
  it("deve ser possivel retornar informações do tempo na data atual de hoje.", async () => {
    // quando houver uma chamada na minha api com o metodo get o jest.Spyon vai entrar em cena e interceptar e vai sumular minha chamada api
    // metodo mockResolvedValue deve receber o mesmo retorno da api de fato
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

    const responseWeatherToday = await getWeatherByCityService({
      latitude: 123,
      longitude: 456,
    });

    expect(responseWeatherToday).toHaveProperty("today");
  });
});
