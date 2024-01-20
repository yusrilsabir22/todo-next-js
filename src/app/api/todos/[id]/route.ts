import { DATA_SOURCE_URL } from "@/const";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, route: { params: { id: string } }) {
    if(!route.params.id) {
        return NextResponse.json({
            data: [],
            error: 'failed to fetch data'
        })
    }
    const todos = await fetch(`${DATA_SOURCE_URL}/todos?id=${route.params.id}`)
    const res = await todos.json()
    return NextResponse.json({...res[0]})
}