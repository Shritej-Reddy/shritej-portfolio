interface GitHubStats {
  repositories: number;
  commits: number;
  linesOfCode: number;
  projects?: number;
}

export async function getGitHubStats(username: string): Promise<GitHubStats | null> {
  try {
    // Get user info
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    
    if (!userRes.ok) {
      throw new Error('Failed to fetch user data');
    }
    
    const user = await userRes.json();
    
    // Get all repositories
    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      {
        next: { revalidate: 3600 },
      }
    );
    
    if (!reposRes.ok) {
      throw new Error('Failed to fetch repositories');
    }
    
    const repos = await reposRes.json();
    
    // Calculate approximate commits (this is an estimate)
    // For accurate commits, you'd need to fetch each repo's stats
    // which requires authentication and is rate-limited
    const commits = repos.length * 50; // Rough estimate
    
    // Calculate approximate lines of code (very rough estimate)
    // For accurate LOC, you'd need to use GitHub's API with authentication
    const linesOfCode = repos.length * 5000; // Rough estimate in thousands
    
    return {
      repositories: user.public_repos || repos.length,
      commits: Math.floor(commits),
      linesOfCode: Math.floor(linesOfCode / 1000), // Convert to K
      projects: repos.length, // Use repos as projects
    };
  } catch (error) {
    console.error('GitHub API error:', error);
    return null;
  }
}
