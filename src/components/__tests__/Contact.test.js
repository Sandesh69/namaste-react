import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"



test("COntact Us Page",()=>{
    render(<Contact/>)
    const heading=screen.getByRole("heading")



    expect(heading).toBeInTheDocument()
})
//can be used it also instead of test
it("Contact Us Page has a button",()=>{
    render(<Contact/>)
    const button=screen.getByRole("button")
    expect(button).toBeInTheDocument()
})