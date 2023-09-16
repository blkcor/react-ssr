import React from 'react'
import data from '@/app/data'

type aProps = {}

const a: React.FC<aProps> = () => {
  return (
    <div>
      {data.map((item) => {
        return <div key={item.id}>{item.name}</div>
      })}
    </div>
  )
}
export default a
