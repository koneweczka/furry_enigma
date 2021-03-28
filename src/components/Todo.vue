<template>
    <div>
        <ul>
            <li v-for="task in list" :key="task.summary">
                {{ task.summary }}
                <RemoveTask v-model="list"/>
            </li>
        </ul>
        <AddTask v-model="list"/>
    </div>
</template>

<script>
// tu chyba trzeba dać to:
import AddTask from './AddTask.vue'
import RemoveTask from './RemoveTask.vue'

export default {
    components: {
    AddTask, RemoveTask
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