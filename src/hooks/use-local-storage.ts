import { useState } from 'react'

interface StorageResult<T> {
  localStorageValue: T
  setLocalStorageValue: (value: T) => void
}

export function useLocalStorage<T>(key: string, initialValue: T): StorageResult<T> {
  const [localStorageValue, setLocalStorageValue] = useState<T>(() => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem(key)

      if (storedValue) {
        return JSON.parse(storedValue) as T
      } else {
        return initialValue
      }
    } else {
      return initialValue
    }
  })

  const updateValue = (newValue: T) => {
    if (typeof window !== 'undefined') {
      if (!newValue) {
        localStorage.setItem(key, JSON.stringify(initialValue))
      } else {
        localStorage.setItem(key, JSON.stringify(newValue))
      }

      setLocalStorageValue(newValue)
    }
  }

  return { localStorageValue, setLocalStorageValue: updateValue }
}
