import './global.css'

type Props = {
    msgs: string[]
}

export default function RunningBar ({msgs}: Props){

    const mymsgs = [...msgs, ...msgs, ...msgs]

    return (
        <div className="w-full max-h-[59px] gap-5 bg-d-orange py-5 flex relative overflow-hidden my-4">
            <div className="flex slide-track">
              {mymsgs.length > 0 && mymsgs.map((item, index) => (
                  <div key={index} className="flex gap-2 ml-2 items-center slide">
                      <h3 className="whitespace-nowrap text-2xl font-medium mx-4">{item}</h3>
                      {mymsgs.length !== index + 1 && <Divider />}
                  </div>
              ))}
            </div>
        </div>
    )
}

import * as React from "react"

function Divider() {
  return (
    <svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.37 24.5H9.58v-9.63H0v-4.79h9.58V.5h4.79v9.58H24v4.79h-9.63v9.63z"
        fill="#060707"
      />
    </svg>
  )
}


