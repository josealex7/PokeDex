import styled from "styled-components";

export const ContainerPrincipal = styled.div`
  width: 100%;
  height: auto;
  background-color: #E1D52B;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding:10px 0px;
  outline:1px solid #C9AC2A;
  @media screen and (max-width: 850px) {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 30px;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 60px;
  @media screen and (max-width: 850px) {
    margin-bottom: 0px;
    margin-left: 0px;
  }
`

export const ImgLogo = styled.img`
  width: 110px;
  height: auto;
  @media screen and (max-width: 850px) {
    margin-bottom: 0px;
    width: 120px;
  }
`

export const ContainerTexto = styled.div`
  width: 695px;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 850px) {
    margin-top: 30px;
    width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const P = styled.p`
  color: #2A4EC9;
  font-family: Lora;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  margin-right: 10px;
  @media screen and (max-width: 850px) {
    font-size: 16px;
    line-height: 32px;
  }
`

export const ContainerIconos = styled.div`
  width: 144px;
  height: 10px;
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  margin-right: 90px;
  @media screen and (max-width: 850px) {
    margin-top: 40px;
    margin-right: 0px;
  }
`

export const LinkRedes = styled.a`
  color: #3D56B2;
  font-size: 25px;
  line-height: 32px;
  text-align: start;
  margin-right: 10px;
  &:hover {
    color: #5C7AEA;
    transition: 0.5s all ease;
    cursor: pointer;
  }
  @media screen and (max-width: 850px) {
    margin-top: 0px;
  }
`