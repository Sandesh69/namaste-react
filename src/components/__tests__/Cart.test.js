import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../MockData/mockResMenu.json";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore";
import "@testing-library/jest-dom";


global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});


it("should load restaurant Menu Component", async () => {
  await act(async () => render(
  <Provider store={appStore}><RestaurantMenu /></Provider>));

  const accordionHeader=screen.getByText("Burgers With Millet Bun (6)")
  fireEvent.click(accordionHeader)
  const items=screen.getAllByTestId("item-card")
  expect(items.length).toBe(6)
});
