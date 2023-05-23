import Image from 'next/image'
import Link from 'next/link'

type RepositoryCardProps = {
  key: number
  name: string
  description: string
  stars: number
  forks: number
  link: string
}

export function RepositoryCard(props: RepositoryCardProps) {
  return (
    <Link
      href={props.link}
      className='flex flex-col gap-2 items-start border-[1px] border-white/25 bg-[#141414] hover:border-white/60 rounded-lg p-4 min-w-min min-h-max transition-all duration-[400ms] ease-in-out'
    >
      {/* Name, Stars, Forks */}
      <div className='flex items-center justify-start w-full gap-3'>
        <h1 className='text-base font-bold'>{props.name}</h1>
        {/* Stars */}
        <div className='flex items-center gap-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-4 h-4 fill-yellow-200'
          >
            <path
              fillRule='evenodd'
              d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
              clipRule='evenodd'
            />
          </svg>
          <p className='text-xs font-medium'>{props.stars}</p>
        </div>

        {/* Forks */}
        <div className='flex items-center gap-1'>
          <Image src='/icons/fork.svg' alt='Fork' width={14} height={14} />
          <p className='text-xs font-medium'>{props.forks}</p>
        </div>
      </div>
      {/* Description */}
      <p className='text-sm font-light text-white/50'>{props.description}</p>
    </Link>
  )
}

export function RepositoryCardSkeleton() {
  return (
    <div className='flex flex-col gap-2 items-start border-[1px] border-white/25 bg-[#141414] rounded-lg p-4 min-w-min min-h-max'>
      {/* Name, Stars, Forks */}
      <div className='flex items-center justify-start w-full gap-3'>
        <div className='h-4 w-20 bg-white/10 rounded-lg animate-pulse'></div>
        {/* Stars */}
        <div className='flex items-center gap-1'>
          <div className='h-4 w-8 bg-white/10 rounded-lg animate-pulse'></div>
        </div>

        {/* Forks */}
        <div className='flex items-center gap-1'>
          <div className='h-4 w-8 bg-white/10 rounded-lg animate-pulse'></div>
        </div>
      </div>
      {/* Description */}
      <div className='h-4 w-40 bg-white/10 rounded-lg animate-pulse'></div>
    </div>
  )
}
