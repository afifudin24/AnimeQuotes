import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [search, setSearch] = useState('');
  const [listAnime, setListAnime] = useState([]);

  const tampilAnime = async () => {
    try {
      const response = await axios.get('https://katanime.vercel.app/api/getlistanime');
      setListAnime(response.data.result);
    } catch (error) {
      console.error("Error fetching the anime list:", error);
    }
  };

  useEffect(() => {
    tampilAnime();
  }, []);

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  // Filter listAnime berdasarkan nilai search
  const filteredAnime = listAnime.filter(anime =>
    anime.anime.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-0 m-0">
      <nav className='bg-darkBlue m-0 p-5'>
        <h1 className='text-slate-100 text-center font-sans text-3xl font-bold'>ANIME QUOTES</h1>
      </nav>
      <div className='mx-auto w-10/12 md:w-8/12'>
        <div className="my-3 w-full md:w-6/12 cari">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              value={search}
              onChange={handleChangeSearch}
              placeholder="Cari"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>

        <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
          {listAnime.length > 0 ? (
            filteredAnime.length > 0 ? (
              filteredAnime.map((item) => (
                <Card key={item.anime} title={item.anime} quoteCount={item.totalKata} />
              ))
            ) : (
              <p>Tidak Ada Data</p>
            )
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
