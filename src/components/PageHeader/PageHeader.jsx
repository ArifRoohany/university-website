import React from 'react'
import './PageHeader.css'

const PageHeader = ({title, subtitle, bgImage}) => {
  return (
    <div className='page-header'
    style={{backgroundImage: `url(${bgImage})`}}
    >
        <p>{subtitle}</p>
        <h2>{title}</h2>
    </div>
  )
}

export default PageHeader