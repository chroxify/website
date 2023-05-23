import Image from 'next/image'
import Link from 'next/link'

type LinkButtonProps = {
  href: string
  icon: string
  text: string
}

export default function LinkButton(props: LinkButtonProps) {
  return (
    <Link
      href={props.href}
      className='flex flex-row items-center justify-center gap-2 bg-[#141414] hover:bg-white/10 border-[1px] border-white/25 rounded-2xl pt-2 pb-2 pl-4 pr-5 min-w-min min-h-max text-xs md:text-sm duration-200 ease-in-out'
    >
      {/* Icon */}
      <Image src={props.icon} alt={props.text} width={20} height={20} />

      {/* Text */}
      {props.text}
    </Link>
  )
}
