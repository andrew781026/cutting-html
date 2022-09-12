// this runs in Node.js on the server.
import {createSSRApp} from 'vue'
// Vue's server-rendering API is exposed under `vue/server-renderer`.
import {renderToString} from 'vue/server-renderer'

import App from './App.vue'

const app = createSSRApp({
    data: () => ({count: 1}),
    template: `
      <button @click="count++">{{ count }}</button>`
})

renderToString(app).then((html) => {
    console.log(html)
})

const app2 = createSSRApp(App)

renderToString(app2).then((html) => {
    console.log(html)
})
