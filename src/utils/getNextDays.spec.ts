import { getNextDays } from "./getNextDays";

describe("Ultis: Chegar no dia seguinte.", () => {
  it("deve retornar os próximos 5 dias apartir do dia atual.", () => {
    // executar os testes
    const days = getNextDays();

    expect(days.length).toBe(5);
  });
});
