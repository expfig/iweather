/**
 * IMPORTS
 */
import React from "react";
import { render, screen } from "@testing-library/react-native";

import { Input } from "@components/Input";

describe("Componente: Input", () => {
  it("deve ser renderizado sem indicador de atividade se o carregamento for indefinido ou falso", () => {
    render(<Input />);

    // recuperar componente renderizado em tela
    const activityIndicatorNull = screen.queryByTestId("activity-indicator");

    // espero que o resultado seja nullo
    expect(activityIndicatorNull).toBeNull();
  });

  it("deve ser renderizado com indicador de atividade se o carregamento for true", () => {
    render(<Input isLoading={true} />);

    // recuperar componente renderizado em tela
    const activityIndicator = screen.getByTestId("activity-indicator");

    // espero que o resultado seja verdadeiro
    expect(activityIndicator).toBeTruthy();
  });
});
