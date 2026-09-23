import { Button } from "@/components/ui/button"
import { Header } from "@/components/header.tsx"
import { Footer } from "@/components/footer.tsx"
import { OneBlock } from "@/components/one-block.tsx"
import { useBlocks } from "@/hooks/use-blocks.tsx"

export function App() {
  const { blocks, handleShuffle, handleSort, handleReverse } = useBlocks()

  return (
    <div className="flex min-h-screen flex-col justify-between">
      <div>
        <Header title="ABC Blocks" />
        <main className="container mx-auto max-w-4xl px-4">
          <div className="mt-6 flex gap-4 justify-center">
            {blocks.map((block, index) => (
              <OneBlock block={block} key={`${index}_${block}`} />
            ))}
          </div>
          <div className="mt-6 flex gap-2 justify-center">
            <Button onClick={handleShuffle}>Shuffle</Button>
            <Button onClick={handleSort}>Sort (A-Z)</Button>
            <Button onClick={handleReverse}>Reverse</Button>
          </div>
        </main>
      </div>
      <Footer name="Alex Tetervak" />
    </div>
  )
}

export default App
