<template>
    <div>
        <button @click="removeTask">Usuń</button>
    </div>
</template>

<script>

export default {
    props: ['index'],
    methods: {
        removeTask() {
            this.$store.dispatch('removeTaskLogic', this.index)
        }
    }
}
</script>