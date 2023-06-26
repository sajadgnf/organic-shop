import Slider from "@hooks/slider/page"
import { render, screen } from "@testing-library/react"

it("renders slider", () => {
  const slides = ["/images/slide1.svg", "/images/slide2.svg", "/images/slide3.svg"]
  render(<Slider slides={slides} />)

  const stack = screen.getByRole("div")
  expect(stack).toBeInTheDocument()
})
