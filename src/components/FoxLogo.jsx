import { FOX_POSES } from '../data/fox';

const colorClassMap = {
  'O': 'bg-[#2d2d2d]',
  'F': 'bg-[#ff7b00]',
  'W': 'bg-[#ffffff]',
  'P': 'bg-[#ff9eaa]',
  'R': 'bg-[#8b2b2b]',
  'D': 'bg-[#5c1b1b]',
  'B': 'bg-[#3498db]',
  'A': 'bg-[#bdc3c7]',
  'C': 'bg-[#34495e]',
  'N': 'bg-[#50fa7b]',
  'Z': 'bg-[#f1fa8c]',
  ' ': 'bg-transparent'
};

export const FoxLogo = ({ small, pose = 'default' }) => {
  const pixelClass = small ? 'w-1 h-1 shrink-0' : 'w-2 h-2 shrink-0';
  const pixels = FOX_POSES[pose] || FOX_POSES.default;
  return (
    <div
      aria-hidden="true"
      role="presentation"
      className="flex flex-col leading-none select-none items-center"
    >
      {pixels.map((row, i) => (
        <div key={i} className="flex">
          {row.split('').map((char, j) => (
            <div 
              key={j} 
              className={`${pixelClass} ${colorClassMap[char] || 'bg-transparent'}`} 
            />
          ))}
        </div>
      ))}
    </div>
  );
};
