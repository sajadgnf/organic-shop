import Stack from "@atom/stack"
import Input from "@atom/input"
import { RootState } from "@src/store"
import Typography from "@atom/typography"
import { useRouter } from "next/navigation"
import SearchCard from "@module/search-card"
import { PRODUCTDETAILS, STORE } from "routes"
import { useDispatch, useSelector } from "react-redux"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import React, { ChangeEvent, useEffect, useRef, useState } from "react"
import { filterBySearch, searchProduct } from "@src/store/slice/productSlice"

interface PropsType {
  open: boolean
  setOpen: (t: boolean) => void
}

const SearchProductList = ({ open, setOpen }: PropsType) => {
  const searchRef = useRef<HTMLInputElement | null>(null)
  const router = useRouter()
  const [search, setSearch] = useState("")
  const { searchedProducts } = useSelector((state: RootState) => state.productSlice)
  const dispatch = useDispatch()

  const changeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    open && searchRef.current && searchRef.current.focus()
  }, [open])

  useEffect(() => {
    dispatch(searchProduct(search))

    return () => {
      dispatch(searchProduct(""))
    }
  }, [search])

  return (
    <Stack
      className={`absolute top-0 md:top-10 md:h-fit xmd:max-h-84 bottom-0 left-0 right-0 w-full xmd:w-[50%] h-screen p-3 space-y-2 items-start justify-start overflow-auto flex-col border border-secondary-dark border-t-0 rounded-lg rounded-t-none bg-white ${
        open ? "flex" : `hidden`
      }`}
    >
      <Input
        type="search"
        name="search"
        ref={searchRef}
        value={search}
        autoComplete="off"
        placeholder="search..."
        onFocus={() => setOpen(true)}
        onChange={(e) => changeHandler(e)}
        startIcon={<ArrowLeftIcon width={20} onClick={() => setOpen(false)} className="ml-2" />}
      />
      <Typography
        onClick={() => {
          dispatch(filterBySearch(search))
          setOpen(false)
          router.push(STORE)
        }}
        className={`${!!search ? "cursor-pointer" : "pointer-events-none"} w-full`}
        variant="h6"
      >
        Search for: {search}
      </Typography>
      <hr className="w-full" />
      {searchedProducts.map((item, i) => (
        <SearchCard href={PRODUCTDETAILS(item.id)} setOpen={setOpen} item={item} key={item.title + item.img + i} />
      ))}
    </Stack>
  )
}

export default SearchProductList
