type TodoResponse = {
    data: Todo[];
    pagination: {
        currentPage: number;
        pages: number[];
        pageCount: number;
    }
}

type TodoRequest = {
    title: string;
    body: string;
    userId: number;
}

type Todo = {
    id: number;
    title: string;
    body: string;
    userId: number;
}

type RequestPagination = {
    start: number;
    limit?: number;
}