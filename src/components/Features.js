import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import ImageOne from "../images/kitchen-1.jpeg"

const Section = styled.section`
    background: #000d1a;
    padding: 12rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Container = styled.div`
    background: #fff;
    padding: 3rem 2rem;
    position: relative;
`
const Wrap = styled.div`
`

const ColumnLeft = styled.div``
const Content = styled.div``
const ColumnRight = styled.div``
const Image = styled.img``



const Features = () => {
    return (
        <Section>
            <Container>
                <Wrap>
                    <ColumnLeft>
                        <Content>
                            <h1>Stunning Interior</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cum quas tempore dolores ratione reiciendis suscipit magni quae repellat veniam!</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, asperiores.</p>
                            <Button to="/homes">Learn More</Button>
                        </Content>
                    </ColumnLeft>
                    <ColumnRight>
                        <Image src={ImageOne}/>
                    </ColumnRight>
                </Wrap>

            </Container>
        </Section>
    )
}

export default Features
