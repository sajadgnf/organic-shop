import React from "react"
import Rate from "@atom/rate"
import { render, fireEvent, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

describe("Rate component", () => {
  it("should display the correct number of stars", () => {
    const { container } = render(<Rate value={3} onChange={() => {}} />)
    const stars = container.querySelectorAll("[data-testid='starIcon']")

    expect(stars).toHaveLength(3)
  })

  it("should change the rate on click", () => {
    let rateValue = 2
    const handleChange = (newValue) => {
      rateValue = newValue
    }

    const { container } = render(<Rate value={rateValue} onChange={handleChange} />)
    const thirdStar = container.querySelectorAll("[data-testid='starIcon']")[2]

    fireEvent.click(thirdStar)

    expect(rateValue).toBe(3)
  })

  it("should not change the rate when readonly", async () => {
    let rateValue = 3
    const handleChange = (newValue) => {
      rateValue = newValue
    }

    const { container } = render(<Rate value={rateValue} onChange={handleChange} readonly />)
    await waitFor(() => {
      const icon = container.querySelector(".w-4") // Updated class name here
      expect(icon).toHaveClass("pointer-events-none")
    })
  })
})
