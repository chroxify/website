import Image from 'next/image'
import Link from 'next/link'
import { aboutConfig } from '@/config/about'
import { infoConfig } from '@/config/info'
import RepositoryGrid from '@/components/repo-grid'
import LinkButton from '@/components/link-button'
import InfoSection from '@/components/info-section'
import { Analytics } from '@vercel/analytics/react'
import { Repository, pinnedRepoResponse } from '@/types/github'

async function getGithubRepos() {
  const username = aboutConfig.socials.github

  let data: pinnedRepoResponse[] = []
  let repos: Repository[] = []

  await fetch('https://gh-pinned-repos.egoist.dev/?username=' + username)
    .then((response) => response.json())
    .then((pinnedRepos) => {
      data = pinnedRepos
    })
    .catch(() => {
      console.error('Error fetching GitHub repos')
    })

  for (let i = 0; i < data.length; i++) {
    await fetch('https://api.github.com/repos/' + username + '/' + data[i].repo)
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

  // set repos
  return repos
}

export default async function Home() {
  // Get repos
  const repos = await getGithubRepos()

  function getAge() {
    return (
      (new Date().getTime() - new Date(aboutConfig.birthdate).getTime()) /
      31556952000
    )
  }

  return (
    <main className='flex flex-col justify-center gap-10 max-w-3xl pl-4 pr-4'>
      {/* Vercel Analytics */}
      <Analytics />

      {/* About me */}
      <div className='flex flex-col justify-center gap-5'>
        {/* Socials + Location */}
        <div className='flex flex-row items-center gap-5'>
          <Link href={'https://github.com/' + aboutConfig.socials.github}>
            <Image
              src='/icons/github.svg'
              alt='GitHub'
              width={24}
              height={24}
            />
          </Link>
          <Link href={'https://twitter.com/' + aboutConfig.socials.twitter}>
            <Image
              src='/icons/twitter.svg'
              alt='Twitter'
              width={24}
              height={24}
              className='text-white'
            />
          </Link>

          <LinkButton
            href={'https://maps.google.com/?q=' + aboutConfig.location}
            icon='/icons/location.svg'
            text={aboutConfig.location}
          />
        </div>
        <h1 className='text-4xl md:text-5xl font-bold'>
          Hi, I&apos;m {aboutConfig.name}
        </h1>
        <p className='text-base md:text-lg font-light text-white/50'>
          I am a ~{getAge().toFixed(3)} year old developer from Germany who is
          mainly interested in web development and software development but also
          likes exploring other areas of computer science.
        </p>
      </div>

      {/* About */}
      <InfoSection
        title={infoConfig.about.title}
        details={infoConfig.about.details}
      />

      {/* Projects */}
      <InfoSection
        title={infoConfig.projects.title}
        details={infoConfig.projects.details}
      >
        <RepositoryGrid repos={repos} />
      </InfoSection>

      {/* Technologies */}
      <InfoSection
        title={infoConfig.technologies.title}
        details={infoConfig.technologies.details}
      >
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5'>
          {aboutConfig.technologies.map((skill, index) => {
            return (
              <div
                key={index}
                className='flex flex-row items-center justify-start gap-2 hover:scale-105 transform transition-all duration-200 cursor-default'
              >
                {/* Skill icon */}
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={25}
                  height={25}
                  className='rounded-sm'
                />

                {/* Skill name */}
                <p className='text-base font-light text-white/70'>
                  {skill.name}
                </p>
              </div>
            )
          })}
        </div>
      </InfoSection>

      {/* Contact */}
      <InfoSection
        title={infoConfig.contact.title}
        details={
          <>
            You can contact me at any time via{' '}
            <Link
              href={'mailto:' + aboutConfig.email}
              className='text-white/[.85] hover:underline'
            >
              {aboutConfig.email}
            </Link>{' '}
            or one of the following social media platforms
          </>
        }
      >
        {/* Grid with 4 contact buttons */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-5'>
          {/* Twitter */}
          <LinkButton
            href={'https://twitter.com/' + aboutConfig.socials.twitter}
            icon='/icons/twitter.svg'
            text={aboutConfig.socials.twitter}
          />

          {/* Discord */}
          <LinkButton
            href={'https://discord.com/users/' + aboutConfig.socials.discord.id}
            icon='/icons/discord.svg'
            text={aboutConfig.socials.discord.name}
          />

          {/* LinkedIn */}
          <LinkButton
            href={'https://linkedin.com/in/' + aboutConfig.socials.linkedin}
            icon='/icons/linkedin.svg'
            text={aboutConfig.socials.linkedin}
          />
        </div>
      </InfoSection>
    </main>
  )
}
