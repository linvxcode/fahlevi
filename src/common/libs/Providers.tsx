// app/providers.tsx
"use client";

// import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider} from "next-themes";

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <div>
      <ThemeProvider  enableSystem={true} attribute="class">
        {children}
      </ThemeProvider>
    </div>
  )
}