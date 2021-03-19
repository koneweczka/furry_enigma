<template>
    <div>
        <ul>
            <!-- to jest FOR od składni vue; ten dwukropek w tym jest po  to, by to
            co jest potem uzyc dalej.
            Ten klucz jest by vue rozroznialo rozne elementy w liscie-->
            <li v-for="task in list" :key="task.summary">
                {{ task.summary }}
            </li>
        </ul>
        <!-- Tu v-model: v rzeczy zawsze jako pierwsyz atrybut;
        v-model odpowiada za magie; ddziała dla inputa i dla komponentów
        to jest skrót na 2 rzeczy: przekazanie ddo komponentu propertiesa value 
        oraz reagowania na zmiany value ww druga strone
        i to mowi mu, ze wez poczatkowe value z newTask 
        i jak ona sie zmieni to zmien tez to w komponencoe -->
        <input v-model.trim="newTask" type="text" placeholder="type new task" />
        <button @click="addTask">Dodaj</button>
    </div>
</template>

<script>
export default {
    // to zawiera zmienne uzywane wewn.
    data() {
        return {
            list: [
                {summary: "Posprzątać kuchnię."},
                {summary: "Wynieść śmieci."}
            ],
            newTask: null
        };
    },
    // tu są funkcje do uzycia wszędzie:
    methods: {
        addTask() {
            this.list.push({summary: this.newTask});
            this.newTask = null
        }
    }
}
</script>