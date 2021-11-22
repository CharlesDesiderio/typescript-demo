import { FC } from 'react'

type Props = {
  num: number
}

const Counter: FC<Props> = ({ num }) => {
  return (
    <div>
      {num}
    </div>
  )
}

export default Counter