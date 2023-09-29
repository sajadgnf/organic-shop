"use client"
import Stack from "@atom/stack"
import Button from "@atom/button"
import Typography from "@atom/typography"
import ShareReview from "@module/share-review"
import CommentCard from "@module/comment-card"
import React, { Fragment, useState } from "react"
import { ProductType } from "@src/common/fake-data"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid"

const Comments = ({ data }: { data: ProductType["comments"] }) => {
  const [num, setNum] = useState(4)

  return (
    <Stack className=" review-container flex-col md:container md:items-start space-y-10 w-full">
      <Stack className="flex-col sm:flex-row space-y-2 sm:space-y-0 justify-between px-2 md:px-0 w-full">
        <Typography variant="h5">Customer reviews</Typography>

        <ShareReview />
      </Stack>

      <Stack className="w-full flex-col bg-white items-start md:rounded-xl p-5">
        <Stack className="flex-col w-full pb-5 space-y-4">
          {data.slice(0, num).map((item, i) => (
            <Fragment key={Math.random() * 1000}>
              <CommentCard data={item} />
              <hr className={`${i !== num - 1 ? "w-full" : "w-0"}`} />
            </Fragment>
          ))}
        </Stack>
        {num === 4 ? (
          <Button onClick={() => setNum(data.length)} className="flex justify-between items-center text-blue-400 ">
            show more <ChevronDownIcon width={22} />
          </Button>
        ) : (
          <Button onClick={() => setNum(4)} className="flex justify-between items-center text-blue-400 ">
            show less <ChevronUpIcon width={22} />
          </Button>
        )}
      </Stack>
    </Stack>
  )
}

export default Comments
