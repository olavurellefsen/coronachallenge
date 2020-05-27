import React from "react"
import Schedule from "./schedule"

const Content = () => (
  <>
    <Schedule title="West Greenland Summer Time (UTC-2)" offset="-2" />
    <Schedule title="Icelandic Time (UTC)" offset="0" />
    <Schedule title="Scottish/Faroese Time (UTC+1)" offset="1" />
    <Schedule title="Norwegian Time (UTC+2)" offset="2" />
  </>
)

export default Content
