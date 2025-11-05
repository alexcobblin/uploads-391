"use client"
import { useState, useEffect } from "react";
import getData from "@/lib/getData";
import { CatType } from "@/types/CatTypes";
import "../style.css";

export default function CatCaller() {
  const [cats, setCats] = useState<CatType[]>([]);
  const [showNames, setShowNames] = useState<{ [id: string]: boolean }>({});

  async function loadCats() {
    const data = await getData();
    const catsArray = Array.isArray(data) ? data : [];
    setCats(catsArray);
    setShowNames({});
  }

  useEffect(() => {
    loadCats();
  }, []);

  function toggleName(id: string) {
    setShowNames((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <div className="cat-container">
      <button className="refresh-btn" onClick={loadCats}>
        Show Another Breed
      </button>

      {cats.map((cat: CatType) => (
        <div key={cat.id} className="cat-card">
          <img className="cat-img" src={cat.url} alt={cat.breeds?.[0]?.name} />
          <button className="toggle-btn" onClick={() => toggleName(cat.id)}>
            {showNames[cat.id] ? "Hide Name" : "Show Name"}
          </button>
          {showNames[cat.id] && (
            <h2 className="cat-name">{cat.breeds?.[0]?.name ?? "Unknown Breed"}</h2>
          )}
        </div>
      ))}
    </div>
  );
}