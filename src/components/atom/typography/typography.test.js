import Typography from "@atom/typography/page"
import { render } from "react-dom"

it("renders typography", () => {
  const text = "some text"
  render(<Typography>{text}</Typography>)

  const typography = screen.getById("typography")
  expect(typography).toBeInTheDocument()
  expect(typography).toHaveTextContent(text)
})
