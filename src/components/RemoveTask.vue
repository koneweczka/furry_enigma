<template>
    <div>
        <button @click="removeTask(task.summary)">Usuń</button>
    </div>
</template>

<script>

export default {
    props: ['value'],
    data() {
        return {
            list: [],
            //deletedTask: null
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
        removeTask(taskID) {
            if (taskID > -1) {
                this.list.splice(taskID, 1)
                this.$emit('delete', this.list)
            } else {
                alert("Something goes wrong.")
            }
        }
    }
}
</script>