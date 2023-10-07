"use client"
import Stack from "@atom/stack"
import { ReactElement, ReactNode, useEffect, useRef } from "react"

interface propsType {
  id: string
  setOpen: (t: boolean) => void
  children: ReactElement | ReactNode
}

const Dialog = ({ setOpen, id, children }: propsType) => {
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    menuRef.current = document.getElementById(id) as HTMLDivElement

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  return (
    <Stack className="w-full justify-start" id={id}>
      {children}
    </Stack>
  )
}

export default Dialog
