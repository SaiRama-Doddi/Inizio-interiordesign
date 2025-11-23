import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import LLM from "../src/pages/LLM.tsx";

const path = window.location.pathname;
createRoot(document.getElementById('root')!).render(
  <StrictMode>
   {path === "/llm" ? <LLM /> : <App />}
  </StrictMode>,
)
