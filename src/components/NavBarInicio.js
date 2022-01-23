import React from 'react';
import { ContainerPrincipal, LogoContainer, ContainerButtons, Button1, Button2, ImgLogo  } from "../styles/NavBarDos.elements";
import { Link } from "react-router-dom";


const NavBarDos = () => {
    return (
        <ContainerPrincipal>
                <LogoContainer>
                    <ImgLogo src="https://res.cloudinary.com/dxnn5sbsz/image/upload/v1642882024/amazonas/2560px-International_Pok%C3%A9mon_logo.svg_svuy0c.png" alt="logo" />
                </LogoContainer>
                <ContainerButtons>
                    <Button1 style={{color:'white'}}>
                        <Link to="/" className='links'>
                            Ingresa
                        </Link>
                    </Button1>

                    <Button2>
                        <Link to="/registro" className='links'>
                            Registrate
                        </Link>
                    </Button2>
                </ContainerButtons>
        </ContainerPrincipal>
    )
}

export default NavBarDos