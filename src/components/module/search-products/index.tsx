import Input from "@atom/input"
import Stack from "@atom/stack"
import Dialog from "@module/dialog"
import { RootState } from "@src/store"
import { PRODUCTDETAILS } from "routes"
import Typography from "@atom/typography"
import SearchCard from "@module/search-card"
import React, { ChangeEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { filterBySearch, searchProduct } from "@src/store/slice/productSlice"

const SearchProduct = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")
  const { searchedProducts } = useSelector((state: RootState) => state.productSlice)

  const changeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearch(event.target.value)
    dispatch(searchProduct(event.target.value))
  }

  return (
    <Stack className="z-20 w-full">
      <Dialog id="search-container" setOpen={setOpen}>
        <Input
          type="search"
          name="search"
          value={search}
          autoComplete="off"
          placeholder="search..."
          className="xmd:!w-[50%]"
          onFocus={() => setOpen(true)}
          onChange={(e) => changeHandler(e)}
          startIcon={<MagnifyingGlassIcon width={20} className="ml-2 hidden md:block" />}
        />

        <Stack
          className={`absolute top-10 bottom-0 left-0 right-0 w-full xmd:w-[50%] h-screen md:h-fit max-h-screen xmd:max-h-84 p-3 space-y-2 items-start justify-start overflow-auto flex-col border border-secondary-dark border-t-0 rounded-lg rounded-t-none bg-white ${
            open ? "flex" : "hidden"
          }`}
        >
          <Typography
            onClick={() => {
              search && dispatch(filterBySearch(search))
              setOpen(false)
            }}
            className="cursor-pointer"
            variant="h6"
          >
            Search for: {search}
          </Typography>
          <hr className="w-full" />
          {searchedProducts.map((item, i) => (
            <SearchCard href={PRODUCTDETAILS(item.id)} item={item} key={item.title + item.img + i} />
          ))}
        </Stack>
      </Dialog>
    </Stack>
  )
}

export default SearchProduct
