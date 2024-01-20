import { redirect } from 'next/navigation'
import React from 'react'

function Page() {
    redirect('/todos/1')
  return (
    <div>Page</div>
  )
}

export default Page