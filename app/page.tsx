import { readFileSync } from 'fs';
import { join } from 'path';

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
  
  // Extract script tags
  const scriptTags = headContent.match(/<script[^>]*>[\s\S]*?<\/script>/gi) || [];
  
  return (
    <>
      {styles && <style dangerouslySetInnerHTML={{ __html: styles }} />}
      {scriptTags.map((script, i) => {
        const srcMatch = script.match(/src=["']([^"']+)["']/i);
        if (srcMatch) {
          return <script key={i} src={srcMatch[1]} />;
        }
        const scriptContent = script.match(/<script[^>]*>([\s\S]*)<\/script>/i);
        if (scriptContent) {
          return <script key={i} dangerouslySetInnerHTML={{ __html: scriptContent[1] }} />;
        }
        return null;
      })}
      <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
    </>
  );
}
