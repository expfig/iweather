/**
 * IMPORTS
 */
import { render, screen } from "@testing-library/react-native";
import { Day } from "@components/Day";
import clearDay from "@assets/clear_day.svg";

describe("Componente: Day", () => {
  it("deve ser possível renderizar o componente day.", () => {
    render(
      <Day
        data={{
          day: "29/04",
          min: "30°c",
          max: "34°c",
          icon: clearDay,
          weather: "Céu limpo",
        }}
      />
    );

    expect(screen.getByText("29/04")).toBeTruthy();
  });
});
