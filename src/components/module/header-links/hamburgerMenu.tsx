import Link from "next/link"
import Stack from "@atom/stack"
import Typography from "@atom/typography"
import { CART, CONTACT, SIGNIN } from "routes"
import { ReactElement, ReactNode, useEffect, useRef, useState } from "react"
import { Bars3Icon, PhoneIcon, ShoppingBagIcon, UserIcon } from "@heroicons/react/24/solid"

interface ContainerType {
  href: string
  children: ReactElement | ReactNode
}

const Container = ({ href, children }: ContainerType) => {
  return (
    <Link className={`header-link flex-row flex space-x-1 w-full`} href={href}>
      {children}
    </Link>
  )
}

const HamburgerMenu = ({ itemsCounter }: { itemsCounter: number }) => {
  const [open, setOpen] = useState(false)

  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    menuRef.current = document.getElementById("menu-container") as HTMLDivElement

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
    <Stack id="menu-container">
      <Stack className={open ? "flex bg-white rounded-lg p-2 absolute top-5 left-[-30px] flex-col space-y-4" : "hidden"}>
        <Container href={CONTACT}>
          <PhoneIcon width={18} />
          <Typography variant="h6">Contact</Typography>
        </Container>

        <Container href={CART}>
          <ShoppingBagIcon width={18} />
          <Typography variant="h6">Cart</Typography>
          {!!itemsCounter && (
            <Stack className="bg-primary-main  rounded-full w-5 h-5 text-center">
              <Typography>{itemsCounter}</Typography>
            </Stack>
          )}
        </Container>

        <Container href={SIGNIN}>
          <UserIcon width={18} />
          <Typography variant="h6">Sign in</Typography>
        </Container>
      </Stack>
      <Bars3Icon width={22} className="md:hidden mt-1" onClick={() => setOpen(!open)} />
    </Stack>
  )
}

export default HamburgerMenu
