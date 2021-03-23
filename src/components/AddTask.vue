<template>
    <div>
        <input v-model.trim="newTask" type="text" placeholder="type new task" />
        <button @click="addTask">Dodaj</button>
    </div>
</template>

<script>

export default {
    //proposy ktore wchodza do komponntu sa niemodyfikowalne, wiec musze miec jeszcze raz list
    props: ['value'],
    data() {
        return {
            list: [],
            newTask: null
        }
    },
    // watch jest do sytuacji, kiedy chcesz zareagowac na zmiane jakiegos pola w danym komponencie, ze jak zmieni sie wartosc to zrob co
    watch: {
        // pierwsze co jest nazwa pola, ktore obserwuje, a obserwuje value
        value: {
            // mówi,  ewartosc ktora obsrwuje vue jest wartoscia zlozona i ma payrzec na wartosci tego i obiektow w tym, do arary i innych peirdol
            //aby poprawnie obsluizyc arraye i boiekty
            deep: true,
            // to jest po to, aby to list [] sie zsynchronizowalo z tym list z Todo
            immediate: true,
            // funkcja, ktora to obsluguje i zawsze sie tak nazywa:
            handler(newValue) {
                this.list = newValue;
            }
        }
    },
    // tu są funkcje do uzycia wszędzie:
    methods: {
        addTask() {
            if (this.newTask !== "" && this.newTask !== null) {
                this.list.push({summary: this.newTask})
                this.$emit('input', this.list)
            } else {
                alert("Type something.")
            }
            this.newTask = null
        }   
    }
}
</script>