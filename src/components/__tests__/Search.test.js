import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA  from "../../Components/MockData/resListData.json";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";


global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("Should render the Body Compoenent with Search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  
  const cardsBefore=screen.getAllByTestId("res-card")

  expect(cardsBefore.length).toBe(8)

  const Search = screen.getByRole("button", { name: "Search" });
 // expect(Search).toBeInTheDocument();

  const searchInput=screen.getByTestId("search-input")
  fireEvent.change(searchInput,{target:{value:"NIC Ice Creams"}})

  fireEvent.click(Search)
 const cards=screen.getAllByTestId("res-card")
  expect(cards.length).toBe(1)
});
