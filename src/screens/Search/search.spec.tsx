/**
 * IMPORTS
 */

import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "./../../__test__/utils/custom-render";

import { Search } from "@screens/Search";
import { api } from "@services/api";
import { mockCityAPIResponse } from "../../__test__/mocks/api/mock-city-api-response";

describe("Screen: Search", () => {
  it("Deve ser possível mostrar opção de cidades", async () => {
    // fazer o mock da chamada api que carrega as cidades
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse });

    render(<Search />);

    // procurando pelo componente search
    const componentInputSearch = screen.getByTestId("search-input");

    // fazer simulação do usuário digitiado a cidade
    fireEvent.changeText(componentInputSearch, "Belo Horizonte");

    // procurando na tela pelo algum texto semelhante
    const option = await waitFor(() => screen.findByText(/belo horizonte/i));

    expect(option).toBeTruthy();
  });
});
