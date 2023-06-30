import React from "react"
import Typography from "@atom/typography/page"
import { render } from "@testing-library/react"

test("renders the Typography component correctly", () => {
  const text = "Hello, World!"

  // Render the component with variant and component props
  const { getByText } = render(
    <Typography variant="h1" component="h2" className="my-typography">
      {text}
    </Typography>
  )

  // Assert that the Typography component is rendered correctly
  const typographyElement = getByText(text)
  expect(typographyElement).toBeInTheDocument()
  expect(typographyElement.tagName).toBe("H2")
  expect(typographyElement).toHaveClass("my-typography")
  expect(typographyElement).toHaveClass("text-6xl font-inika")
})
