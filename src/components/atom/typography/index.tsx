import React from "react"

type PropsType = {
  htmlFor?: string
  children: any
  className?: string
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "label"
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "caption" | "label"
}

const tagMap = {
  caption: "p",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  label: "label",
}

const Typography = ({ children, variant = "p", component, className, ...props }: PropsType) => {
  const Tag: any = component || tagMap[variant] || "p"

  const font = () => {
    const obj = {
      h1: "text-8xl font-inika", //96px
      h2: "text-6xl font-inika", //60px
      h3: "text-5xl font-inika", //48px
      h4: "text-lg xs:text-3xl md:text-4xl font-inika", //36px
      h5: "text-base xs:text-lg md:text-3xl font-inika", //30px
      h6: "text-[13px] xs:text-base md:text-2xl font-inika", //24px
      p: "text-[10px] xs:text-[12px] md:text-base font-roboto", //16px
      label: "text-base font-roboto", //16px
      caption: "text-[11px] xs:text-xs md:text-sm font-roboto", //14px
    }
    if (variant in obj) return obj[variant]
    if (component && component in obj) return obj[component]
  }

  return (
    <Tag className={`${className} ${font()}`} {...props}>
      {children}
    </Tag>
  )
}

export default Typography
