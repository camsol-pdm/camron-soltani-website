import { readFileSync } from 'fs';
import { join } from 'path';

export default function Home() {
  // Read the exact HTML file from public folder
  const htmlPath = join(process.cwd(), 'public', 'index.html');
  const htmlContent = readFileSync(htmlPath, 'utf-8');
  
  // Extract just the body content (everything between <body> and </body>)
  const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const bodyContent = bodyMatch ? bodyMatch[1] : htmlContent;
  
  // Return the exact HTML content
  return <div dangerouslySetInnerHTML={{ __html: bodyContent }} />;
}
