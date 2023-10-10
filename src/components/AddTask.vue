<template>
    <div>
        <input v-model.trim="newTask" type="text" placeholder="Type new task"/>
        <button @click="addTask">Dodaj</button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            newTask: null
        }
    },
    methods: {
        async addTask() {
                if ((await this.$store.dispatch('addTaskLogic', this.newTask)) === true) {
                    this.newTask = null
                }   
        }
    }
}
</script>
