import { TbBrandNetflix } from "react-icons/tb";
import React from "react";

import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.itemContainer}>
        <div className={styles.brand}>
          <TbBrandNetflix />
          <h4>TextFlix</h4>
        </div>
        <div className={styles.letter}>
          textflix is a website that allows you to search for movies and tv
          shows and get information about them. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Quaerat eligendi adipisci rem delectus
          dolor, iure dolorum eaque provident, voluptatem facere ratione, amet
          consequatur perferendis alias perspiciatis. Dicta odio laboriosam
          minima. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          recusandae accusamus sequi numquam et odit vitae perferendis dolor
          consectetur beatae nobis nulla facilis accusantium, quasi voluptatum
          ipsum minima quam velit. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Esse doloremque dolores nihil iure libero facilis
          mollitia, velit officiis at ex repudiandae repellendus, debitis iusto.
          Quaerat dolorum maiores dolores repellat earum.
        </div>
      </div>
    </div>
  );
};

export default About;
