<template>
    <div>
        <ul>
            <li v-for="task in list" :key="task.summary">
                {{ task.summary }}
            </li>
            <RemoveTask v-model="list"/>
            <EditTask v-model="list"/>
        </ul>
        <AddTask v-model="list"/>
    </div>
</template>

<script>
// tu chyba trzeba dać to:
import AddTask from './AddTask.vue'
import RemoveTask from './RemoveTask.vue'
import EditTask from './EditTask.vue'

export default {
    components: {
    AddTask, RemoveTask, EditTask
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