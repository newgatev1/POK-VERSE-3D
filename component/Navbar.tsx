"use client";

import { Sparkles, Layers, Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <Sparkles size={25} />
        <span>POKÉVERSE</span>
      </div>

      <div className="nav-links">
        <a href="#">Discover</a>
        <a href="#collection">Collection</a>
        <a href="#rarity">Rarity</a>
      </div>

      <button className="explore-button">
        <Search size={16} />
        Explore
      </button>
    </nav>
  );
}
