"use client";

import { useState } from "react";

interface Props {
  name: string;
  type: string;
  number: string;
  rarity: string;
  color: string;
  emoji: string;
}

export default function PokemonCard({
  name,
  type,
  number,
  rarity,
  color,
  emoji,
}: Props) {
  const [rotation, setRotation] = useState({
    x: 0,
    y: 0,
  });

  function handleMove(e: React.PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setRotation({
      x: (0.5 - y) * 25,
      y: (x - 0.5) * 25,
    });
  }

  function resetCard() {
    setRotation({ x: 0, y: 0 });
  }

  return (
    <div
      className="card-scene"
      onPointerMove={handleMove}
      onPointerLeave={resetCard}
    >
      <div
        className="pokemon-card"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          background: `linear-gradient(145deg, ${color}, #101020 75%)`,
        }}
      >
        <div className="card-shine" />

        <div className="card-content">
          <div className="card-top">
            <span>#{number}</span>
            <span>{type}</span>
          </div>

          <h2>{name}</h2>

          <div className="pokemon-art">
            <span>{emoji}</span>
          </div>

          <div className="card-info">
            <span>{rarity}</span>
            <span>POKÉVERSE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
