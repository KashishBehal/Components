import React from 'react'

export const MemoisedComponent = React.memo(({val}) => {
  return (
    <div>{val}</div>
  )
})

