'use client'
import clsx from 'clsx'
import { FC } from 'react'

type Props = {
  expanded?: boolean
}

const PostsCardContent: FC<Props> = ({ expanded }) => {
  return (
    <p
      className={clsx(
        expanded ? 'line-clamp-none' : 'line-clamp-[7]',
        'leading-normal text-white/80 text-16'
      )}
    >
      Lorem ipsum dolor sit amet consectetur. Libero amet justo imperdiet
      pulvinar quis interdum a. Scelerisque quisque vel lacinia tristique
      viverra quam. Id habitant ullamcorper in sollicitudin iaculis consectetur.
      Eu aliquam malesuada nullam id facilisis vulputate pharetra.
      <br />
      <br />
      Amet integer condimentum quam pulvinar nibh. Integer proin eget orci nisl
      lectus faucibus velit ut auctor. In tincidunt in eu quisque mollis nisi.
      Aliquam at aliquet nunc massa cras arcu nibh tempus. Suspendisse id vel
      pharetra risus. Faucibus fusce ullamcorper et sapien. Suspendisse id vel
      pharetra risus. Faucibus fusce ullamcorper et sapien. Suspendisse id vel
      pharetra risus. Faucibus fusce ullamcorper et sapien. Suspendisse id vel
      pharetra risus. Faucibus fusce ullamcorper et sapien. Suspendisse id vel
      pharetra risus. Faucibus fusce ullamcorper et sapien.Suspendisse id vel
      pharetra risus. Faucibus fusce ullamcorper et sapien. Suspendisse id vel
      pharetra risus. Faucibus fusce ullamcorper et sapien.Suspendisse id vel
      pharetra risus. Faucibus fusce ullamcorper et sapien. Suspendisse id vel
      pharetra risus. Faucibus fusce ullamcorper et sapien.Suspendisse id vel
      pharetra risus. Faucibus fusce ullamcorper et sapien. Suspendisse id vel
      pharetra risus. Faucibus fusce ullamcorper et sapien.Suspendisse id vel
      pharetra risus. Faucibus fusce ullamcorper et sapien. Suspendisse id vel
      pharetra risus. Faucibus fusce ullamcorper et sapien.Suspendisse id vel
      pharetra risus. Faucibus fusce ullamcorper et sapien. Suspendisse id vel
      pharetra risus. Faucibus fusce ullamcorper et sapien.
    </p>
  )
}

export default PostsCardContent
