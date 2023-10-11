"use client"
import Stack from "@atom/stack"
import Card from "@module/card"
import React, { useRef } from "react"
import { PRODUCTDETAILS } from "routes"
import FAKE_DATA from "@src/common/fake-data"
import HorizontalList from "@module/horizontal-list"

const SpecialOfferList = () => {
  const specialListRef = useRef(null)

  return (
    <HorizontalList ref={specialListRef}>
      <Stack ref={specialListRef} className="w-full overflow-auto space-x-5 justify-start px-1 pb-1 hide-scrollbar" key='specialList'>
        {FAKE_DATA.slice(6, 16).map((data, i) => (
          <Card key={data.id} data={data} href={PRODUCTDETAILS(data.id)} />
        ))}
      </Stack>
    </HorizontalList>
  )
}

export default SpecialOfferList
