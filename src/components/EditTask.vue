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
                // tu musze zrobic nowy obiekt, bo inaczej bedzie przekazana referencja a nie cos tam
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
                // dispatch nie moze miec 2 parametrow, wiec ten drugi musi byc jako obiekt
                this.$store.dispatch('editTaskLogic', {index: this.index, newTask: this.newTask})
            }
        },
        // cancel nie modyfikuje to moze tu zostac
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
                        // tu musze miec nowy obiekt skopiowany
                        this.newTask = Object.assign({}, this.task)
                        this.$buefy.toast.open("Zmiany anulowane")}
                })
                // tego nie potrzebuje bo nic nie zmieniam
                // this.$emit('keydown', this.list)
            } else {
                alert("Something goes wrong.")
            }
        }
    }
}
</script>