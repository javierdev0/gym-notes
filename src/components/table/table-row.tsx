import type { ExerciseAttributes } from '@/types/models/exercise.model'

import { memo } from 'react'

export const TableRow = memo(
  ({
    attributes,
    title,
    keyObject
  }: {
    attributes: ExerciseAttributes[]
    title: string
    keyObject: keyof ExerciseAttributes
  }): JSX.Element => {
    const calculateTotal = (attribute: ExerciseAttributes[], key: keyof ExerciseAttributes) => {
      return attribute.reduce((acc, current) => acc + current[key], 0)
    }

    return (
      <tr className="border-b border-gray-200 text-center">
        <th className="text-left">{title}</th>
        {attributes.map((attribute, index) => (
          <th key={index} className="font-normal">
            {attribute[keyObject]}
          </th>
        ))}
        <td className="text-right">{calculateTotal(attributes, keyObject)}</td>
      </tr>
    )
  }
)
