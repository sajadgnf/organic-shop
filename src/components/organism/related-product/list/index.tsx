import React from "react"
import Stack from "@atom/stack"
import Card from "@module/card"
import { PRODUCTDETAILS } from "routes"
import FAKE_DATA from "@src/common/fake-data"

const RelatedProductList = () => {
  return (
    <Stack className="w-full overflow-auto space-x-5 justify-start px-1 pb-2 hide-scrollbar">
      {FAKE_DATA.slice(4, 10).map((data, i) => (
        <Card key={data.id} data={data} href={PRODUCTDETAILS(data.id)} />
      ))}
    </Stack>
  )
}

export default RelatedProductList
