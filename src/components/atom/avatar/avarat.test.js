import React from "react"
import Avatar from "@atom/avatar"
import { render } from "@testing-library/react"

describe("Avatar component", () => {
  it("renders without crashing when no src is provided", () => {
    render(<Avatar />)
  })

  it("renders an image when src is provided", () => {
    const src = "/images/fruit.jpg"
    const { container } = render(<Avatar src={src} />)
    const imageElement = container.querySelector("img")
    expect(imageElement).toBeInTheDocument()
  })

  it("renders a default icon when no src is provided", () => {
    const { container } = render(<Avatar />)
    const iconElement = container.querySelector("svg")
    expect(iconElement).toBeInTheDocument()
  })
})
