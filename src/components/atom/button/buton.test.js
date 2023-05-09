import Button from "@atom/button/page"
import { render, screen } from "@testing-library/react"

it("renders button with text", () => {
  const text = "submit"
  render(<Button>{text}</Button>)

  const button = screen.getByRole("button")
  expect(button).toBeInTheDocument()
  expect(button).toHaveTextContent(text)
})
