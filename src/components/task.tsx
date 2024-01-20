/* eslint-disable react/no-unescaped-entities */
'use client';

import Link from 'next/link';
import React from 'react'

type Props = {
  title?: string;
  id: number;
  pageId: string;
  disableButton?: boolean;
}

function Task(props: Props) {
  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
      <div className="p-6 flex-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
          className="w-12 h-12 mb-4 text-gray-900">
          <path fillRule="evenodd"
            d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
            clipRule="evenodd"></path>
          <path
            d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z">
          </path>
        </svg>
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {props.title || 'UI/UX Review Chec'}k
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          ...
        </p>
      </div>
      {
        !props.disableButton ?
        <div className="p-6 pt-0">
          <Link href={`/todos/${props.pageId}/${props.id}`} className="inline-block">
            <button
              className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
              type="button">
              Show details
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
              </svg>
            </button>
          </Link>
        </div> : null
      }
    </div> 
  )
}

export default Task