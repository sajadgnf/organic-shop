import Slider from "@hooks/slider"
import { render, fireEvent, screen, act } from "@testing-library/react"

describe("Slider component", () => {
  const slides = ["slide1.jpg", "slide2.jpg", "slide3.jpg"]
  const visible = "flex justify-center transform transition-all ease-out h-[620px] max-w-[1800px] visible w-full items-center"
  const inVisible = "flex justify-center transform transition-all ease-out h-[620px] max-w-[1800px] invisible w-0 items-center"

  test("renders slides correctly", () => {
    render(<Slider slides={slides} />)

    // Assert that all slides are rendered
    slides.forEach((slide) => {
      const slideElement = screen.getByTestId(`slide-${slide}`)
      expect(slideElement).toBeInTheDocument()
    })
  })

  test("changes slide after every 5 seconds", () => {
    jest.useFakeTimers() // Mock timers

    render(<Slider slides={slides} />)

    // Assert initial slide
    const initialSlide = screen.getByTestId(`slide-${slides[0]}`)
    expect(initialSlide).toHaveClass(visible)

    // Fast-forward time by 5 seconds
    act(() => {
      jest.advanceTimersByTime(5000)
    })

    // Assert slide change
    const nextSlide = screen.getByTestId(`slide-${slides[1]}`)
    expect(nextSlide).toHaveClass(visible)
    expect(initialSlide).toHaveClass(inVisible)

    // Fast-forward time by 5 seconds
    act(() => {
      jest.advanceTimersByTime(5000)
    })

    // Assert slide change again
    const finalSlide = screen.getByTestId(`slide-${slides[2]}`)
    expect(finalSlide).toHaveClass(visible)
    expect(nextSlide).toHaveClass(inVisible)
   
    // Fast-forward time by 5 seconds
    act(() => {
      jest.advanceTimersByTime(5000)
    })

    // Assert initial slide again
    expect(initialSlide).toHaveClass(visible)
    expect(finalSlide).toHaveClass(inVisible)

    jest.useRealTimers() // Restore real timers
  })

  test("changes slide when arrow is clicked", () => {
    render(<Slider slides={slides} />)

    // Find arrow component 
    const arrow = screen.getByTestId("arrow-next")

    // Click the arrow
    fireEvent.click(arrow)

    // Assert slide change
    const nextSlide = screen.getByTestId(`slide-${slides[1]}`)
    expect(nextSlide).toHaveClass(visible)

    // Find previous arrow component
    const previousArrow = screen.getByTestId("arrow-previous")

    // Click the previous arrow
    fireEvent.click(previousArrow)

    // Assert slide change back to initial slide
    const initialSlide = screen.getByTestId(`slide-${slides[0]}`)
    expect(initialSlide).toHaveClass(visible)
  })

  test("changes slide when dot is clicked", () => {
    render(<Slider slides={slides} />)

    // Find dot component 
    const dot = screen.getByTestId("dot-1")

    // Click the dot
    fireEvent.click(dot)

    // Assert slide change
    const nextSlide = screen.getByTestId(`slide-${slides[1]}`)
    expect(nextSlide).toHaveClass(visible)
  })
})
