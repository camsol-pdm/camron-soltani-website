import { readFileSync } from 'fs';
import { join } from 'path';
import Script from 'next/script';

export default function Home() {
  // Read the exact HTML file
  const htmlPath = join(process.cwd(), 'public', 'index.html');
  const htmlContent = readFileSync(htmlPath, 'utf-8');
  
  // Extract body content (everything inside <body> tags)
  const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const bodyContent = bodyMatch ? bodyMatch[1] : htmlContent;
  
  // Extract head content for styles and scripts
  const headMatch = htmlContent.match(/<head[^>]*>([\s\S]*)<\/head>/i);
  const headContent = headMatch ? headMatch[1] : '';
  
  // Extract style tag content
  const styleMatch = headContent.match(/<style[^>]*>([\s\S]*)<\/style>/i);
  const styles = styleMatch ? styleMatch[1] : '';
  
  // Extract all script tags (both with src and inline)
  const scriptMatches = headContent.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/gi);
  const scripts = Array.from(scriptMatches);
  
  // Extract scripts from body too (there might be scripts in the body)
  const bodyScriptMatches = bodyContent.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/gi);
  const bodyScripts = Array.from(bodyScriptMatches);
  
  // Remove script tags from body content
  const bodyWithoutScripts = bodyContent.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  
  return (
    <>
      {styles && <style dangerouslySetInnerHTML={{ __html: styles }} />}
      {/* Load external scripts first */}
      {scripts.map((script, i) => {
        const attrs = script[1];
        const content = script[2];
        const srcMatch = attrs.match(/src=["']([^"']+)["']/i);
        
        if (srcMatch) {
          return <Script key={`head-${i}`} src={srcMatch[1]} strategy="beforeInteractive" />;
        }
        if (content.trim()) {
          return <Script key={`head-${i}`} id={`script-${i}`} strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: content }} />;
        }
        return null;
      })}
      {/* Render body content */}
      <div dangerouslySetInnerHTML={{ __html: bodyWithoutScripts }} />
      {/* Load body scripts after content */}
      {bodyScripts.map((script, i) => {
        const attrs = script[1];
        const content = script[2];
        const srcMatch = attrs.match(/src=["']([^"']+)["']/i);
        
        if (srcMatch) {
          return <Script key={`body-${i}`} src={srcMatch[1]} strategy="afterInteractive" />;
        }
        if (content.trim()) {
          return <Script key={`body-${i}`} id={`body-script-${i}`} strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: content }} />;
        }
        return null;
      })}
    </>
  );
}
