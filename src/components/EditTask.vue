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
    // tu wywalam ten index bo nie ejst potrzebny:
    props: ['task'],
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
        async saveTask() {
                // dispatch nie moze miec 2 parametrow, wiec ten drugi musi byc jako obiekt
                // tu sie daje to this.newTask bo ono trzyma id i summary
            if ((await this.$store.dispatch('editTaskLogic', this.newTask)) === true) {
                this.edited = false
            }
        },
        // cancel nie modyfikuje to moze tu zostac
        cancelEdit() {
            if (this.edited) {
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