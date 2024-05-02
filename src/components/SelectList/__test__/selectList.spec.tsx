/**
 * IMPORTS
 */

import { render, screen, fireEvent } from "@testing-library/react-native";

import { SelectList } from "@components/SelectList";

describe("Componente: SelectList", () => {
  it("deve ser retornar detalhes da cidade selecionada.", () => {
    const dataCity = [
      { id: "1", name: "Belo Horizonte", latitude: 0, longitude: 0 },
      { id: "2", name: "Linhares", latitude: 1, longitude: 1 },
    ];

    const onPressMock = jest.fn();

    render(
      <SelectList data={dataCity} onChange={() => {}} onPress={onPressMock} />
    );

    // cidades listadas em tela para usuário
    const selectedCity = screen.getByText(/Belo Horizonte/i);

    // simular usuário selecionando uma cidade (Belo horizonte)
    fireEvent.press(selectedCity);

    // validar se uma função simulada seja chamada
    expect(onPressMock).toHaveBeenCalledWith(dataCity[0]);
  });

  it("não deve ser mostrar opções quando os adereços de data estão vazios.", () => {
    render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />);

    const options = screen.getByTestId("options");

    expect(options.children).toHaveLength(0);
  });
});
