'use client'

import Image from 'next/image'
import Link from 'next/link'
import { aboutConfig } from '@/config/about'
import RepositoryGrid from '@/components/repo-grid'
import LinkButton from '@/components/link-button'
import InfoSection from '@/components/info-section'

export default function Home() {
  function getAge() {
    // Calculate age with 3 decimals, birthday format: YYYY-MM-DD
    return (
      (new Date().getTime() - new Date(aboutConfig.birthdate).getTime()) /
      31556952000
    )
  }

  return (
    <main className='flex flex-col justify-center gap-10 max-w-3xl pl-4 pr-4'>
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
          I am a ~{getAge().toFixed(3)} year old developer from Germay. I&apos;m
          interested in web development, game development and software
          development in general.
        </p>
      </div>

      {/* What do I do? */}
      <InfoSection
        title='What do I do?'
        details='I am a full stack developer, but I mainly focus on frontend development.'
      />

      {/* My GitHub Repos */}
      <InfoSection
        title='GitHub Repositories 📦'
        details='Here are some of my pinned repositories:'
      >
        <RepositoryGrid />
      </InfoSection>

      {/* My Skills */}
      <InfoSection
        title='Technologies 🛠'
        details='Here are some of the tools I use:'
      >
        {/* Tools Grid */}
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

      {/* Contact me */}
      <InfoSection
        title='Get in touch 📧'
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
