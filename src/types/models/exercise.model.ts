export interface Exercise {
  id: string
  name: string
  type: string
  date: string
  attributes: ExerciseAttributes[]
}

export interface ExerciseAttributes {
  repetitions: number
  weight: number
  rest: number
}
