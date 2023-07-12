import React from "react"
import { PRODUCTS } from "routes"
import SpecialOffer from "@organism/special-offer"
import userEvent from "@testing-library/user-event"
import { render, screen } from "@testing-library/react"

// Mock the next/link component
jest.mock("next/link", () => {
  return ({ children, href }) => {
    return <a href={href}>{children}</a>
  }
})

describe("BestSellerProduct component", () => {
  test("renders the component with correct content and link", () => {
    render(<SpecialOffer />)

    const headingElement = screen.getByRole("heading", { name: "Special Offers" })
    const seeAllProductLink = screen.getByRole("link")
    const arrowIcon = screen.getByTestId("arrow-icon")

    expect(headingElement).toBeInTheDocument()
    expect(seeAllProductLink).toBeInTheDocument()
    expect(arrowIcon).toHaveClass("text-primary-dark w-6")
  })

  test("navigates to the correct route when clicking on the 'See all product' link", () => {
    render(<SpecialOffer />)

    const seeAllProductLink = screen.getByRole("link")

    userEvent.click(seeAllProductLink)

    expect(seeAllProductLink).toHaveAttribute("href", `${PRODUCTS}?filter=special-offer`)
  })
})
