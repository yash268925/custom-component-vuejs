import { Counter } from './Counter'

const prefix = 'cst'

const components = [
  ['counter', Counter]
] as const

export const registryCustomComponents = () => {
  for (const [tag, c] of components) {
    window.customElements.define(`${prefix}-${tag}`, c)
  }
}
