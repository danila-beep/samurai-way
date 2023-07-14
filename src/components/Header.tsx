import React from 'react'
import styled from 'styled-components'

export const Header = () => {


    return (
        <HeaderWrapper>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnO8zhtpfhe19HzHmOAqEfY7Hv7lo4JUvR5250Xnod_g&s"
                alt="Logo"/>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
      grid-area: h;
      background: black;
      color: white;

      & img {
        width: 100px;
      }
    `