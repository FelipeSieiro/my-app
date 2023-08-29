import logo from "../../assets/logo-brix.png"

interface HeaderProps{
    userName: string
    userImage?: string
}

export const Header = ({userName, userImage = "" }: HeaderProps) =>{
    return(
        <header>
            <div className="container">
                <img src={logo} alt="Logo Tipo Brix" />
                <span>Olá, {userName}</span>
                <img src={userImage} alt="" />
            </div>
        </header>
    )
}