<template>
    <div>
        <button @click="removeTask(task)" v-for="task in list" :key="task.summary">Usuń</button>
    </div>
</template>

<script>

export default {
    props: ['value'],
    data() {
        return {
            list: []
        }
    },
    watch: {
        value: {
            deep: true,
            immediate:true,
            handler(deletedValue) {
                this.list = deletedValue;
            }
        }
    },
    methods: {
        removeTask(deleteTask) {
            // Czy to jest dobry warunek??
            if (deleteTask) {
                const taskIndex = this.list.indexOf(deleteTask)
                this.list.splice(taskIndex, 1)
                this.$emit('button', this.list)
            } else {
                alert("Something goes wrong.")
            }
        }
    }
}
</script>