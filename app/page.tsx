'use client'

import React, { useState, useEffect } from "react";
import "../globals.css";


const BrownBearPage = () => {
  const [iframeSrc, setIframeSrc] = useState("");
  const [showText, setShowText] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState("hwb(221 16% 0%)");

  useEffect(() => {
    // Load iframe content dynamically after the initial render
    setIframeSrc("https://en.wikipedia.org/wiki/HTML_element#Frames");
  }, []);

  const toggleText = () => {
    setShowText(!showText);
  };

  const changeBackgroundColor = () => {
    // You can change the color as per your requirement
    setBackgroundColor(showText ? "hwb(50 80% 70%)" : "hwb(221 16% 0%)");
  };

  return (
    <div style={{ backgroundColor }}>
      <div>
        <h1>About Me</h1>
        {showText && (
          <p>
            My name is Michael Asulin and I am a CS student in the{" "}
            <strong>Hebrew University!</strong>
            <br />
            <br />
            Now I will give you a <strong>list</strong> of things you maybe did not know about me:
          </p>
        )}
        {showText && (
          <ul>
            <li>It is my first website!</li>
            <li>It is the first list on my website!</li>
            <li>
              I have a video on YouTube where I do parkour, and you can see it if you click{" "}
              <em>
                <a href="https://www.youtube.com/watch?v=NJVgryw5XvI&pp=ygUObW3VsaW4%3D">here</a>
              </em>
            </li>
          </ul>
        )}
      </div>
      <div>
        <br />
        <br />
        <p>
          Since it is my first web page, I will give you below a window to some random website:
          <br />
          <iframe src={iframeSrc} width="700" height="500"></iframe>
        </p>
      </div>
      <div>
        <h1>SUMMARY</h1>
        {showText && (
          <p>
            It was a lovely exercise, so here is an image of a bear:
            <br />
            <img src="https://content.codecademy.com/courses/web-101/web101-image_brownbear.jpg" alt="A Brown Bear" />
          </p>
        )}
      </div>
      <div>
        <button onClick={toggleText}>Toggle Text</button>
        <button onClick={changeBackgroundColor}>Change Background Color</button>
      </div>
    </div>
  );
}

export default BrownBearPage;


