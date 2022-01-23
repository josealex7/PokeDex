import React from 'react';
import { 
    ContainerPrincipal, 
    LogoContainer, 
    ContainerTexto, 
    P, 
    ContainerIconos, 
    LinkRedes, 
    ImgLogo } from "../styles/Footer.elements";
import {
    FaInstagram,
    FaGithub,
    FaTwitter,
    FaYoutube,
    FaLinkedin,
    FaFacebookSquare
} from "react-icons/fa";

const Footer = () => {
    return (
        <ContainerPrincipal>
            
                <LogoContainer>
                    <ImgLogo src="https://res.cloudinary.com/dxnn5sbsz/image/upload/v1642882024/amazonas/2560px-International_Pok%C3%A9mon_logo.svg_svuy0c.png" alt="logo" />
                </LogoContainer>

                <ContainerTexto>
                    <P>
                        © 2021 | PokeDex - Todos los derechos reservados
                    </P>
                </ContainerTexto>

                <ContainerIconos>
                    <LinkRedes href="#" target="_blank"><FaYoutube /></LinkRedes>
                    <LinkRedes href="#"><FaGithub /></LinkRedes>
                    <LinkRedes href="#" target="_blank"><FaInstagram /></LinkRedes>
                    <LinkRedes href="#" target="_blank"><FaTwitter /></LinkRedes>
                    <LinkRedes href="#"><FaFacebookSquare /></LinkRedes>
                    <LinkRedes href="#"><FaLinkedin /></LinkRedes>
                </ContainerIconos>

        </ContainerPrincipal>
    )
}

export default Footer