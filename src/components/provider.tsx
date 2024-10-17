"use client"
import { TestProvider } from '@/utils/test-context'
import React, { ReactNode } from 'react'

export default function Provider({ children }: { children: ReactNode }) {
    return (
        <TestProvider>
            {children}
        </TestProvider>
    )
}
