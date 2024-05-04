/**
 * IMPORTS
 */

import {
  render,
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
  act,
} from "./../../__test__/utils/custom-render";

import { Dashboard } from "@screens/Dashboard";
import { api } from "@services/api";
import { mockCityAPIResponse } from "../../__test__/mocks/api/mock-city-api-response";
import { mockWeatherAPIResponse } from "./../../__test__/mocks/api/mock-time-api-response";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";

describe("Screen: Dashboard", () => {
  beforeAll(async () => {
    const city = {
      id: "1",
      name: "São Paulo",
      latitude: 123,
      longitude: 456,
    };

    await saveStorageCity(city);
  });

  it("Deve ser possível mostrar informalçoes do clima da cidade selecionada.", async () => {
    // fazer o mock da chamada api que carrega as cidades
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

    //salvar uma cidade no storage

    render(<Dashboard />);

    // procurando pro uma cidade na tela
    const cityName = await waitFor(() => screen.findByText(/são paulo/i));

    expect(cityName).toBeTruthy();
  });

  it("Deve ser possível trocar uma cidade selecionada", async () => {
    // fazer o mock da chamada api que carrega as cidades
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

    // 1 -> useEfect (Buscar informações do clima/tempo da cidade selecionada).
    // 2 -> buscar informaçãoes da cidade.
    // 3 -> bsucar as informações dp tempo/clima da nova cidade selecionada
    jest
      .spyOn(api, "get")
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse })
      .mockResolvedValueOnce({ data: mockCityAPIResponse })
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse });

    // renderizar a tela dashboard
    const { debug } = render(<Dashboard />);

    // aguarda até que o elemento loading sai da tela
    await waitForElementToBeRemoved(() => screen.getByTestId("loading"));

    const cityName = "Linhares";

    await waitFor(() =>
      act(() => {
        const search = screen.getByTestId("search-input");

        fireEvent.changeText(search, cityName);
      })
    );

    await waitFor(() =>
      act(() => {
        fireEvent.press(screen.getByText("São Paulo", { exact: false }));
      })
    );

    expect(screen.getByText("São Paulo", { exact: false })).toBeTruthy();
  });
});
