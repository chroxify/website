'use client'

import { RepositoryCardSkeleton, RepositoryCard } from './repo-card'
import { Repository } from '@/types/github'

export default function RepositoryGrid({ repos }: { repos: Repository[] }) {
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
