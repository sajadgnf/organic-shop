"use client"
import Stack from "@atom/stack"
import useA2hs from "@src/hooks/a2hs"
import Typography from "@atom/typography"
import { useState, useEffect } from "react"
import { XCircleIcon } from "@heroicons/react/24/solid"

const A2hsPopover = () => {
  const [show, setShow] = useState(false)
  const { isStandalone, a2hs } = useA2hs()

  useEffect(() => {
    const isOnceShown = localStorage.getItem("a2hsWasShown") === "true"
    if (isStandalone || isOnceShown) return

    setTimeout(() => {
      setShow(true)
    }, 3000)
  }, [isStandalone])

  const addToHomeScreen = () => {
    a2hs()
    setShow(false)
  }

  const handleClose = () => {
    localStorage.setItem("a2hsWasShown", "true")
    setShow(false)
  }

  if (isStandalone) return null

  return (
    <Stack
      className={`fixed left-0 right-0 z-[60] h-16 justify-between px-2 bg-white transition-all duration-1000 ${
        show ? "bottom-0" : "bottom-[-1000px]"
      } `}
    >
      <Typography onClick={addToHomeScreen} className="cursor-pointer text-primary-dark" variant="h6">Install Organic Shop</Typography>

      <XCircleIcon width={25} onClick={handleClose} className="cursor-pointer text-primary-dark"/>
    </Stack>
  )
}

export default A2hsPopover
