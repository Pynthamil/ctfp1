import React, { useState, useEffect } from 'react';

const symbols = ["·", "✢", "✳", "✶", "✻", "✽"];
const words = [
  "Accomplishing",
  "Actioning",
  "Actualizing",
  "Baking",
  "Booping",
  "Brewing",
  "Calculating",
  "Cerebrating",
  "Channelling",
  "Churning",
  "Clauding",
  "Coalescing",
  "Cogitating",
  "Computing",
  "Combobulating",
  "Concocting",
  "Considering",
  "Contemplating",
  "Cooking",
  "Crafting",
  "Creating",
  "Crunching",
  "Deciphering",
  "Deliberating",
  "Determining",
  "Discombobulating",
  "Doing",
  "Effecting",
  "Elucidating",
  "Enchanting",
  "Envisioning",
  "Finagling",
  "Flibbertigibbeting",
  "Forging",
  "Forming",
  "Frolicking",
  "Generating",
  "Germinating",
  "Hatching",
  "Herding",
  "Honking",
  "Ideating",
  "Imagining",
  "Incubating",
  "Inferring",
  "Manifesting",
  "Marinating",
  "Meandering",
  "Moseying",
  "Mulling",
  "Mustering",
  "Musing",
  "Noodling",
  "Percolating",
  "Perusing",
  "Philosophising",
  "Pontificating",
  "Pondering",
  "Processing",
  "Puttering",
  "Puzzling",
  "Reticulating",
  "Ruminating",
  "Scheming",
  "Schlepping",
  "Shimmying",
  "Simmering",
  "Smooshing",
  "Spelunking",
  "Spinning",
  "Stewing",
  "Sussing",
  "Synthesizing",
  "Thinking",
  "Tinkering",
  "Transmuting",
  "Unfurling",
  "Unravelling",
  "Vibing",
  "Wandering",
  "Whirring",
  "Wibbling",
  "Working",
  "Wrangling"
];

export const ThinkingIndicator = () => {
  const [word, setWord] = useState('');
  const [symbolIndex, setSymbolIndex] = useState(0);

  // Word selection logic (random, updates every 10s)
  useEffect(() => {
    const updateWord = () => {
      const randomIndex = Math.floor(Math.random() * words.length);
      setWord(words[randomIndex] + '…');
    };
    updateWord();
    const interval = setInterval(updateWord, 10000);
    return () => clearInterval(interval);
  }, []);

  // Symbol animation logic (cycles through symbols, bouncing direction, updates every 250ms)
  useEffect(() => {
    let directionUp = true;
    const updateSymbol = () => {
      setSymbolIndex((prev) => {
        let next = prev;
        if (prev >= symbols.length - 1) {
          directionUp = false;
        } else if (prev <= 0) {
          directionUp = true;
        }
        
        if (directionUp) {
          next = prev + 1;
        } else {
          next = prev - 1;
        }
        
        // Ensure within bounds
        return Math.max(0, Math.min(symbols.length - 1, next));
      });
    };
    
    const interval = setInterval(updateSymbol, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: "'Menlo', 'Monaco', 'SF Mono', 'Consolas', monospace",
      fontSize: '15px',
      color: 'var(--accent)',
      marginBottom: '24px',
      paddingLeft: '4px'
    }} role="status" aria-live="polite">
      <span style={{ 
        width: '18px', 
        textAlign: 'center',
        display: 'inline-block',
        fontWeight: 'bold'
      }}>
        {symbols[symbolIndex]}
      </span>
      <span>
        {word}
        <span style={{ color: 'var(--text-muted)', marginLeft: '8px', fontSize: '13px' }}>
          (esc to interrupt)
        </span>
      </span>
    </div>
  );
};
