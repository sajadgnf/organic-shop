import Link from "next/link"
import Stack from "@atom/stack"
import { useState } from "react"
import Typography from "@atom/typography"
import { CART, CONTACT, SIGNIN } from "routes"
import { Bars3Icon, PhoneIcon, ShoppingBagIcon, UserIcon } from "@heroicons/react/24/solid"

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <Stack className="relative">
      <Stack className={open ? "flex bg-white rounded-lg p-2 absolute top-5 left-[-30px] flex-col space-y-4" : "hidden"}>
        <Link className={`header-link flex-row flex justify-between `} href={CONTACT}>
          <PhoneIcon width={18} />
          <Typography variant="h6">Contact</Typography>
        </Link>
        <Link className={`header-link flex-row flex justify-between `} href={CART}>
          <ShoppingBagIcon width={18} />
          <Typography variant="h6">Cart</Typography>
        </Link>
        <Link className={`header-link flex-row flex justify-between `} href={SIGNIN}>
          <UserIcon width={18} />
          <Typography variant="h6">Sign in</Typography>
        </Link>
      </Stack>
      <Bars3Icon width={22} className="md:hidden mt-1" onClick={() => setOpen(!open)} />
    </Stack>
  )
}

export default HamburgerMenu
