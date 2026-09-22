import { useState, useCallback } from 'react'

/**
 * Persist a piece of state to localStorage.
 * Falls back gracefully if localStorage is unavailable (e.g. private mode).
 */
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (error) {
      console.warn(`useLocalStorage: failed to read "${key}"`, error)
      return initialValue
    }
  })

  const setValue = useCallback(
    (value) => {
      setStoredValue((prev) => {
        const nextValue = value instanceof Function ? value(prev) : value
        try {
          window.localStorage.setItem(key, JSON.stringify(nextValue))
        } catch (error) {
          console.warn(`useLocalStorage: failed to write "${key}"`, error)
        }
        return nextValue
      })
    },
    [key]
  )

  return [storedValue, setValue]
}
