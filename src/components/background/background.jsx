import { useRef } from "react";
import "./background.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "NICC Start-Up Camp (ITC)",
    img: "/startup.JPG",
    year: "2022",
    desc: "Joined the NICC Start-Up Camp (ITC) for 1 week to enhance entrepreneurial skills and knowledge in technology innovation.",
  },
  {
    id: 2,
    title: "Exchange Study Program to Khasetsat University",
    img: "/exchange.jpg",
    year: "2024",
    desc: "Participated in an exchange study program to Khasetsat University in Bangkok, Thailand, gaining international academic experience and cultural exposure. And aslo joined Winter school program to study about financail mathimatics and data science from professor around the world. And visited Walailak University.",
  },
];

const Single = ({ item, index }) => {
  const ref = useRef();
  const isReverse = index % 2 !== 0;

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className={isReverse ? "reverse" : ""}>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <h5>{item.year}</h5>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Background = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="background" ref={ref}>
      <div className="progress">
        <h2>Academic Background</h2>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item, index) => (
        <Single item={item} index={index} key={item.id} />
      ))}
    </div>
  );
};

export default Background;
