import Stack from "@atom/stack"
import Typography from "@atom/typography"

type PropsType = {
  absolutePercent?: boolean
  stockOut: boolean
  discount: string
  price: string
}

const ProductPrice = ({ stockOut, discount, price, absolutePercent = true }: PropsType) => {
  return stockOut ? (
    <Typography className="text-danger-main">Stock out</Typography>
  ) : (
    <Stack className="space-x-1">
      <Typography>${+discount ? discount : price}</Typography>
      <Typography variant="caption">per kg</Typography>
      {!!+discount && (
        <>
          <Typography
            variant="caption"
            className={`bg-primary-dark rounded-full text-white w-6 h-6 justify-center items-center flex ${
              absolutePercent ? "absolute" : "static"
            } top-[-20px] !text-[11px] right-[-10px]`}
          >
            {Math.floor(100 - (+discount / +price) * 100)}%
          </Typography>
          <Typography variant="caption" className="line-through text-gray-400">
            ${price}
          </Typography>
        </>
      )}
    </Stack>
  )
}

export default ProductPrice
