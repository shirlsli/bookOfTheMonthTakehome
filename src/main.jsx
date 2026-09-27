import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

async function enableMocking() {
  if (!import.meta.env.DEV) {
    return
  }
  const { setupWorker } = await import ('msw/browser');
  const { handler } = await import('./mock/handler');
  const worker = setupWorker(...handler);
  await worker.start({ onUnhandledRequest: 'bypass' });
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
