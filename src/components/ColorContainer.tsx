import React from 'react'

interface ColorContainerProps {
    title: string,
    color: string
}

const ColorContainer = ({title, color} : ColorContainerProps) => {
  return (
    <div className='flex flex-col gap-2 items-center'>
        <p className='text-lg font-medium'>{ title }</p>
        <div className='block w-28 h-28 lg:w-40 lg:h-40 rounded-xl' style={{background: color}}></div>
    </div>
  )
}

export default ColorContainer