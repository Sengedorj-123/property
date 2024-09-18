"use client";

import Header from "../components/header/Header";
import { Hero } from "../components/hero/Hero";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="w-screen bg-gray-100">
        <Hero />
      </div>
    </div>
  );
};
