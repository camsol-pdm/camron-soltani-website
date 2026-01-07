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
      
      // Return the complete HTML file exactly as-is
      return new NextResponse(htmlContent, {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
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
