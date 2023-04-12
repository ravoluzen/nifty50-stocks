import { BsFillBookmarkCheckFill as BookmarkIcon, BsLightningCharge as BoltIcon } from 'react-icons/bs'
import { BiCandles as ChartIcon } from 'react-icons/bi'
import { HiOutlineNewspaper as NewsIcon } from 'react-icons/hi'
import { RiUserSmileLine as ProfileIcon } from 'react-icons/ri'
import styled from "styled-components"

const Footer = styled.footer`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 10vh;
    font-size: 1.5rem;
    cursor: pointer;
    justify-self: flex-end;
    
    @media (min-width: 768px) {
        font-size: 2rem;
        width: 35vw;
        height: 15vh;
    }
`
const FooterNav = () => {
  return (
    <Footer>
        <BookmarkIcon />
        <BoltIcon />
        <ChartIcon />
        <NewsIcon />
        <ProfileIcon />
    </Footer>
  )
}

export default FooterNav