import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import UserImage from '@/assets/img/user.png'

const UserAvatarNav: FC = () => {
  return (
    <Link
      href="/profile"
      className="flex h-48 w-48 items-center justify-center overflow-hidden rounded-full"
    >
      <Image src={UserImage} alt="" width={48} height={48}></Image>
    </Link>
  )
}

export default UserAvatarNav
