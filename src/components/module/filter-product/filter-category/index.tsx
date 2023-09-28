"use client"
import Checkbox from "@module/checkbox"
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useState } from "react"
import { CategoryType } from "@src/common/fake-data"
import { filterCategory } from "@src/store/slice/productSlice"
import { RootState } from "@src/store"

const FilterCategory = ({ item }: { item: CategoryType }) => {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(false)
  const { clearFilters } = useSelector((state: RootState) => state.productSlice)

  const checkHandler = () => {
    setChecked(!checked)
  }

  useEffect(() => {
    dispatch(filterCategory({ label: item.title, checked }))
  }, [checked])

  useEffect(() => {
    setChecked(false)
  }, [clearFilters])

  return <Checkbox checked={checked} onChange={checkHandler} label={item.title} />
}

export default FilterCategory
