/**
 * IMPORTS
 */
import { useCity } from "@hooks/useCity";
import { act, renderHook, waitFor } from "@testing-library/react-native";
import { CityProvider } from "./CityContext";

describe("Context: CityContext", () => {
  it("Deve ser possível alterar uma atividade selecionada.", async () => {
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider });

    await waitFor(() =>
      act(() => {
        result.current.handleChanceCity({
          id: "1",
          name: "Belo Horizonte",
          latitude: 123,
          longitude: 456,
        });
      })
    );

    expect(result.current.city?.name).toBe("Belo Horizonte");
  });
});
