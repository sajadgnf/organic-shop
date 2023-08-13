import React from "react"
import Head from "@module/header-links"
import { render } from "@testing-library/react"
import { useSelectedLayoutSegment } from "next/navigation"

jest.mock("next/navigation", () => ({
  useSelectedLayoutSegment: jest.fn(),
}))

describe("Head component", () => {
  beforeEach(() => {
    useSelectedLayoutSegment.mockReturnValue(null)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test("renders the logo correctly", () => {
    const { getByAltText } = render(<Head />)

    const logo = getByAltText("organic shop logo")
    expect(logo).toBeInTheDocument()
    expect(logo.getAttribute("src")).toBe("./images/logo.svg")
    expect(logo.getAttribute("width")).toBe("120")
    expect(logo.getAttribute("height")).toBe("150")
  })

  test("renders the navigation links correctly", () => {
    useSelectedLayoutSegment.mockReturnValue(null)
    const { getByText } = render(<Head />)

    const homeLink = getByText("Home")
    expect(homeLink).toBeInTheDocument()
    expect(homeLink.getAttribute("href")).toBe("/")

    const shopLink = getByText("Shop")
    expect(shopLink).toBeInTheDocument()
    expect(shopLink.getAttribute("href")).toBe("store")

    const contactLink = getByText("Contact")
    expect(contactLink).toBeInTheDocument()
    expect(contactLink.getAttribute("href")).toBe("contact")

    const blogLink = getByText("Blog")
    expect(blogLink).toBeInTheDocument()
    expect(blogLink.getAttribute("href")).toBe("blog")
  })

  test("renders the sign-up button correctly", () => {
    const { getByText } = render(<Head />)

    const signUpButton = getByText("Sign Up")
    expect(signUpButton).toBeInTheDocument()
  })

  test("renders the shopping bag button correctly", () => {
    const { getByTestId } = render(<Head />)

    const shoppingBagButton = getByTestId("shopping-button")
    expect(shoppingBagButton).toBeInTheDocument()

    // Assert that the ShoppingBagIcon is rendered correctly within the button
    const shoppingIcon = shoppingBagButton.querySelector("svg")
    expect(shoppingIcon).toBeInTheDocument()
    expect(shoppingIcon).toHaveClass("h-8")
    expect(shoppingIcon).toHaveClass("w-8")
  })

  test("applies selected layout segment styling to the corresponding link", () => {
    useSelectedLayoutSegment.mockReturnValue("store")
    const { getByText } = render(<Head />)

    const shopLink = getByText("Shop")
    expect(shopLink).toHaveClass("after:w-[50%]")

    const homeLink = getByText("Home")
    expect(homeLink).not.toHaveClass("after:w-[50%]")

    const contactLink = getByText("Contact")
    expect(contactLink).not.toHaveClass("after:w-[50%]")

    const blogLink = getByText("Blog")
    expect(blogLink).not.toHaveClass("after:w-[50%]")
  })
})
