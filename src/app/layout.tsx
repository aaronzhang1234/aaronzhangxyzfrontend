import React from "react"
import styles from './page.module.css'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className={styles.bodystyle} >{children}</body>
      </html>
    )
  }