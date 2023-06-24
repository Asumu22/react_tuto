import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './portfolio.css';

const Portfolio = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://dull-gray-meerkat-shoe.cyclic.app/projects')
      .then(response => {
        const formattedData = response.data.data.map(item => ({
          id: item._id,
          image: item.projectImage,
          title: item.title,
          github: item.github,
          demo: item.link,
          technologies: item.technologies,
          description: item.description
        }));
        setData(formattedData);
      })
      .catch(error => {
        console.error('Error fetching portfolio data:', error);
      });
  }, []);

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {data.map(({ id, image, title, github, demo, description, technologies }) => (
          <article className="portfolio__item" key={id}>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{title}</h3>
              <p>{description}</p>
              <p>{technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={demo}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
