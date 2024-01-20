import React from 'react'

function Skelton() {
  return (
    <div className="border border-blue-300 shadow rounded-md p-4 w-56 h-64">
      <div className="animate-pulse flex-col space-x-4">
        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-4">
          <div className="h-2 bg-slate-700 rounded"></div>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skelton