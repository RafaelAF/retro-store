type Props = {
    msgs: string[]
}

export default function TopBar ({msgs}: Props){
    return (
        <div className="w-full max-h-[59px] bg-white py-5 flex relative overflow-hidden">
            {msgs.length > 0 && msgs.map((item, index) => (
                <div key={index} className="flex gap-2 ml-2 items-center">
                    <p className="whitespace-nowrap">{item}</p>
                    {msgs.length !== index + 1 && <Divider />}
                </div>
            ))}
        </div>
    )
}

import * as React from "react"

function Divider() {
  return (
    <svg
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1308_97)">
        <path
          d="M16 9.267H9.852l4.348 4.347-1.086 1.086-4.347-4.348V16.5H7.233v-6.148L2.886 14.7 1.8 13.614l4.348-4.347H0V7.733h6.148L1.8 3.386 2.886 2.3l4.347 4.348V.5h1.534v6.148L13.114 2.3 14.2 3.386 9.852 7.733H16v1.534z"
          fill="#EF9854"
        />
      </g>
      <defs>
        <clipPath id="clip0_1308_97">
          <path
            fill="#fff"
            transform="matrix(1 0 0 -1 0 16.5)"
            d="M0 0H16V16H0z"
          />
        </clipPath>
      </defs>
    </svg>
  )
}


