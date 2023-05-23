import { RepositoryCardSkeleton, RepositoryCard } from './repo-card'
import { Repository } from '@/types/github'
import { aboutConfig } from '@/config/about'
import { useEffect, useState } from 'react'

export default function RepositoryGrid() {
  const [repos, setRepos] = useState<Repository[]>([])

  type pinnedRepoResponse = {
    repo: string
    description: string
    language: string
    stars: number
    forks: number
    link: string
  }

  async function getGithubRepos() {
    const username = aboutConfig.socials.github

    let data: pinnedRepoResponse[] = []
    await fetch('https://gh-pinned-repos.egoist.dev/?username=' + username)
      .then((response) => response.json())
      .then((pinnedRepos) => {
        console.log(pinnedRepos)
        data = pinnedRepos
      })
      .catch(() => {
        console.error('Error fetching GitHub repos')
      })

    const repos: Repository[] = []

    for (let i = 0; i < data.length; i++) {
      await fetch(
        'https://api.github.com/repos/' + username + '/' + data[i].repo
      )
        .then((response) => response.json())
        .then((repoDetails) => {
          data[i].forks = repoDetails.forks
        })
        .catch((error) => {
          console.error('Error fetching GitHub repo details:', error)
        })

      // Cut down description if it's too long
      if (data[i].description.length > 45) {
        data[i].description = data[i].description.substring(0, 45) + '...'
      }

      repos.push({
        name: data[i].repo,
        description: data[i].description,
        stars: data[i].stars,
        forks: data[i].forks,
        link: data[i].link,
      })
    }

    return repos
  }

  useEffect(() => {
    getGithubRepos().then((repos) => setRepos(repos))
  }, [])

  return (
    <div className='grid md:grid-cols-2 gap-5 w-full'>
      {
        // If there are no repos, show 3 rows of RepoSkeletons
        repos.length === 0
          ? [...Array(6)].map((_, i) => <RepositoryCardSkeleton key={i} />) // eslint-disable-line react/no-array-index-key
          : repos.map((repo, index) => (
              <RepositoryCard
                key={index}
                name={repo.name}
                description={repo.description}
                stars={repo.stars}
                forks={repo.forks}
                link={repo.link}
              />
            ))
      }
    </div>
  )
}
