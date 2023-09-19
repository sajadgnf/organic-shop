import React from "react"
import Image from "next/image"
import Stack from "@atom/stack"
import Button from "@atom/button"
import Typography from "@atom/typography"
import { ProductType } from "@src/common/fake-data"
import BuyButtons from "@module/buy-buttons"
import Link from "next/link"

type PropsType = {
  href?: string
  data: ProductType
}

const ProductCard = ({ data, href = "" }: PropsType) => {
  const { img, title, description, type } = data

  return (
    // <Stack className="flex-row md:flex-col md:bg-[#f8f8f8] md:w-[295px] md:space-y-4 md:shadow-md md:rounded-2xl md:p-6">
    //   <Link href={href}></Link>
    //   <Image src={img} width={159} height={201} alt={description || title} className="w-[100px] sm:w-[120px] md:w-[159px]" />
    //   <Stack>
    //     <Stack className="space-y-1 flex-col items-start">
    //       <Typography variant="h6">{title}</Typography>
    //       <Typography className="text-gray-500" variant="caption">
    //         {description}
    //       </Typography>
    //     </Stack>
    //   </Stack>

    //   {type.map(({ price, name, discount, id }) => (
    //     <Stack className="flex-col space-y-3">
    //       <Stack className="flex-col items-end">
    //         {!!discount && (
    //           <Stack className="items-center space-x-1">
    //             <Typography variant="caption" className="bg-primary-dark rounded-full text-white px-[3.5px] py-[2.5px]">
    //               {discount && price && Math.floor((+discount * +price) / 100)}%
    //             </Typography>
    //             <Typography variant="caption" className="line-through text-gray-400">
    //               ${price}
    //             </Typography>
    //           </Stack>
    //         )}
    //         <Typography variant="h6">${discount ? discount : price}</Typography>
    //       </Stack>
    //       <BuyButtons typeId={id} buyButtonTitle={name} data={data} size="small" variant="contained" />
    //     </Stack>
    //   ))}

    //   {/* <Stack className="flex-col items-start w-full">
    //       {discount && (
    //         <Stack className="items-center space-x-1">
    //           <Typography variant="caption" className="bg-primary-dark rounded-full text-white p-1">
    //             {discount && price && Math.floor((+discount * +price) / 100)}%
    //           </Typography>
    //           <Typography className="line-through text-gray-400">${price}</Typography>
    //         </Stack>
    //       )}
    //       <Stack className="justify-between w-full">
    //         <Typography variant="h6">${discount ? discount : price}</Typography>
    //         <Button variant="contained">Add To Cart</Button>
    //       </Stack>
    //     </Stack> */}
    // </Stack>

    <Stack className="md:flex-col md:space-y-4 md:bg-[#f8f8f8] md:min-w-[355px] md:shadow-md rounded-2xl">
      <Link href={href}>
        <Stack className="md:flex-col space-y-4 px-6 pt-6">
          <Image src={img} width={159} height={201} alt={description || title} className="w-[100px] sm:w-[120px] md:w-[159px]" />

          <Stack className="space-y-1 flex-col items-start">
            <Typography variant="h6">{title}</Typography>
            <Typography variant="caption">{description}</Typography>
          </Stack>
        </Stack>
      </Link>

      <Stack className="justify-between items-end w-full px-6 pb-4">
        {type.map(({ price, name, discount, id }) => (
          <Stack className="flex-col space-y-3">
            <Stack className="flex-col items-end">
              {!!discount && (
                <Stack className="items-center space-x-1">
                  <Typography variant="caption" className="bg-primary-dark rounded-full text-white px-[3.5px] py-[2.5px]">
                    {discount && price && Math.floor((+discount * +price) / 100)}%
                  </Typography>
                  <Typography variant="caption" className="line-through text-gray-400">
                    ${price}
                  </Typography>
                </Stack>
              )}
              <Typography variant="h6">${discount ? discount : price}</Typography>
            </Stack>
            <BuyButtons typeId={id} buyButtonTitle={name} data={data} size="small" variant="contained" />
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default ProductCard
