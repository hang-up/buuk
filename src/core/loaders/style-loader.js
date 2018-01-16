import { store } from "../store/index";

const styleLoader = new Promise((resolve, reject) => {
    window.EventBus.$on('config:renderer', () => {
        console.log("Style loading...")
    })

    // Resolve the loader.
    resolve()
})

export default styleLoader