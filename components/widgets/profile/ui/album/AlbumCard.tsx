import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

type Props = {
  className?: string
  image?: string
  id?: number | string
  restricted?: boolean
}
const AlbumCard: FC<Props> = ({ className, image, id, restricted = false }) => {
  return (
    <article
      className={clsx(
        'relative flex items-center justify-center overflow-hidden rounded-[14px]',
        {
          'after:absolute after:inset-[-5px] after:z-[2] after:block after:bg-purple after:opacity-50':
            restricted
        },
        className
      )}
    >
      <Image
        src={image || ''}
        width={300}
        height={300}
        alt={id ? String(id) : ''}
        className={clsx('relative z-[1] block h-[105%] w-[105%] object-cover', {
          'blur-[10px]': restricted
        })}
      />
    </article>
  )
}

export default AlbumCard
