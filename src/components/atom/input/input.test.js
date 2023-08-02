import React from "react"
import Input from "@atom/input"
import { fireEvent, render, screen } from "@testing-library/react"

describe("Input component", () => {
  it("renders label correctly", () => {
    const text = "Test Label"
    render(<Input label={text} />)
    const label = screen.getByText(text)
    expect(label).toBeInTheDocument()
  })

  it("renders placeholder correctly", () => {
    const text = "Test Placeholder"
    render(<Input placeholder={text} />)
    const inputElement = screen.getByPlaceholderText(text)
    expect(inputElement).toBeInTheDocument()
  })

  it("renders startIcon correctly", () => {
    const startIcon = <span>Start Icon</span>
    render(<Input startIcon={startIcon} />)
    const parentElement = screen.getByRole("textbox").parentNode
    expect(parentElement).toContainElement(screen.getByText("Start Icon"))
  })

  it("renders endIcon correctly", () => {
    const endIcon = <span>End Icon</span>
    render(<Input endIcon={endIcon} />)
    const parentElement = screen.getByRole("textbox").parentNode
    expect(parentElement).toContainElement(screen.getByText("End Icon"))
  })

  it("renders value correctly", () => {
    const value = "Test Value"
    const handleChange = jest.fn()
    const input = render(<Input value={value} onChange={handleChange} />)
    expect(input.getByRole("textbox").value).toBe(value)
  })
})
