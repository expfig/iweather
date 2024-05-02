/**
 * IMPORTS
 */

import { api } from "../api";

import { getCityByNameService } from "../getCityByNameService";
import { mockCityAPIResponse } from "../../__test__/mocks/api/mock-city-api-response";

describe("Service API: getCityByNameService", () => {
  it("deve ser possivel retornar informações da cidades.", async () => {
    // quando houver uma chamada na minha api com o metodo get o jest.Spyon vai entrar em cena e interceptar e vai sumular minha chamada api
    // metodo mockResolvedValue deve receber o mesmo retorno da api de fato
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse });

    const response = await getCityByNameService("Belo Horizonte");

    // validando se minha resposta e maior do que zero
    expect(response.length).toBeGreaterThan(0);
  });
});
