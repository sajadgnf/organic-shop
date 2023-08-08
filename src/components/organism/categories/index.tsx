import React from "react"
import Stack from "@atom/stack"
import Typography from "@atom/typography"
import CategoriesList from "@organism/categories/list"

const Categories = () => {
  return (
    <Stack className="flex-col items-start space-y-2 sm:space-y-10 w-full">
      <Typography variant="h5">Categories</Typography>
      <CategoriesList />
    </Stack>
  )
}

export default Categories
