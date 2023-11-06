import { FC } from 'react'

import { Button } from '@/components/shared/button'

import LadderTableList from './LadderTableList'
import LadderTableListItem from './LadderTableListItem'
import LadderUserCard from './LadderUserCard'

const LadderTablePreview: FC = () => {
  return (
    <>
      <section>
        <div className="content-box-styles">
          <div className="mb-18">
            <h2 className="font-sf-pre leading-none text-24">Top 3 fans</h2>
          </div>

          <LadderTableList className="mb-18">
            <LadderTableListItem>
              <LadderUserCard
                index={1}
                userName="Brandon Septimus"
                userSlug="@brandizz"
              />
            </LadderTableListItem>
            <LadderTableListItem>
              <LadderUserCard
                index={2}
                userName="Cooper Westervelt"
                userSlug="@west602"
              />
            </LadderTableListItem>
            <LadderTableListItem>
              <LadderUserCard
                index={3}
                userName="Ruben Saris"
                userSlug="@sarisss"
              />
            </LadderTableListItem>
          </LadderTableList>

          <div className="flex flex-col items-stretch">
            <Button variant="outlined-secondary">Показать всех</Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default LadderTablePreview
