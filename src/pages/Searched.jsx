import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

function Searched() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { search } = useParams();

  const getItems = async (searchTerm) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
          import.meta.env.VITE_FOODIE_API_KEY
        }&query=${searchTerm}`
      );

      const data = await res.json();

      if (data.results && data.results.length > 0) {
        setItems(data.results);
      } else {
        setItems([]);
        setError('No recipes found.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getItems(search);
  }, [search]);

  return (
    <div className="bg-[#A3B18A] min-h-screen w-full overflow-x-hidden px-4 pt-8">
      {loading ? (
        <p className="text-center text-white text-lg font-semibold">Loading...</p>
      ) : error ? (
        <p className="text-center text-white text-lg font-semibold">{error}</p>
      ) : (
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
              transition={{ delay: index * 0.05 }}
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
      )}
    </div>
  );
}

export default Searched;

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
