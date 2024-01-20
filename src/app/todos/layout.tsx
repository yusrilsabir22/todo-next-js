'use client';

import Input from '@/components/input';
import { usePostTodoMutation } from '@/lib/services/todoApi';
import { useParams } from 'next/navigation';
import React, { useState } from 'react'

function Page({children}: {children: React.ReactNode}) {
    const router = useParams()
    const [todoTitle, setTodoTitle] = useState('')
    const [postTodo] = usePostTodoMutation()
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {
            !(router.page && router.id) ?
                <Input onSubmit={(e) => {
                    postTodo({ title: todoTitle, body: todoTitle, userId: 1 })
                        .then(() => {
                            window.alert('success to add todo');
                        })
                }} value={todoTitle} onChange={(text) => setTodoTitle(text)} /> : null
        }
        {children}
        </main>
    )
}

export default Page