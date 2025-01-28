import React from 'react'

export const Button = ({label , onClick}) => {
  return (
    <div>
      Example for reusable component 
        <Button onClick={onClick}>
            {label}
        </Button>
    </div>
  )
}
