'use client'

import { memo, useState } from 'react'

import { useExercises } from '@/hooks/use-exercises'
import { FilterIcon } from '@public/icons'

import { CardExercise } from './card-exercise'
import { NotExercises } from './not-exercises'
import { Input } from './input'

export const ExerciseList = memo((): JSX.Element => {
  const [keyword, setKeyword] = useState<string>('')

  const { exercises, setExercises, getExercises } = useExercises()

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setKeyword(value)

    if (!value) {
      getExercises()

      return
    }

    const filteredExercises = exercises.filter((exercise) =>
      exercise.name.toLowerCase().includes(value.toLowerCase())
    )

    setExercises(filteredExercises)
  }

  return (
    <section className="grid gap-2">
      {exercises.length === 0 && !keyword && <NotExercises />}

      <div className="flex items-center gap-2">
        <Input
          className="border border-gray-200"
          placeholder="Buscar"
          type="search"
          value={keyword}
          onChange={handleSearch}
        />
        <div className="flex items-center justify-end">
          <span className="h-[26px] w-[26px]">
            <FilterIcon />
          </span>
        </div>
      </div>
      {exercises.length > 0 &&
        exercises.map((exercise) => <CardExercise key={exercise.id} exercise={exercise} />)}
    </section>
  )
})
