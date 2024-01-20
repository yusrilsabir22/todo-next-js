'use client';

import { redirect } from "next/navigation";

/* eslint-disable react/jsx-key */

export default function Page() {
  redirect('/todos/1')
  return (
    <></>
  )
}