// Style your elements here

// Container, H1, P, Img

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const H1 = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
`
export const P = styled.p`
  color: #1e293b;
  font-size: 15px;
`

export const Img = styled.img`
  width: 400px;
  height: 300px;
`

export const Para = styled.p`
  color: #334155;
  width: 25%;
`

export const Button = styled.button`
  color: #ffffff;
  background-color: #1f81ff;
  border: none;
  padding-left: 5px;
  padding-right: 5px;
  cursor: pointer;
`
