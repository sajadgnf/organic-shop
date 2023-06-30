import Button from "@atom/button/page"
import { render, screen } from "@testing-library/react"

describe("button component", () => {
  test("renders button correctly by text variant", () => {
    const text = "submit"
    render(<Button variant="text">{text}</Button>)

    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(text)
    expect(button).toHaveClass("hover:bg-primary-50 active:bg-primary-100")
  })

  test("renders button correctly by text variant", () => {
    const text = "submit"
    render(<Button variant="circle">{text}</Button>)

    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(text)
    expect(button).toHaveClass("!p-0 w-4 h-4 rounded-full bg-gray-300")
  })

  test("renders button correctly by outlined variant", () => {
    const text = "submit"
    render(<Button variant="outlined">{text}</Button>)

    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(text)
    expect(button).toHaveClass("border hover:bg-primary-50 active:bg-primary-100")
  })

  test("renders button correctly by contained variant", () => {
    const text = "submit"
    render(<Button variant="contained">{text}</Button>)

    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(text)
    expect(button).toHaveClass("bg-primary-100 hover:bg-primary-200 active:bg-primary-300")
  })

  test("renders button correctly by small size", () => {
    const text = "submit"
    render(<Button size="small">{text}</Button>)

    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(text)
    expect(button).toHaveClass("min-w-8 h-12 px-3")
  })

  test("renders button correctly by medium size", () => {
    const text = "submit"
    render(<Button size="medium">{text}</Button>)

    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(text)
    expect(button).toHaveClass("min-w-32 h-12 text-lg px-10")
  })

  test("renders button correctly by large size", () => {
    const text = "submit"
    render(<Button size="large">{text}</Button>)

    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(text)
    expect(button).toHaveClass("min-w-72 h-20 text-4xl px-16")
  })

  test("renders button correctly by small size and contained variant", () => {
    const text = "submit"
    render(
      <Button variant="contained" size="large">
        {text}
      </Button>
    )

    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(text)
    expect(button).toHaveClass("min-w-72 h-20 text-4xl px-16 bg-primary-100 hover:bg-primary-200 active:bg-primary-300")
  })
})
