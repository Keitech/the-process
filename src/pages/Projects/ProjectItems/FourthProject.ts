import smartyEmailImg from 'assets/smartyEmailImg.png';

export const FourthProject = {
  id: 4,
  name: 'Smarty Email',
  desc: 'An AI-assisted Gmail inbox that scores message importance and learns from your labels to improve future recommendations.',
  longDesc: `Smarty Email is a Gmail-connected inbox that ranks messages by importance so you can triage faster. A FastAPI backend syncs mail through OAuth, scores each message with OpenAI embeddings and a PyTorch classifier trained on your feedback, and a Next.js UI lets you review scores and label what’s important—so recommendations improve from similar past mail and your decisions over time.`,
  link: '',
  img: smartyEmailImg,
  technology: ['NextJS', 'TypeScript', 'FastAPI', 'OpenAI API', 'PyTorch', 'OAuth', 'SQLAlchemy'],
  year: 2026,
  date: '2026',
  online: true,
};
