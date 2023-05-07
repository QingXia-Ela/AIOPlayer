export default function findParentNode(startElement: HTMLElement, judgeFunc: (currentElement: HTMLElement) => boolean, count = 5): HTMLElement | null {
  if (count === 0 || !startElement.parentElement) return null
  if (judgeFunc(startElement)) return startElement
  return findParentNode(startElement.parentElement, judgeFunc, count - 1)
}