import { PAGE_LIMIT } from "@/const";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoAPI = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({baseUrl: '/api'}),
    tagTypes: ['Todos'],
    endpoints: (builder) => ({
        getPaginationTodo: builder.query<TodoResponse, RequestPagination>({
            query: (req) => `todos?page=${req.start}&limit=${req.limit || 10}`,
            providesTags: (result, error, page) => result ?
            [
                ...result.data.map(({id}) => ({type: 'Todos' as const, id})),
                {type: 'Todos', id: 'PARTIAL-LIST'}
                ] : [{ type: 'Todos', id: 'PARTIAL-LIST' }]
        }),
        getAllTodo: builder.query<Todo[], void>({
            query: () => 'todos'
        }),
        getOneTodo: builder.query<Todo, string>({
            query: (todoId) => `todos/${todoId}`
        }),
        postTodo: builder.mutation<{id: string}, TodoRequest>({
            query: (todo) => ({
                url: `todos`,
                method: 'POST',
                body: todo
            })
        })
    })
})

export const fetchOneTodo = async (todoId: string) => {
    const res = await fetch('http://localhost:3000/api/todos/'+todoId)
    const body: Todo = await res.json()
    return body;
}

export const fetchAllTodo = async () => {
    const res = await fetch(`http://localhost:3000/api/todos`, {
        method: "GET"
    });
    const body: TodoResponse = await res.json()
    return body;
}

export const fetchPaginationTodo = async (page: string) => {
    const res = await fetch(`http://localhost:3000/api/todos?page=${page}&limit=${PAGE_LIMIT}`);
    const body: TodoResponse = await res.json()
    return body;
}

export const {
    useGetPaginationTodoQuery,
    useGetAllTodoQuery,
    useGetOneTodoQuery,
    usePostTodoMutation
} = todoAPI