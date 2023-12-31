import React from 'react'
import { JSX } from 'react/jsx-runtime'

const ParkingSquareIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
        </svg>
      )
    }
export default ParkingSquareIcon