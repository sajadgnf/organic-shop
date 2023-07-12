import React from "react"
import Card from "@module/Card"
import { render } from "@testing-library/react"

describe("Card component", () => {
  const defaultProps = {
    img: "/images/test-juice.svg",
    title: "Card Title",
    description: "Card Description",
    discount: "10",
    price: "50",
  }

  test("renders the card with provided props", () => {
    const { getByAltText, getByText } = render(<Card {...defaultProps} />)

    const imageElement = getByAltText(defaultProps.description)
    const titleElement = getByText(defaultProps.title)
    const descriptionElement = getByText(defaultProps.description)
    const discountElement = getByText("5%")
    const priceElement = getByText("$50")
    const addToCartButton = getByText("Add To Cart")

    expect(imageElement).toBeInTheDocument()
    expect(titleElement).toBeInTheDocument()
    expect(descriptionElement).toBeInTheDocument()
    expect(discountElement).toBeInTheDocument()
    expect(priceElement).toBeInTheDocument()
    expect(addToCartButton).toBeInTheDocument()
  })

  test("renders the card without discount", () => {
    const { queryByText } = render(<Card {...defaultProps} discount={undefined} />)

    const discountElement = queryByText("5%")
    const priceElement = queryByText("$50")

    expect(discountElement).toBeNull()
    expect(priceElement).toBeInTheDocument()
  })
})
