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
    <Stack className=" review-container flex-col md:container md:items-start space-y-4 w-full">
      <Stack className="flex-col sm:flex-row space-y-2 sm:space-y-0 justify-between px-2 md:px-0 w-full">
        <Typography variant="h5">Customer reviews</Typography>

        <ShareReview />
      </Stack>

      <Stack className="w-full flex-col bg-white items-start md:rounded-xl p-5">
        <Stack className="flex-col w-full space-y-4">
          {data.slice(0, num).map((item, i) => (
            <Fragment key={Math.random() * 1000}>
              <CommentCard data={item} />
              {data.length > 3 ? (
                <hr className={`${i !== num - 1 ? "w-full" : "w-0"}`} />
              ) : (
                <hr className={`${i !== data.length - 1 ? "w-full" : "w-0"}`} />
              )}
            </Fragment>
          ))}
        </Stack>
        {data.length > 3 &&
          (num === 4 ? (
            <Button
              hoverEffect={false}
              onClick={() => setNum(data.length)}
              className="flex space-x-1 justify-between items-end text-blue-400 hover:bg-inherit "
            >
              <Typography>Show more</Typography>
              <ChevronDownIcon width={22} className="w-4 md:w-5" />
            </Button>
          ) : (
            <Button onClick={() => setNum(4)} className="flex justify-between items-end text-blue-400 hover:bg-inherit ">
              show less <ChevronUpIcon width={22} className="w-4 md:w-5" />
            </Button>
          ))}
      </Stack>
    </Stack>
  )
}

export default Comments
