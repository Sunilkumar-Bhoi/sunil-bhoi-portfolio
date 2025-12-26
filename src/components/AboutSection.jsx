import React, { forwardRef } from 'react';

const AboutSection = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="glass">
          <div className="about-content">
            <p>
              I am a Computer Engineering student in my 8th semester with a strong focus on
              embedded systems, C programming, and Linux. I am set to begin my Embedded Systems
              internship at eInfochips in January, and I am currently strengthening my
              fundamentals through hands-on practice and small system-level projects. I believe
              in learning by building and debugging rather than memorizing theory, and I enjoy
              working close to the hardware to understand how software actually behaves in real
              systems. My goal is to develop solid practical skills, improve my problem-solving
              ability, and grow into a dependable embedded engineer with a strong foundation in
              low-level programming and system design.
            </p>
          </div>
          <div className="focus-areas">
            <div className="focus-item">C Programming</div>
            <div className="focus-item">Linux</div>
            <div className="focus-item">Scripting</div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;