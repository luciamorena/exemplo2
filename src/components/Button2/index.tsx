import React, { ReactNode } from 'react'
import { Button } from './styles'

type ButtonProps = {
    children: ReactNode
    color: 'red' | 'green' | 'blue'
    onClick:() => void
}

export const Button2 = ({ children, color, onClick }: ButtonProps) => {
    return (
        <Button
            color={color}
            onClick={onClick}
        >TESTE 2</Button>
    )
}