import React, { ReactNode } from 'react'

type ButtonProps = {
    className: string
    children: ReactNode
    onClick:() => void
}

export const Button = ({ className, children, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={className}
        >{children}</button>
    )
}