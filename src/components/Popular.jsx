import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from 'react-router-dom'

function NonVeggie() {
  const [nonVeg, setNonVeg] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_FOODIE_API_KEY}&number=9&tags=meat`
    );
    const data = await api.json();
    setNonVeg(data.recipes);
  };

  return (
    <div className='bg-[#A3B18A]'>
      <Wrapper>
        <h1 className="ashish text-center text-3xl m-6">NON-VEGETARIAN</h1>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '3rem',
            breakpoints: {
              1024: { perPage: 2 },
              640: { perPage: 1 },
            }
          }}
        >
          {nonVeg.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to={`/rec/${recipe.id}`}>

                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          ))}
        </Splide>
      </Wrapper>
    </div>
  );
}

export default NonVeggie;
const Wrapper = styled.div`
  margin: 4rem 2rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 1.5rem;
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  img {
    border-radius: 1.5rem;
    position: absolute;
    left: 0;
    top: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  p {
    position: absolute;
    z-index: 3;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1.1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
  }
`;

const Gradient = styled.div`
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
`;
