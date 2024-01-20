'use client';

import Link from 'next/link';
import React from 'react'

type Props = {
    pageCount: number;
    pages: number[];
    currentPage: number;
    onNext?: () => void;
    onPrev?: () => void;
    onPageClick?: (page: number) => void;
    withLink?: boolean;
}

const Pagination: React.FC<Props> = (props) => {
  return (
      <div className="items-center justify-center py-10">
          <div className="w-full  flex items-center justify-between border-t border-gray-200">
              <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-sm ml-3 font-medium leading-none">Previous</p>
              </div>
              {
                !props.withLink ?
                <div className="sm:flex hidden">
                    {
                        props.pages.map((item) => {
                            if(item === props.currentPage) {
                                return (
                                    <p
                                        key={item}
                                        className="text-sm font-medium leading-none cursor-pointer text-indigo-700 border-t border-indigo-400 pt-3 mr-4 px-2">{item}</p>
                                )
                            } else {
                                return (
                                    <p 
                                        key={item} 
                                        onClick={() => {
                                            props.onPageClick!(item)
                                        }}
                                        className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">{item}</p>
                                )
                            }
                        })
                    }
                </div> :
                  <div className="sm:flex hidden">
                    {
                        props.pages.map((item) => {
                            if(item === props.currentPage) {
                                return (
                                    <p
                                        key={item}
                                        className="text-sm font-medium leading-none cursor-pointer text-indigo-700 border-t border-indigo-400 pt-3 mr-4 px-2">{item}</p>
                                )
                            } else {
                                return (
                                    <Link 
                                        key={item} 
                                        href={`/todos/${item}`}
                                        className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">{item}</Link>
                                )
                            }
                        })
                    }
                </div>
              }
              <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                  <p className="text-sm font-medium leading-none mr-3">Next</p>
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
              </div>
          </div>
      </div>
  )
}

export default Pagination