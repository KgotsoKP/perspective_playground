Vue.createApp({
    data() {
        return {
            perspective: 100,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0
        }
    },
    methods: {
        reset() {
            this.perspective = 100,
                this.rotateX = 0,
                this.rotateY = 0,
                this.rotateZ = 0
        }
    },
    computed: {
        box() {
            return {
                trasform: `perspective(${this.perspective}px)
                rotateX(${this.rotateX}px)
                rotateY(${this.rotateX}px)
                rotateZ(${this.rotateZ}px)`
            }
        }
    }
}).mount('#app')