import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export function middleware(request: NextRequest) {
  // Serve the exact static HTML file for the root path
  if (request.nextUrl.pathname === '/') {
    try {
      const htmlPath = join(process.cwd(), 'public', 'index.html');
      let htmlContent = readFileSync(htmlPath, 'utf-8');
      
      // Remove DOCTYPE, html, head, and body tags since Next.js will add them
      // But keep all the content inside
      htmlContent = htmlContent.replace(/<!DOCTYPE html>/i, '');
      htmlContent = htmlContent.replace(/<html[^>]*>/i, '');
      htmlContent = htmlContent.replace(/<\/html>/i, '');
      
      // Extract head content (styles, scripts, meta)
      const headMatch = htmlContent.match(/<head[^>]*>([\s\S]*)<\/head>/i);
      const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*)<\/body>/i);
      
      if (headMatch && bodyMatch) {
        // Create a proper HTML response with the full structure
        const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
${headMatch[1]}
</head>
<body>
${bodyMatch[1]}
</body>
</html>`;
        
        return new NextResponse(fullHtml, {
          headers: {
            'Content-Type': 'text/html; charset=utf-8',
          },
        });
      }
    } catch (error) {
      console.error('Error reading HTML file:', error);
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/',
};
