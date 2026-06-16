const fs = require('fs');
const pageJsPath = 'src/app/page.js';
let content = fs.readFileSync(pageJsPath, 'utf8');

const images = [
  { file: 'landing-page.svg', title: 'Landing Page' },
  { file: 'hack-details.svg', title: 'Hackathon Details' },
  { file: 'profile.svg', title: 'User Profile' },
  { file: 'profile-projects.svg', title: 'Profile Projects' },
  { file: 'submission.svg', title: 'Project Submission' },
  { file: 'track-submission.svg', title: 'Track Submissions' },
  { file: 'leaderboard.svg', title: 'Leaderboard' },
  { file: 'hack-cafe.svg', title: 'Hack Cafe' }
];

const htmlItems = images.map(img => `<div><img src="/hack-portal/${img.file}" style="width: 100%; height: auto; border-radius: 6px; background-color: #AF2997; border: 1px solid var(--accent-muted);" /><div style="text-align: center; color: var(--text-secondary); font-size: 0.9em; margin-top: 8px; font-weight: bold;">${img.title}</div></div>`).join('');

const newDetails = `A comprehensive design for the ACM Hackathon portal, featuring a sleek user interface for registration, submissions, and leaderboards.\\n\\n**App Previews**\\n<div style="display: flex; flex-direction: column; gap: 25px; margin-top: 15px;">${htmlItems}</div>`;

const regex = /details: \`A comprehensive design for the ACM Hackathon portal.*?\`,/s;
content = content.replace(regex, `details: \`${newDetails}\`,`);

fs.writeFileSync(pageJsPath, content);
console.log('Fixed hackathon details!');
