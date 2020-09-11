import React from 'react';
import Portrait from '../images/Portrait.jpg';

import styled from 'styled-components';

const AboutPage = () => {
    return (
        <Container>
            <ImageContainer>
                <Info>
                    <Image src={ Portrait } alt='portrait'></Image>
                    <h2>Angelica Perez</h2>
                    <h3>Full Stack Web</h3>
                    <h3>Developer</h3>
                </Info>
                <AboutMe>My name is Angelica Perez and I am currently enrolled in Lambda School to become a edtech web developer. Prior to enrolling in Lambda School, I taught third grade for three years and fourth grade for one year. I am currently a fulltime online English as a Second Language teacher for VIPKID. My passion for education began when I was an education while my passion for web development was just recently sparked. I am excited to bring my two passions together in the future and will post projects I have completed while attending Lambda School in this portfolio. I will also update this portfolio regularly as I learn new skills and create new products.</AboutMe>
            </ImageContainer>
         </Container>
    )
}

export default AboutPage;

const Container = styled.div`
    background-color: lightgray;
    display: flex;
    flex-direction: row;
`
const ImageContainer = styled.div`
    width: 100vw;
    margin: 2rem;
    display: flex;
    flex-direction: row;
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3 {
        margin-top: 0rem;
    }
`
const Image = styled.img`
    height: 10rem;
    width: 10rem;
    margin-top: 1rem;
    border: .3rem solid black;
    border-radius: 6rem;
`
const AboutMe = styled.p`
    width: 75vw;
    float: right;
    margin-left: 5rem;
    display: flex; 
    align-items: center;
    font-size: 1.4rem;
`