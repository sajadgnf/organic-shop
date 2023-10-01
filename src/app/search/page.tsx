"use client"
import Input from "@atom/input"
import Stack from "@atom/stack"
import { RootState } from "@src/store"
import Typography from "@atom/typography"
import { useRouter } from "next/navigation"
import SearchCard from "@module/search-card"
import { PRODUCTDETAILS, STORE } from "routes"
import React, { ChangeEvent, Fragment, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filterBySearch, searchProduct } from "@src/store/slice/productSlice"

const Search = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [search, setSearch] = useState("")
  const { searchedProducts } = useSelector((state: RootState) => state.productSlice)

  const changeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearch(event.target.value)
    dispatch(searchProduct(event.target.value))
    console.log(!!search)
  }
  return (
    <Stack className="relative mt-10 flex-col">
      <Input
        type="search"
        name="search"
        value={search}
        autoComplete="off"
        placeholder="search..."
        className="fix top-0"
        containerClassName="rounded-none"
        onChange={(e) => changeHandler(e)}
      />

      <Stack className={` w-full p-3 space-y-2 items-start justify-start h-screen overflow-auto flex-col `}>
        <Typography
          onClick={() => {
            dispatch(filterBySearch(search))
            router.push(STORE)
          }}
          className={`${!!search ? "cursor-pointer" : "pointer-events-none"} w-full`}
          variant="h6"
        >
          Search for: {search}
        </Typography>
        <hr className="w-full" />
        {searchedProducts.map((item, i) => (
          <Fragment key={item.title + item.img + i}>
            <SearchCard href={PRODUCTDETAILS(item.id)} item={item} />
            <hr className="w-full" />
          </Fragment>
        ))}
      </Stack>
    </Stack>
  )
}

export default Search
