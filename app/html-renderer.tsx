'use client';

import { useEffect, useRef } from 'react';

interface HTMLRendererProps {
  bodyContent: string;
  headScripts: Array<{ attrs: string; content: string }>;
  bodyScripts: Array<{ attrs: string; content: string }>;
}

export default function HTMLRenderer({ bodyContent, headScripts, bodyScripts }: HTMLRendererProps) {
  const scriptsExecuted = useRef(false);
  
  useEffect(() => {
    // Prevent scripts from running multiple times
    if (scriptsExecuted.current) return;
    scriptsExecuted.current = true;
    
    // Execute head scripts first
    headScripts.forEach((script) => {
      const srcMatch = script.attrs.match(/src=["']([^"']+)["']/i);
      if (srcMatch) {
        const scriptEl = document.createElement('script');
        scriptEl.src = srcMatch[1];
        scriptEl.async = false;
        document.head.appendChild(scriptEl);
      } else if (script.content.trim()) {
        const scriptEl = document.createElement('script');
        scriptEl.textContent = script.content;
        document.head.appendChild(scriptEl);
      }
    });
    
    // Execute body scripts after a short delay to ensure DOM is ready
    setTimeout(() => {
      bodyScripts.forEach((script) => {
        const srcMatch = script.attrs.match(/src=["']([^"']+)["']/i);
        if (srcMatch) {
          const scriptEl = document.createElement('script');
          scriptEl.src = srcMatch[1];
          document.body.appendChild(scriptEl);
        } else if (script.content.trim()) {
          // Use eval or create script element
          try {
            const scriptEl = document.createElement('script');
            scriptEl.textContent = script.content;
            document.body.appendChild(scriptEl);
          } catch (e) {
            console.error('Error executing script:', e);
          }
        }
      });
    }, 100);
  }, [headScripts, bodyScripts]);
  
  return <div dangerouslySetInnerHTML={{ __html: bodyContent }} />;
}

