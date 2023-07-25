import React from 'react'
import { Button } from 'react-bootstrap';
export default function Index() {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <Button
                className="flex w-full justify-center rounded-md bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
            >
                Save Changes
            </Button>
            <form class="flex items-center space-x-6">
                <div class="shrink-0">
                    <img class="h-16 w-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
                </div>
                <label class="block">
                    <span class="sr-only">Choose profile photo</span>
                    <input type="file" class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
                </label>
            </form>
        </div>
    )
}