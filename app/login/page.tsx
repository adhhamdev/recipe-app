'use client'

import Link from "next/link"
import { useState } from "react"

export default function LoginPage() {
    const [error, setError] = useState("")

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const password = formData.get("password")

        if (!password) {
            setError("Please enter a password")
            return
        }
    }

    return (
        <div className="flex min-h-[calc(100vh-64px)] items-center justify-center">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow">
                <div className="mb-8 text-center">
                    <span className="text-2xl font-bold text-[#FF4E7C]">CookBook.</span>
                </div>
                <h1 className="mb-6 text-2xl font-semibold">Login</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="text-sm text-gray-600">
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 hover:border-gray-400 focus:border-[#FF4E7C] focus:outline-none focus:ring-1 focus:ring-[#FF4E7C]"
                            placeholder="john@gmail.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm text-gray-600">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 hover:border-gray-400 focus:border-[#FF4E7C] focus:outline-none focus:ring-1 focus:ring-[#FF4E7C]"
                        />
                    </div>
                    {error && (
                        <p className="text-sm text-red-500">{error}</p>
                    )}
                    <button
                        type="submit"
                        className="w-full rounded-md bg-[#FF4E7C] px-4 py-2 text-sm font-medium text-white hover:bg-[#FF4E7C]/90 focus:outline-none focus:ring-2 focus:ring-[#FF4E7C] focus:ring-offset-2"
                    >
                        SIGN IN
                    </button>
                </form>
                <p className="mt-6 text-center text-sm text-gray-600">
                    Don&apos;t have an account?{" "}
                    <Link href="/register" className="text-[#FF4E7C] hover:underline">
                        Create an account
                    </Link>
                </p>
            </div>
        </div>
    )
}