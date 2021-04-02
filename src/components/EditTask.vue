<template>
    <div>
        <button @click="editTask" >Edytuj</button>
        <input v-if="edited" type=text  v-model="newTask.summary" />
        <button v-if="edited">Zapisz</button>
        <button v-if="edited">Anuluj</button>
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
            // if (editedTask) {
            //     this.$emit('input', this.list)
            //     console.log("Test.")
                
            // } else {
            //     alert("Something goes wrong.")
            // }
        }
    }
}
</script>