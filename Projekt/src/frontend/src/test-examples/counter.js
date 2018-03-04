// Implementation of Button, able to count how often it has been clicked
export default {
  template: `
    <div>
      <span class="count">{{ count }}</span>
      <button @click="increment">Increment</button>
    </div>
  `,

  // return Number of times button has been clicked
  data () {
    return {
      count: 0
    }
  },

  // called whenever button is being clicked, increments count
  methods: {
    increment () {
      this.count++
    }
  }
}
