import { defineComponent, ref, createApp, Ref, PropType } from 'vue'

const _Counter = defineComponent({
  props: {
    value: {
      type: Object as PropType<Ref<number>>,
      required: true
    }
  },
  setup(props) {
    return () => (
      <div>
        <span>{props.value.value}</span>
        <button onClick={() => props.value.value++}>up</button>
      </div>
    )
  }
})

export class Counter extends HTMLElement {

  #value = ref(0)

  get value() {
    return this.#value.value
  }

  set value(value: number) {
    this.#value.value = value
  }

  connectedCallback() {
    const initValue = this.getAttribute('init') ?? '0'
    this.#value.value = Number.parseInt(initValue)

    const mountPoint = document.createElement('span')
    this.attachShadow({ mode: 'closed' }).appendChild(mountPoint)

    createApp(_Counter, { value: this.#value }).mount(mountPoint)
  }

}
