import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "School Learning Management System",
    img: "/lms_image.png",
    desc: "This system has three roles: Admin, Teacher, and Student. Admins can create classes and add students and teachers. Teachers can assign tasks, grade them, and mark attendance. Students can view their scores, attendance, and assignments.",
    link: "https://youtu.be/Eg_5QQJ6bz4?si=0TZZc4v7NzTbzHx7",
    github: "https://github.com/bunhovlim/pp_frontend",
  },
  {
    id: 2,
    title: "Computer Store Management",
    img: "/project1.png",
    desc: "This online store has three role guest, user and admin. Guest can only view product. After loging in they can add product to card add favorite view item search and sort.",
    link: "https://computer-store-frontend.vercel.app",
    github: "https://github.com/limbunhov/computer_store.git",
  },
  {
    id: 3,
    title: "School Management",
    img: "/project2.png",
    desc: "This system has three roles: Admin, Teacher, and Student. Admins can create classes and add students and teachers. Teachers can assign tasks, grade them, and mark attendance. Students can view their scores, attendance, and assignments.",
    github:
      "https://github.com/limbunhov/school_management_system_react_and_laravel.git",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const handleClickDemo = () => {
    if (item.link) {
      window.open(item.link, "_blank"); // Open link in a new tab
    } else {
      alert("No link available for this project.");
    }
  };

  const handleClickGithub = () => {
    if (item.github) {
      window.open(item.github, "_blank"); // Open link in a new tab
    } else {
      alert("No link available for this project.");
    }
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="button">
              {item.link && <button onClick={handleClickDemo}>See Demo</button>}
              <button onClick={handleClickGithub}>GitHub</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
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
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h2>Featured Works</h2>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => {
        return <Single item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Portfolio;
