import Skelton from '@/components/Skelton';
import Input from '@/components/input';
import Pagination from '@/components/pagination';
import Task from '@/components/task';
import { PAGE_LIMIT } from '@/const';
import { fetchAllTodo, fetchPaginationTodo } from '@/lib/services/todoApi';
import React, { useState } from 'react'

const fakeData = Array.from({length: 10}, (_, i) => i+1)

async function Page({params}: {params: {page: string}}) {
  const todos = await fetchPaginationTodo(params.page as string)
  return (
    <>
      <div className="grid grid-cols-5 gap-5">
        {

            todos?.data.map((item) => {
              return (
                <Task pageId={params.page} id={item.id} key={item.id} title={item.title} />
              )
            })
        }
      </div>
      <Pagination
        currentPage={todos!.pagination.currentPage}
        pageCount={todos!.pagination.pageCount}
        pages={todos!.pagination.pages}
        withLink
      /> 
    </>
  )
}

export async function generateStaticParams() {
  const todos = await fetchAllTodo();
  const pageCount = Math.ceil(todos.data.length/PAGE_LIMIT)
  return Array.from({length: pageCount}, (_, i) => ({params: {page: i+1}}))
}



export default Page