import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';

const ImagenBackground = styled(BackgroundImage)`
    height: 700px;
`;

const TextoImagen = styled.div`
    background-image: linear-gradient( to top, rgba(34,49,63,.75), rgba(34,49,63,.75) );
    color: #FFF;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;

    h1{
        font-size: 4rem;
        margin: 0;
        @media( min-width: 992px){
            font-size:5.8rem;
        }
        @media( max-width: 605px ){
            text-align: center;
            padding: 2rem;
        }
    }
    p{
        font-size: 2rem;
        @media( min-width: 992px){
            font-size:2.6rem;
        }
    }
`;

const ImagenHotel = () => {


    const data = useStaticQuery(graphql`
    query {
        file: file(relativePath: { eq: "8.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `);

    const imageData = data.file.childImageSharp.fluid

    return (
        <ImagenBackground tag="section" fluid={imageData} fadeIn="soft" >
            <TextoImagen>
                <h1>Bienvenidos a este Hotel Ejemplo</h1>
                <p>El mejor Hotel para tus vacaciones</p>
            </TextoImagen>
        </ImagenBackground>
    );
};

export default ImagenHotel;