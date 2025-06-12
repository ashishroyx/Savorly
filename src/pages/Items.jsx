import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import Category from '../components/Category';

function Items() {
  const [items, setItems] = useState([]);
  let params = useParams();

  const getItems = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_FOODIE_API_KEY
      }&items=${name}`
    );
    const recipe = await data.json();
    setItems(recipe.results);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getItems(params.name);
  }, [params.name]);

  return (
    <div className="bg-[#A3B18A] min-h-screen w-full overflow-x-hidden">
      <div className="pt-8 px-4">
        {/* <Category /> */}
      </div>

      <Grid
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {items.map((item, index) => (
          <Card
            key={item.id}
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link to={`/rec/${item.id}`}>
              <div className="img-wrapper">
                <img src={item.image} alt={item.title} />
              </div>
              <h4>{item.title}</h4>
            </Link>
          </Card>
        ))}
      </Grid>
    </div>
  );
}

export default Items;

// Styled Components
const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2.5rem;
  padding: 4rem 2rem;
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  .img-wrapper {
    width: 100%;
    height: 220px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }

  &:hover .img-wrapper img {
    transform: scale(1.1);
  }

  h4 {
    padding: 1rem;
    text-align: center;
    font-weight: bold;
    font-size: 1rem;
    color: #fefefe;
  }

  a {
    text-decoration: none;
  }
`;
