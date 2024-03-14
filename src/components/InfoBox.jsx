import React from 'react'

export default function InfoBox({ heading, children }) {
  return (
    <div className="lg:w-1/3 px-8 lg:py-8">
      <h3>{ heading }.</h3>
      { children }
    </div>
  )
}
