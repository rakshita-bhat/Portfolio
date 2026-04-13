import { useState, useEffect, useRef } from 'react'

/**
 * useTyping — animates typing + deleting text through a list of words
 * @param {string[]} words   - array of words to cycle through
 * @param {number}   speed   - ms per character while typing  (default 100)
 * @param {number}   pause   - ms to pause when word is complete (default 2000)
 * @returns {string}         - the current partially-typed text
 */
export function useTyping(words, speed = 100, pause = 2000) {
  const [text,    setText]    = useState('')
  const [deleting, setDeleting] = useState(false)
  const wordIndex = useRef(0)

  useEffect(() => {
    const currentWord = words[wordIndex.current]

    const timeout = setTimeout(() => {
      if (!deleting) {
        // Type next character
        setText(currentWord.slice(0, text.length + 1))

        // If finished typing, wait then start deleting
        if (text.length + 1 === currentWord.length) {
          setTimeout(() => setDeleting(true), pause)
        }
      } else {
        // Delete a character
        setText(currentWord.slice(0, text.length - 1))

        // If fully deleted, move to next word
        if (text.length - 1 === 0) {
          setDeleting(false)
          wordIndex.current = (wordIndex.current + 1) % words.length
        }
      }
    }, deleting ? 45 : speed)

    return () => clearTimeout(timeout)
  }, [text, deleting]) // re-run every time text or deleting state changes

  return text
}