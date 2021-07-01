<template>
    <div>
        <button @click="removeTask">Usuń</button>
    </div>
</template>

<script>

export default {
    props: ['id'],
    methods: {
        removeTask() {
            this.$store.dispatch('removeTaskLogic', this.id)
        }
    }
}
</script>