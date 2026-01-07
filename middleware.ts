import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export function middleware(request: NextRequest) {
  // Serve the exact static HTML file for the root path
  if (request.nextUrl.pathname === '/') {
    try {
      const htmlPath = join(process.cwd(), 'public', 'index.html');
      const htmlContent = readFileSync(htmlPath, 'utf-8');
      return new NextResponse(htmlContent, {
        headers: {
          'Content-Type': 'text/html',
        },
      });
    } catch (error) {
      console.error('Error reading HTML file:', error);
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/',
};

