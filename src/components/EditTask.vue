<template>
    <div>
        <button @click="editTask" >Edytuj</button>
        <input v-if="edited" type=text  v-model="newTask.summary" />
        <button v-if="edited" @click="saveTask">Zapisz</button>
        <button v-if="edited" @click="cancelEdit">Anuluj</button>
    </div>
</template>

<script>

export default {
    props: ['value', 'index', 'task'],
    data() {
        return {
            list: [],
            edited: false,
            newTask: {}
        }
    },
    watch: {
        value: {
            deep: true,
            immediate: true,
            handler(value) {
                this.list = value;
            }
        },
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
            if (this.edited && this.index > -1) {
                this.list.splice(this.index, 1, this.newTask)
                this.$emit('input', this.list)
            } else {
                alert("Something goes wrong.")
            }
        },
        cancelEdit() {
            alert("Coooo")
        }
    }
}
</script>