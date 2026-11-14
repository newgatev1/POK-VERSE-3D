
import Navbar from "@/components/Navbar";
import PokemonCard from "@/components/PokemonCard";

const cards = [
  {
    name: "Charizard",
    type: "FIRE",
    number: "006",
    rarity: "LEGENDARY",
    color: "#c44b20",
    emoji: "🔥",
  },
  {
    name: "Pikachu",
    type: "ELECTRIC",
    number: "025",
    rarity: "RARE",
    color: "#d49d13",
    emoji: "⚡",
  },
  {
    name: "Mewtwo",
    type: "PSYCHIC",
    number: "150",
    rarity: "MYTHIC",
    color: "#7544b9",
    emoji: "🔮",
  },
  {
    name: "Blastoise",
    type: "WATER",
    number: "009",
    rarity: "EPIC",
    color: "#236bb7",
    emoji: "💧",
  },
];

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="hero">
        <p className="eyebrow">THE NEXT GENERATION OF CARD COLLECTING</p>

        <h1>
          ENTER THE
          <br />
          <span>POKÉVERSE.</span>
        </h1>

        <p className="subtitle">
          Discover legendary cards. Experience holographic
          beauty. Explore a new dimension of collecting.
        </p>

        <a href="#collection" className="main-button">
          EXPLORE COLLECTION ↗
        </a>
      </section>

      <section id="collection" className="collection">
        <div className="section-heading">
          <div>
            <p className="eyebrow">YOUR NEXT OBSESSION</p>
            <h2>Featured Cards</h2>
          </div>

          <span>04 COLLECTIONS</span>
        </div>

        <div className="card-grid">
          {cards.map((card) => (
            <PokemonCard key={card.number} {...card} />
          ))}
        </div>
      </section>

      <footer>
        <span>POKÉVERSE 3D</span>
        <span>AN UNOFFICIAL FAN CONCEPT</span>
      </footer>
    </main>
  );
}
