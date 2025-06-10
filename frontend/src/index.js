import React from 'react';
import { createRoot } from 'react-dom/client';
import './tailwind.css';    // or './index.css' if you didn’t generate a separate file
import App from './App';

// Find the root div we just restored
const container = document.getElementById('root');
if (!container) {
  throw new Error("Can't find #root element in public/index.html");
}

// Create the root and render
const root = createRoot(container);
root.render(<App />);
