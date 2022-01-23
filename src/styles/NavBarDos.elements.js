import styled from "styled-components";

export const ContainerPrincipal = styled.div`
  width: 100%;
  height: 65px;
  background-color: #E1D52B;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  outline:1px solid #C9AC2A;
  @media screen and (max-width: 590px) {
    width: 100%;
    height: 100px;
  }
`
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 60px;
  @media screen and (max-width: 590px) {
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 15px;
  }
`

export const ImgLogo = styled.img`
  width: 140px;
  height: auto;
`

export const ContainerButtons = styled.div`
  width: 695px;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  margin-right: 80px;
  @media screen and (max-width: 590px) {
    margin-top: 0px;
    margin-right: 40px;
  }
  @media screen and (max-width: 390px) {
    margin-right: 20px;
  }
`

export const Button1 = styled.button`
  border: none;
  border-radius: 10px;
  color: white;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  text-align: center;
  margin-right: 30px;
  padding: 10px;
  background: #2A72C9;
  &:hover {
    background: #0F0C72;
    transition: 0.5s all ease;
    cursor: pointer;
  }
  @media screen and (max-width: 590px) {
    font-size: 15px;
    line-height: 32px;
    padding: 5px;
    margin-right: 20px;
  }
  @media screen and (max-width: 390px) {
    margin-right: 10px;
  }
`

export const Button2 = styled.button`
  background:#2A72C9;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  text-align: center;
  padding: 10px;
  &:hover {
    background: #BEA701;
    transition: 0.5s all ease;
    cursor: pointer;
  }
  @media screen and (max-width: 590px) {
    font-size: 15px;
    line-height: 32px;
    padding: 5px;
  }
`