import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Search() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/searched/${query}`);

      setQuery('');
    }
  };

  return (
    <motion.form
      onSubmit={submitHandler}
      className="w-full flex justify-center items-center py-4"
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut', type: 'spring' }}
    >
      <div className="flex items-center w-full max-w-2xl bg-white/30 backdrop-blur-md border border-white/20 shadow-xl rounded-full px-6 py-3 transition-all duration-300 hover:shadow-2xl focus-within:ring-2 focus-within:ring-[#3a5a40]">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="text-[#344e41] mr-4"
        >
          <FaSearch className="text-xl" />
        </motion.div>
        <input
          type="text"
          placeholder="Search delicious recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-transparent outline-none text-[#1b1b1b] placeholder:text-[#444] text-lg font-medium"
        />
      </div>
    </motion.form>
  );
}

export default Search;
