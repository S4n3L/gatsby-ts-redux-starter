import React, { forwardRef } from "react"

const SvgrMock: React.RefForwardingComponent<HTMLSpanElement> = (props, ref) => {
  return <span ref={ref} {...props}>SVG</span>
}

export const ReactComponent = forwardRef(SvgrMock)
export default forwardRef(SvgrMock)
