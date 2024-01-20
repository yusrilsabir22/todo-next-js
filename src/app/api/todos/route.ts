import { DATA_SOURCE_URL } from '@/const'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    let currentPage = 1;
    const urlReq  = new URL(req.url).searchParams
    const page = parseInt((urlReq.get('page')!))
    let limit = parseInt((urlReq.get('limit')!))
    if(!page && !limit) {
        const response = await fetch(`${DATA_SOURCE_URL}/todos`)
        const todos: Todo[] = await response.json()
        const pageCount = Math.ceil(todos.length / limit)
        return NextResponse.json({
            data: todos,
            pagination: {
                pageCount,
                pages: Array.from({length: pageCount}, (_, i) => i+1),
                currentPage: currentPage
            }
        })
    }

    if(page === 0) {
        currentPage = 1
    } else {
        currentPage = page
    }


    const response = await fetch(`${DATA_SOURCE_URL}/todos`)
    const todos: Todo[] = await response.json()

    const pageCount = Math.ceil(todos.length/limit)
    const pages = Array.from({length: pageCount}, (_, i) => i+1);
    await sleep()
    return NextResponse.json({
        data: todos.slice((currentPage - 1)*limit, currentPage * limit), 
        pagination: {
            pageCount,
            pages,
            currentPage: currentPage
        }
    })
}

export async function POST(req: NextRequest) {
    const reqBody = await req.json()
    const res = await fetch(`${DATA_SOURCE_URL}/todos`, {
        method: 'POST',
        body: JSON.stringify(reqBody)
    })
    const response = await res.json()
    return NextResponse.json({ ...response })
}
const sleep = (time=1000): Promise<any> => {
    return new Promise((resolve) => setTimeout(() => resolve(null), time))
}