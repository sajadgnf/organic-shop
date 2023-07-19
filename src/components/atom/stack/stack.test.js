import Stack from "@atom/Stack"
import { fireEvent, render } from "@testing-library/react"

it("renders stack", () => {
  const mockOnClick = jest.fn()
  const children = <p>stack</p>
  const { container, getByRole } = render(
    <Stack variant="div" className="my-stack" onClick={mockOnClick}>
      {children}
    </Stack>
  )

  // Assert that the Stack component is rendered correctly
  const stackComponent = container.firstChild
  expect(stackComponent).toBeInTheDocument()
  expect(stackComponent.tagName).toBe("DIV")
  expect(stackComponent).toHaveClass("flex")
  expect(stackComponent).toHaveClass("justify-center")
  expect(stackComponent).toHaveClass("transform")
  expect(stackComponent).toHaveClass("my-stack")
  expect(stackComponent).toHaveAttribute("role", "div")

  // Assert that the Stack content is rendered correctly
  const stackContent = getByRole("div")
  expect(stackContent).toBeInTheDocument()

  // Simulate a click event on the Stack component
  fireEvent.click(stackComponent)
  expect(mockOnClick).toHaveBeenCalled()
})
