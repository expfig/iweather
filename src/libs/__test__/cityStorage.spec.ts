/**
 * IMPORTS
 */
import {
  getStorageCity,
  saveStorageCity,
  removeStorageCity,
} from "@libs/asyncStorage/cityStorage";

import { CityProps } from "@services/getCityByNameService";

const newCity: CityProps = {
  id: "1",
  name: "Belo Horizonte",
  latitude: 123,
  longitude: 456,
};

describe("Storage: CityStorage", () => {
  it("deve ser possível retornar nulo quando não ter cidade armazenada.", async () => {
    const responseCityStorage = await getStorageCity();

    expect(responseCityStorage).toBeNull();
  });

  it("deve ser possível retornar uma cidade armazenada.", async () => {
    await saveStorageCity(newCity);

    const saveStorage = await getStorageCity();

    expect(saveStorage).toEqual(newCity);
  });

  it("deve ser possível remover uma cidade armazenada.", async () => {
    await saveStorageCity(newCity);

    await removeStorageCity();

    const saveStorageToRemove = await getStorageCity();

    expect(saveStorageToRemove).toBeNull();
  });
});
