import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Router/index.ts'
import { ThemeProvider } from './providers/theme-provider.tsx'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'
import { Toaster } from './components/ui/sonner.tsx'
import { TooltipProvider } from '@/components/ui/tooltip.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <TooltipProvider>
        <ThemeProvider
          defaultTheme='system'
          storageKey='vite-ui-theme'>
          <RouterProvider router={router} />
          <Toaster richColors />
        </ThemeProvider>
      </TooltipProvider>
    </Provider>
  </StrictMode>
)
