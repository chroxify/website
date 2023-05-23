type SectionProps = {
  title: string
  details: string | React.ReactNode
  children?: React.ReactNode
}

export default function InfoSection({
  title,
  details,
  children,
}: SectionProps) {
  return (
    <div className='flex flex-col justify-center gap-5 w-full'>
      <h1 className='text-2xl md:text-3xl font-bold'>{title}</h1>
      {typeof details === 'string' ? (
        <p className='text-base md:text-lg font-light text-white/50'>
          {details}
        </p>
      ) : (
        <div className='text-base md:text-lg font-light text-white/50'>
          {details}
        </div>
      )}
      {children && <>{children}</>}
    </div>
  )
}
