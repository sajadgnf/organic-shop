"use client"
import Link from "next/link"
import Stack from "@atom/stack"
import React, { useRef } from "react"
import { PRODUCTDETAILS } from "routes"
import HorizontalList from "@module/horizontal-list"
import { FAKE_COMMENT } from "@src/common/fake-data"
import HomeCommentCard from "@module/home-comment-card"

const HomeComments = () => {
  const testimonialListRef = useRef(null)
  return (
    <HorizontalList ref={testimonialListRef} title="Testimonials">
      <Stack ref={testimonialListRef} className="flex-row w-full space-x-4 py-4 justify-start overflow-auto">
        {FAKE_COMMENT.map((item) => (
          <Link key={item.productId + item.name} href={PRODUCTDETAILS(item.productId)}>
            <HomeCommentCard data={item} key={item.name + item.rate} />
          </Link>
        ))}
      </Stack>
    </HorizontalList>
  )
}

export default HomeComments
