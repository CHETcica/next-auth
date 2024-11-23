"use client";
import React from "react";
import Navbar from "../components/Navbar";

function WelcomePage() {
  return (
    <><Navbar />
      <div className="container mx-auto">
        
        <h3 className="text-3xl py-3">Welcome</h3>
        <hr className="my-3" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          incidunt architecto obcaecati reprehenderit cum in, illo repudiandae
          facilis quibusdam iusto adipisci modi similique consequatur, sequi
          fugiat, minus illum maxime. Distinctio.
        </p>
      </div>
    </>
  );
}

export default WelcomePage;
