import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return <button className={`rounded-lg px-3 py-2 ${textColor} ${className} ${bgColor}`}  {...props}>{children}</button>
}

export default Button
