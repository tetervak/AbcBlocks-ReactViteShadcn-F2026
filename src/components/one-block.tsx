import block_A from "../assets/images/blocks/block_A.png"
import block_B from "../assets/images/blocks/block_B.png"
import block_C from "../assets/images/blocks/block_C.png"
import block_D from "../assets/images/blocks/block_D.png"
import block_E from "../assets/images/blocks/block_E.png"
import block_F from "../assets/images/blocks/block_F.png"
import block_G from "../assets/images/blocks/block_G.png"

const blocksMap = new Map<string, string>([
  ["A", block_A],
  ["B", block_B],
  ["C", block_C],
  ["D", block_D],
  ["E", block_E],
  ["F", block_F],
  ["G", block_G],
])

export function OneBlock({ block }: { block: string }) {
  return (
    <img
      src={blocksMap.get(block)}
      alt={block}
      style={{ width: "50px", height: "50px", objectFit: "cover" }}
    />
  )
}