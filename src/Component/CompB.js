import React from 'react'
import CompC from './CompC'

const CompB = ({data}) => {
  return (
    <>
      <div>CompB</div>
      <CompC data={data}/>
    </>
    
  )
}

export default CompB