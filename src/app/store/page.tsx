import React from "react"
import Stack from "@atom/stack"
import Card from "@module/card"
import FAKE_DATA from "@src/common/fake-data"

const Store = () => {
  return (
    <Stack className="container flex-wrap mt-72 gap-4 ">
      {FAKE_DATA.map((data, i) => (
        <Card data={data} key={data.title + data.img + i} />
      ))}
    </Stack>
  )
}

export default Store
