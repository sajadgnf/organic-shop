import React from "react"
import { STORE } from "route"
import userEvent from "@testing-library/user-event"
import CategoriesList from "@organism/categories/list"
import { render, screen } from "@testing-library/react"

// // Mock the next/link component
// jest.mock("next/link", () => {
//   return ({ children, href }) => {
//     return <a href={href}>{children}</a>
//   }
// })

describe("CategoriesList", () => {
  test("renders category titles and images", () => {
    // Render the component
    render(<CategoriesList />)

    // Check if category titles are rendered
    const categoryTitles = screen.getAllByTestId("category-title")
    expect(categoryTitles).toHaveLength(4)
    expect(categoryTitles[0]).toHaveTextContent("VEGETABLE")
    expect(categoryTitles[1]).toHaveTextContent("FRUIT")
    expect(categoryTitles[2]).toHaveTextContent("JUICE")
    expect(categoryTitles[3]).toHaveTextContent("SALAD")

    // Check if category images are rendered
    const categoryImages = screen.getAllByRole("img")
    expect(categoryImages).toHaveLength(4)
    expect(categoryImages[0]).toHaveAttribute("alt", "vegetable")
    expect(categoryImages[1]).toHaveAttribute("alt", "fruit")
    expect(categoryImages[2]).toHaveAttribute("alt", "juice")
    expect(categoryImages[3]).toHaveAttribute("alt", "salad")
  })

  test("navigates to correct product category page on click", () => {
    // Mock the next/link component to check the href prop
    jest.spyOn(window, "open").mockImplementation(() => {})

    // Render the component
    render(<CategoriesList />)

    // Click on a category link
    const categoryLink = screen.getAllByRole("link")[0]
    userEvent.click(categoryLink)

    // Check if the correct href is used
    expect(categoryLink).toHaveAttribute("href", `/${STORE}?category=vegetable`)
  })
})
