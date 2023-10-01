import React from "react"
import Stack from "@atom/stack"
import Card from "@module/card"
import { PRODUCTDETAILS } from "routes"
import FAKE_DATA from "@src/common/fake-data"

const SpecialOfferList = () => {
  return (
    <Stack className="w-full overflow-auto space-x-5 justify-start px-1 pb-1 hide-scrollbar">
      {FAKE_DATA.slice(6, 16).map((data, i) => (
        <Card key={data.id} data={data} href={PRODUCTDETAILS(data.id)} />
      ))}
    </Stack>
  )
}

export default SpecialOfferList
