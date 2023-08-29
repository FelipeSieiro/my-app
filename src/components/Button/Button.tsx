import { StyledButton } from "./Button.style"

interface ButtonProps{
    children: string
    danger?: boolean
    sucess?: boolean
}

export const Button =({children, danger, sucess, ...rest}: ButtonProps)=>{
    return <StyledButton sucess={sucess} danger={danger} {...rest}>{children}</StyledButton>
}