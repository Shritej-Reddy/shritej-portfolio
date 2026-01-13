import { NextResponse } from 'next/server';
import { getGitHubStats } from '@/lib/github';

export const dynamic = 'force-dynamic'; // Or use 'force-static' with revalidate
export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  try {
    const username = process.env.GITHUB_USERNAME || 'Shritej-Reddy';
    const stats = await getGitHubStats(username);
    
    if (!stats) {
      // Return default values if API fails
      return NextResponse.json({
        repositories: 25,
        projects: 15,
        commits: 500,
        linesOfCode: 50,
      });
    }
    
    return NextResponse.json({
      repositories: stats.repositories,
      projects: stats.projects || stats.repositories,
      commits: stats.commits,
      linesOfCode: stats.linesOfCode,
    });
  } catch (error) {
    console.error('Stats API error:', error);
    // Return default values on error
    return NextResponse.json({
      repositories: 25,
      projects: 15,
      commits: 500,
      linesOfCode: 50,
    });
  }
}
