<template>
    <div>
        <button @click="editTask" >Edytuj</button>
        <input v-if="edited" type=text  v-model="newTask.summary" @keydown.enter="saveTask" @keyup.esc="cancelEdit"/>
        <button v-if="edited" @click="saveTask" >Zapisz</button>
        <button v-if="edited" @click="cancelEdit">Anuluj</button>
    </div>
</template>

<script>

export default {
    props: ['index', 'task'],
    data() {
        return {
            edited: false,
            newTask: {}
        }
    },
    watch: {
        task: {
            deep: true,
            immediate: true,
            handler(value) {
                this.newTask = Object.assign({}, value)
            }
        }
    },
    methods: {
        editTask() {
            this.edited = true
        },
        saveTask() {
            if (this.edited) {
                this.$store.dispatch('editTaskLogic', {index: this.index, newTask: this.newTask})
            }
        },
        cancelEdit(key) {
            if (this.edited && this.index > -1) {
                console.log(key, this.edited, this.index);
                this.$buefy.dialog.confirm({
                    message: "Anulować zmiany?",
                    cancelText: "Nie",
                    confirmText: "Tak",
                    canCancel: ["button", "outside"],
                    onConfirm: () => {
                        this.edited = false
                        this.newTask = Object.assign({}, this.task)
                        this.$buefy.toast.open("Zmiany anulowane")}
                })
            } else {
                alert("Something goes wrong.")
            }
        }
    }
}
</script>
