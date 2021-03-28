<template>
    <div>
        <button @click="editTask(task)" v-for="task in list" :key="task.summary">Edytuj</button>
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
            handler(editedValue) {
                this.list = editedValue;
            }
        }
    },
    methods: {
        editTask(editedTask) {
            if (editedTask) {
                console.log("Test.")
            } else {
                alert("Something goes wrong.")
            }
        }
    }
}
</script>