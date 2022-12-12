import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb.js";
import MovieRow from "./components/MovieRow.js";
import FeaturedMovie from "./components/FeaturedMovie";
import "./App.css"

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter(i => i.slug === 'originals')
      

    };

    loadAll();
  }, []);

  return (
    <div className="page">

      {featuredData && 
        <FeaturedMovie item={featuredData}/> 
      }
      <section className="lists">
      {movieList.map((item, key)=>(
      <MovieRow key={key} title={item.title} items={item.items}/>
      ))}
      </section>
    </div>
  );
};
