import Stack from "@atom/Stack/page"
import { render, screen } from "@testing-library/react"

it("renders stack", () => {
  const children = <div>stack</div>
  render(<Stack>{children}</Stack>)

  const stack = screen.getByRole("div")
  expect(stack).toBeInTheDocument()
})
