'use client';

import React, { useEffect, useRef } from 'react';

interface HTMLRendererProps {
  bodyContent: string;
  headScripts: Array<{ attrs: string; content: string }>;
  bodyScripts: Array<{ attrs: string; content: string }>;
}

export default function HTMLRenderer({ bodyContent, headScripts, bodyScripts }: HTMLRendererProps) {
  const scriptsExecuted = useRef(false);
  const headScriptsRef = useRef(headScripts);
  const bodyScriptsRef = useRef(bodyScripts);
  
  // Update refs when props change (but don't trigger re-execution)
  headScriptsRef.current = headScripts;
  bodyScriptsRef.current = bodyScripts;
  
  useEffect(() => {
    // Prevent scripts from running multiple times - use global flag
    if (scriptsExecuted.current || (window as any).__scriptsExecuted) {
      return;
    }
    scriptsExecuted.current = true;
    (window as any).__scriptsExecuted = true;
    
    // Execute head scripts first
    headScriptsRef.current.forEach((script: { attrs: string; content: string }) => {
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
      bodyScriptsRef.current.forEach((script: { attrs: string; content: string }) => {
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
  }, []); // Empty dependency array - only run once on mount
  
  return <div dangerouslySetInnerHTML={{ __html: bodyContent }} />;
}

