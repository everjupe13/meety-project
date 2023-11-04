import clsx from 'clsx'
import { FC, ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PersonalInfo = {
  personal: {
    label: 'Personal informations',
    value: {
      email: {
        label: 'E-mail',
        value: 'strangerneighbor@mail.com'
      },
      sex: {
        label: 'Sex',
        value: 'Female'
      },
      birthDate: {
        label: 'Date of birth',
        value: '10.04.97'
      },
      residence: {
        label: 'Place of residence',
        value: 'Moscow'
      }
    }
  },
  about: {
    label: 'About me',
    value: {
      education: {
        label: 'Education',
        value: 'High school'
      },
      professionInfo: {
        label: 'My profession',
        value: 'Streamer'
      },
      personalInformation: {
        label: 'Personal information',
        value:
          'I like skiing and playing badminton! Like delicious cookies and jam, like watching movies and collecting anime stickers'
      }
    }
  },
  hobbies: {
    label: 'My hobbies',
    value: {
      interestTags: {
        label: 'Interest tags',
        value: ''
      },
      interests: [
        {
          label: 'My interests',
          value:
            'I like skiing and playing badminton! Like delicious cookies and jam, like watching movies and collecting anime stickers'
        },
        {
          label: ' My interest in art',
          value:
            'I like skiing and playing badminton! Like delicious cookies and jam, like watching movies and collecting anime stickers'
        }
      ]
    }
  }
}

const ContrastedValues = new Set(['interests', 'personalInformation'])

const ProfilePersonalInfo: FC<Props> = ({}) => {
  return (
    <div className="mt-[60px]">
      <article>
        {PersonalInfo &&
          Object.entries(PersonalInfo).map(infoItem => (
            <div
              key={infoItem[0]}
              className="border-b border-white/10 py-25 last:border-b-0"
            >
              <p
                title={infoItem[1].label}
                className="mb-24 font-bold leading-snug text-14"
              >
                {infoItem[1].label}
              </p>
              <ul className="flex max-w-[550px] flex-col gap-y-16">
                {infoItem[1].value &&
                  Object.entries(infoItem[1].value).map(info =>
                    Array.isArray(info[1]) ? (
                      info[1].map(item => (
                        <li
                          className="grid grid-cols-[130px_calc(100%-130px)]"
                          key={item.label}
                        >
                          <span className="block leading-snug text-primary-foreground text-12">
                            {item.label}
                          </span>
                          <span
                            className={clsx(
                              ContrastedValues.has(info[0])
                                ? 'opacity-100'
                                : 'opacity-60',
                              'block leading-snug text-primary-foreground text-12'
                            )}
                          >
                            {item.value}
                          </span>
                        </li>
                      ))
                    ) : (
                      <li
                        className="grid grid-cols-[130px_calc(100%-130px)]"
                        key={info[0]}
                      >
                        <span className="block leading-snug text-primary-foreground text-12">
                          {info[1].label}
                        </span>
                        <span
                          className={clsx(
                            ContrastedValues.has(info[0])
                              ? 'opacity-100'
                              : 'opacity-60',
                            'block leading-snug text-primary-foreground text-12'
                          )}
                        >
                          {info[1].value}
                        </span>
                      </li>
                    )
                  )}
              </ul>
            </div>
          ))}
      </article>
    </div>
  )
}

export default ProfilePersonalInfo
