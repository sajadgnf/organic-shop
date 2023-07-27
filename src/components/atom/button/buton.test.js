import Button from "@atom/button"
import { fireEvent, render, screen } from "@testing-library/react"

describe("button component", () => {
  const mockOnClick = jest.fn()

  test("renders button correctly by text variant", () => {
    const text = "submit"
    render(
      <Button onClick={mockOnClick} variant="text" className="classes">
        {text}
      </Button>
    )

    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(text)
    expect(button).toHaveClass("classes")
    expect(button).toHaveClass("hover:bg-primary-light ")

    // Simulate a click event on the Stack component
    fireEvent.click(button)
    expect(mockOnClick).toHaveBeenCalled()
  })

  test("renders button correctly by circle variant", () => {
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
    expect(button).toHaveClass("border hover:bg-primary-light ")
  })

  test("renders button correctly by contained variant", () => {
    const text = "submit"
    render(<Button variant="contained">{text}</Button>)

    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(text)
    expect(button).toHaveClass("bg-primary-main hover:bg-primary-dark")
  })

  test("renders button correctly by small size", () => {
    const text = "submit"
    render(<Button size="small">{text}</Button>)

    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(text)
    expect(button).toHaveClass("min-w-8 h-10 px-3")
  })

  test("renders button correctly by medium size", () => {
    const text = "submit"
    render(<Button size="medium">{text}</Button>)

    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(text)
    expect(button).toHaveClass("min-w-32 h-10 text-lg px-5")
  })

  test("renders button correctly by large size", () => {
    const text = "submit"
    render(<Button size="large">{text}</Button>)

    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(text)
    expect(button).toHaveClass("min-w-42 h-14 text-xl px-8")
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
    expect(button).toHaveClass("min-w-42 h-14 text-xl px-8 ")
  })
})
