import React from "react"
import { render } from "@testing-library/react"
import ProductCard from "./ProductCard"

test("renders product card with correct content", () => {
  const imgSrc = "test-image.jpg"
  const title = "Test Product"
  const description = "This is a test product"
  const discount = 20
  const price = 50

  const { getByText, getByAltText } = render(
    <ProductCard img={imgSrc} title={title} description={description} discount={discount} price={price} />
  )

  const titleElement = getByText(title)
  const descriptionElement = getByText(description)
  const discountElement = getByText(`${Math.floor((discount * price) / 100)}%`)
  const priceElement = getByText(`$${discount ? discount : price}`)
  const addToCartButton = getByText("Add To Cart")
  const imageElement = getByAltText(description)

  expect(titleElement).toBeInTheDocument()
  expect(descriptionElement).toBeInTheDocument()
  expect(discountElement).toBeInTheDocument()
  expect(priceElement).toBeInTheDocument()
  expect(addToCartButton).toBeInTheDocument()
  expect(imageElement).toHaveAttribute("src", imgSrc)
})

