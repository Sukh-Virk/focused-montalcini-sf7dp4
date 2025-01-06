import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import profileImage from "./assets/unnamed.jpg"; // ✅ Corrected Image Path
import pi1 from "./assets/pi1.jpg";

function App() {
  const sentences = [
    {
      text: "Hello, my name is Sukhman and I go to SFU :) Welcome to my website!",
      action: null,
    },
    {
      text: "Let’s change the background. Simple, right? 🌈",
      action: "fakeBackgroundFail",
    },
    { text: "Uh... why isn’t this working??!@#$%", action: "errorShake" },
    { text: "Oops, forgot a semicolon. 💀💀💀", action: "errorFlash" },
    {
      text: "I’m gonna be homeless like the other CS majors... 😭",
      action: "sadMode",
    },
    {
      text: "Recruiter watching this like: 👀 'How did this dude get an interview??.'",
      action: "interviewDoubt",
    },
    { text: "Nah, let me cook. 🧠🔥", action: "letCook" },
    {
      text: "Recruiter, if you're watching... *cough cough* GPA? Oh, just a light 4.13. 🥱",
      action: "gpaFlex",
    },
    {
      text: "Aced Calculus 1 and 2, and took Calculus 3 just for fun!. 🕹️",
      action: "calculusFlex",
    },
    {
      text: "MACM? Light work. Seems like AI won't be replacing me anytime soon. 💀🤖. 🧩",
      action: "macmJoke",
    },
    {
      text: "Gradient vibes. Because I have commitment issues. 🌅",
      action: "gradientBackground",
    },
    { text: "Let’s make the text bounce. 🏀", action: "bounceText" },
    { text: "And... SPIN! 🌀", action: "spinText" },
    {
      text: "Legend has it CS majors don’t shower. Atleast my code is CLEAN. 🚿✨💻",
      action: "showerFlex",
    },
    {
      text: "I’m not sleep-deprived, I’m just running on an infinite loop with a memory leak. 💤💻",
      action: "debugJoke",
    },
    {
      text: "Okay okay, let me stop flexing. Time to lock in. 🔒",
      action: "prepareWebsite",
    },
    {
      text: "Building something professional now... 🛠️",
      action: "buildWebsite",
    },
  ];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);
  const [actionTriggered, setActionTriggered] = useState(false);
  const [showWebsite, setShowWebsite] = useState(false);
  const textElementRef = useRef(null);

  useEffect(() => {
    if (showWebsite) return;

    let timeout;
    const currentSentence = sentences[currentSentenceIndex]?.text || "";

    if (!isDeleting) {
      if (displayedText.length < currentSentence.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentSentence.slice(0, displayedText.length + 1));
        }, speed);
      } else {
        if (!actionTriggered) {
          performAction(sentences[currentSentenceIndex]?.action);
          setActionTriggered(true);
        }
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentSentence.slice(0, displayedText.length - 1));
        }, speed / 1.5);
      } else {
        setIsDeleting(false);
        setActionTriggered(false);
        if (currentSentenceIndex + 1 < sentences.length) {
          setCurrentSentenceIndex((prev) => prev + 1);
        } else {
          setShowWebsite(true);
        }
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayedText,
    isDeleting,
    currentSentenceIndex,
    sentences,
    speed,
    actionTriggered,
    showWebsite,
  ]);

  const performAction = (action) => {
    const textElement = textElementRef.current;
    const body = document.body;

    if (!textElement) return;

    switch (action) {
      case "gradientBackground":
        body.classList.add("gradientBackground");
        break;
      case "errorShake":
        textElement.classList.add("shake");
        break;
      case "glowText":
        textElement.classList.add("glow");
        break;
      case "bounceText":
        textElement.classList.add("bounce");
        break;
      case "spinText":
        textElement.classList.add("spin-once");
        break;
      default:
        console.warn(`⚠️ Unknown action: ${action}`);
    }
  };

  const skipToWebsite = () => {
    setShowWebsite(true);
  };

  return (
    <div>
      {!showWebsite ? (
        <div className="container">
          <h1 ref={textElementRef} className="typing-animation">
            {displayedText}
            <span className="cursor">|</span>
          </h1>
          <button className="skip-button" onClick={skipToWebsite}>
            Skip to Website 🚀
          </button>
        </div>
      ) : (
        <>
          {/* 🧭 Navigation */}
          <nav>
            <h1 className="logo">Sukhman</h1>
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          {/* 🏠 Hero Section */}
          <section id="hero" className="hero">
            <div className="hero-content">
              <h1>Hello, I’m Sukhman</h1>
              <p>Other people see code. I see poetry in motion</p>
              <div className="buttons">
                <a href="#contact" className="button button-primary">
                  Hire Me 🚀
                </a>
                <a href="#projects" className="button button-secondary">
                  My Work 📂
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img src={profileImage} alt="Sukhman" />
            </div>
          </section>

          <section id="about">
            <h2>About Me</h2>
            <div class="about-container">
              <img
                src={pi1}
                alt="Descriptive Text for pi1"
                className="rounded-image"
              />

              <div class="about-text">
                <p>
                  I'm a creative developer blending code with storytelling. I
                  currently study Computer Science at
                  <strong>Simon Fraser University (SFU)</strong>, where I've
                  maintained an impressive <strong>GPA over 4.0</strong>. I've
                  achieved the <strong>highest marks</strong> in challenging
                  courses like <strong>Calculus I, II, III</strong>, and
                  <strong>MACM (Discrete Mathematics)</strong>, showcasing my
                  strong analytical and problem-solving skills. I’ve also gained
                  valuable experience through a{" "}
                  <strong>small internship</strong>, where I applied my
                  technical knowledge in real-world projects. Beyond my academic
                  pursuits, I actively <strong>tutor students</strong> who are
                  struggling with <strong>programming</strong> concepts or
                  tackling
                  <strong>advanced mathematics</strong>, helping them build
                  confidence and succeed academically. My passion lies in
                  creating meaningful projects while empowering others through
                  knowledge sharing.
                </p>
                <p>
                  In the future, I envision a career in <strong>DevOps</strong>,{" "}
                  <strong>Cybersecurity</strong>, or{" "}
                  <strong>Software Development</strong>. After completing more
                  internships and graduating from university, I plan to pursue a{" "}
                  <strong>Master's degree</strong> in Computer Science.
                  Alternatively, I may blend my programming expertise with my
                  strong foundation in <strong>law</strong>, where I've also
                  maintained a <strong>4.0 GPA</strong>
                  in my lower law courses. My goal is to combine my technical
                  and legal knowledge to attend <strong>Law School</strong> and
                  fight against
                  <strong>cybercrime</strong>, advocating for justice in the
                  digital age.
                </p>
              </div>
            </div>
          </section>

          {/* 💼 Projects */}
          <section id="projects">
            <h2>Projects</h2>
            <p className="project-intro">
              I've worked on a variety of projects, including complex backend
              systems like a deep web crime scraper and my own custom antivirus
              software. However, I’ve chosen to showcase some of my front-end
              projects here — ones that are easy to explore, even for those with
              less programming experience. If you're curious about my backend
              work and want to dive deeper into the technical side, feel free to
              check out my GitHub for more
            </p>
            <div className="project-grid">
              <div className="project-card">
                <h3>Project 1</h3>
                <p>
                  A collaborative cloud-based application showcasing dynamic
                  front-end design.
                </p>
                <a
                  href="https://ramtin-mandom.github.io/Cloud-14-Project/"
                  className="button button-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project 🚀
                </a>
              </div>
              <div className="project-card">
                <h3>Project 2</h3>
                <p>
                  An interactive hangman game built with modern front-end
                  technologies.
                </p>
                <a
                  href="https://sukhmanshangman.netlify.app/"
                  className="button button-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Play Hangman 🎮
                </a>
              </div>
            </div>
          </section>

          {/* 📬 Contact */}
          <section id="contact">
            <h2>Contact Me</h2>
            <p className="contact-intro">
              I look forward to hearing from you! Whether it's about
              collaboration, project opportunities, or just a casual chat about
              tech and innovation, feel free to reach out.
            </p>
            <a
              href="mailto:sukhmanqe@gmail.com"
              className="button button-primary"
            >
              Email Me 📧
            </a>
            <p className="goodbye-message">
              Thanks for stopping by, and I hope to connect soon. Have a
              fantastic day! 🚀✨
            </p>
          </section>

          {/* 🦶 Footer */}
          <footer>&copy; 2024 Sukhman. All rights reserved.</footer>
        </>
      )}
    </div>
  );
}

export default App;
