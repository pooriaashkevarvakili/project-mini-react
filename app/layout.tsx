import React from 'react'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        //@ts-ignore
      <html lang="en">
       
        <body>{children}</body>
      </html>
    )
  }