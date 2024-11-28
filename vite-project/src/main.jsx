import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

function MyApp() {
  const reactElement = {
    type: 'a',
    props: {
      href: 'https://google.com',
      target: '_blank',
    },
    children: 'Click me to visit Google',
  };

  return (
    <div>
      <h1>Custom App!</h1>
      <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        Visit Google
      </a>
    </div>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MyApp />
  </StrictMode>
);
