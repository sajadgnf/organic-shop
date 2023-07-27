import React from "react"
import Rate from "@atom/rate"
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

describe("Rate component", () => {
  it("should display the correct number of stars", () => {
    const { container } = render(<Rate value={3} onChange={() => {}} />)
    const stars = container.querySelectorAll(".text-secondary-dark")

    expect(stars).toHaveLength(3)
  })

  it("should change the rate on click", () => {
    let rateValue = 2
    const handleChange = (newValue) => {
      rateValue = newValue
    }

    const { container } = render(<Rate value={rateValue} onChange={handleChange} />)
    const thirdStar = container.querySelectorAll(".w-6")[2]

    fireEvent.click(thirdStar)

    expect(rateValue).toBe(3)
  })

  it("should not change the rate when readonly", () => {
    let rateValue = 4
    const handleChange = (newValue) => {
      rateValue = newValue
    }

    const { container } = render(<Rate value={rateValue} onChange={handleChange} readonly />)
    const firstStar = container.querySelectorAll(".w-6")[0]

    // Attempt to click on the first star (should not change the rateValue)
    fireEvent.click(firstStar)

    // The rateValue should remain 4
    expect(rateValue).toBe(4)
  })
})
