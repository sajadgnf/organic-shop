import React from "react"
import Stack from "@atom/stack/page"
import CategoriesList from "./list/page"
import Typography from "@atom/typography/page"

const Categories = () => {
  return (
    <Stack className="flex-col items-start space-y-10 w-full">
      <Typography variant="h5">Categories</Typography>
      <CategoriesList />
    </Stack>
  )
}

export default Categories
