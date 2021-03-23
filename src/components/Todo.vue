<template>
    <div>
        <ul>
            <li v-for="task in list" :key="task.summary">
                {{ task.summary }}
            </li>
        </ul>
        <AddTask v-model="list"/>
    </div>
</template>

<script>
// tu chyba trzeba dać to:
import AddTask from './AddTask.vue'

export default {
    components: {
    AddTask
    },
    // to zawiera zmienne uzywane wewn.
    data() {
        return {
            list: [
                {summary: "Posprzątać kuchnię."},
                {summary: "Wynieść śmieci."}
            ]
        };
    }
}
</script>