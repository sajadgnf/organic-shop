"use client"
import { RootState } from "@src/store"
import Checkbox from "@module/checkbox"
import { useSearchParams } from "next/navigation"
import React, { useEffect, useState } from "react"
import { CategoryType } from "@src/common/fake-data"
import { useDispatch, useSelector } from "react-redux"
import { filterCategory } from "@src/store/slice/productSlice"

const FilterCategory = ({ item }: { item: CategoryType }) => {
  const dispatch = useDispatch()
  const searchParams = useSearchParams()
  const category = searchParams.get("category")
  const [checked, setChecked] = useState(false)
  const { clearFilters } = useSelector((state: RootState) => state.productSlice)

  const checkHandler = () => {
    setChecked(!checked)
  }

  useEffect(() => {
    category === item.title && setChecked(true)
  }, [category])

  useEffect(() => {
    dispatch(filterCategory({ label: item.title, checked }))
  }, [checked])

  useEffect(() => {
    clearFilters && setChecked(false)
  }, [clearFilters, category])

  return <Checkbox checked={checked} onChange={checkHandler} label={item.title} />
}

export default FilterCategory
