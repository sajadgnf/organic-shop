import Typography from "@atom/typography/page"
import { render, screen } from "@testing-library/react"

it("renders typography", () => {
  const text = "some text"
  render(<Typography variant="h3">{text}</Typography>)

  const typography = screen.getByTestId("typography")
  expect(typography).toBeInTheDocument()
  expect(typography).toHaveTextContent(text)
})
