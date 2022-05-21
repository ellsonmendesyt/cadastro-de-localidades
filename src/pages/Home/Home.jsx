import React from 'react'
import './Home.css';

const Home = () => {
  return (
    <article>
        <h2>Cadastraro de Pessoas e Lugares</h2>
        {/* <img src="./imgs/banner.png" alt="foto do jogo" /> */}
        {/* <video autoPlay src="./videos/video-2.mp4"></video> */}

        <video autoPlay loop muted>
  <source src="./videos/video-2.mp4" type="video/mp4"/>

  Your browser does not support the video tag.
</video>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis officia, nesciunt sequi doloribus saepe quis illum eius architecto, obcaecati fugit est adipisci praesentium. Beatae quasi quae placeat incidunt ullam quam dolor autem explicabo molestiae rerum ex reprehenderit reiciendis fuga doloremque id amet velit, minima saepe sequi iste optio vel aspernatur.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis officia, nesciunt sequi doloribus saepe quis illum eius architecto, obcaecati fugit est adipisci praesentium. Beatae quasi quae placeat incidunt ullam quam dolor autem explicabo molestiae rerum ex reprehenderit reiciendis fuga doloremque id amet velit, minima saepe sequi iste optio vel aspernatur.</p>
    </article>
  )
}

export default Home