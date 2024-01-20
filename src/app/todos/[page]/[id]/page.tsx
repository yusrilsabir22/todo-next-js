import React from 'react';
import { fetchAllTodo, fetchOneTodo, fetchPaginationTodo } from '@/lib/services/todoApi';
import Task from '@/components/task';
import { PAGE_LIMIT } from '@/const';

type Params = {
    params: {
        id: string;
        page: string;
    }
};

const SubPage = async ({ params }: Params) => {
    const todo = await fetchOneTodo(params.id)
    return (
        <div className='flex h-screen'>
            <div className='m-auto'>
                <Task pageId={params.page} id={todo.id} title={todo.title} disableButton />
            </div>
        </div>
    );
};

export async function generateStaticParams(params: any) {
    const todos = await fetchPaginationTodo(params.page)
    return todos.data.map((todo) => ({ params: { page: params.page, id: todo.id } }))
}

export default SubPage;
