import { useState } from "react"

export function useBlocks() {
  const init: string[] = ["A", "B", "C", "D", "E", "F", "G"]
  const [blocks, setBlocks] = useState(init)

  // Shuffle Logic (Fisher-Yates Algorithm)
  const handleShuffle = () => {
    const shuffled = [...blocks].sort(() => Math.random() - 0.5)
    setBlocks(shuffled)
  }

  // Sort Logic (by Name)
  const handleSort = () => {
    const sorted = [...blocks].sort()
    setBlocks(sorted)
  }

  // Reverse Logic
  const handleReverse = () => {
    setBlocks([...blocks].reverse())
  }

  return {
    blocks,
    handleShuffle,
    handleSort,
    handleReverse,
  }
}
