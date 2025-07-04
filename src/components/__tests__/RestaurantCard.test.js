import { render, screen } from "@testing-library/react"
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard"
import MOCK_DATA from '../MockData/resCardMock.json'
import "@testing-library/jest-dom"


it("it should render the RestaurantCard component with correct props", () => {
    render(<RestaurantCard resData={MOCK_DATA}/>)

    const name=screen.getByText("NIC Ice Creams");
    expect(name).toBeInTheDocument()
})


it("it should render the RestaurantCard component with correct props", () => {
    const PromotedCard=withPromotedLabel(RestaurantCard)
    render(<PromotedCard resData={MOCK_DATA}/>)

    const name=screen.getByText("NIC Ice Creams");
    expect(name).toBeInTheDocument()
})