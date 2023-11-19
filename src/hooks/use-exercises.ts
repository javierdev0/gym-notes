/* eslint-disable react-hooks/exhaustive-deps */
import type { Exercise } from '@/types/models/exercise.model'

import { useLayoutEffect, useState } from 'react'

import { generateUUID } from '@/utils/generate-uuid'
import { formatDateYYYYMMDD } from '@/utils/format-date'

import { useLocalStorage } from './use-local-storage'

export const useExercises = () => {
  const [exercises, setExercises] = useState<Exercise[]>([])
  const { localStorageValue, setLocalStorageValue } = useLocalStorage<Exercise[]>('exercises', [])

  const getExercises = (): void => {
    setExercises(localStorageValue)
  }

  const getExercise = (id: string): Exercise | undefined => {
    return exercises.find((exercise) => exercise.id === id)
  }

  const addExercise = (exercise: Exercise): void => {
    const newExercise: Exercise = {
      ...exercise,
      id: generateUUID(),
      date: formatDateYYYYMMDD(exercise.date)
    }

    const newExercises = [...exercises, newExercise]

    setLocalStorageValue(newExercises)
    setExercises(newExercises)
  }

  const updateExercise = (exercise: Exercise): void => {
    const newExercises = exercises.map((ex) => {
      if (ex.id === exercise.id) {
        return {
          ...exercise,
          date: formatDateYYYYMMDD(exercise.date)
        }
      }

      return ex
    })

    setLocalStorageValue(newExercises)
    setExercises(newExercises)
  }

  const deleteExercise = (id: Exercise['id']): void => {
    const newExercises = exercises.filter((exercise) => exercise.id !== id)

    setLocalStorageValue(newExercises)
    setExercises(newExercises)
  }

  useLayoutEffect(() => {
    getExercises()
  }, [])

  return {
    getExercises,
    getExercise,
    addExercise,
    updateExercise,
    deleteExercise,
    exercises,
    setExercises
  }
}
