import { readFileSync } from 'fs';
import { join } from 'path';
import HTMLRenderer from './html-renderer';

export default function Home() {
  // Read the exact HTML file on the server
  const htmlPath = join(process.cwd(), 'public', 'index.html');
  let htmlContent: string;
  
  try {
    htmlContent = readFileSync(htmlPath, 'utf-8');
  } catch (error) {
    console.error('Error reading HTML file:', error);
    throw new Error(`Could not find public/index.html at ${htmlPath}. Current working directory: ${process.cwd()}`);
  }
  
  // Extract body content (everything inside <body> tags)
  const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  let bodyContent = bodyMatch ? bodyMatch[1] : htmlContent;
  
  // Extract head content for styles
  const headMatch = htmlContent.match(/<head[^>]*>([\s\S]*)<\/head>/i);
  const headContent = headMatch ? headMatch[1] : '';
  
  // Extract style tag content
  const styleMatch = headContent.match(/<style[^>]*>([\s\S]*)<\/style>/i);
  const styles = styleMatch ? styleMatch[1] : '';
  
  // Extract script tags from head
  const headScriptMatches = headContent.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/gi);
  const headScripts = Array.from(headScriptMatches).map(script => ({
    attrs: script[1],
    content: script[2],
  }));
  
  // Extract script tags from body
  const bodyScriptMatches = bodyContent.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/gi);
  const bodyScripts = Array.from(bodyScriptMatches).map(script => ({
    attrs: script[1],
    content: script[2],
  }));
  
  // Remove script tags from body content
  const bodyWithoutScripts = bodyContent.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  
  return (
    <>
      {styles && <style dangerouslySetInnerHTML={{ __html: styles }} />}
      <HTMLRenderer 
        bodyContent={bodyWithoutScripts}
        headScripts={headScripts}
        bodyScripts={bodyScripts}
      />
    </>
  );
}
