<template>
    <div>
        <ul>
            <li v-for="(task) in list" :key="task.id">
                {{ task.summary }}  
                <RemoveTask v-model="list" :id="task.id" />
                <EditTask v-model="list" :task="task" />
            </li>
        </ul>
        <AddTask v-model="list" />
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
    // created czy mounted lepsze???
    // mounted lepsze - poszukac roznicy
    mounted() {
        //
        this.$store.dispatch('createListLogic');
    },
    computed: {
        list() {
            return this.$store.state.list;
        }
    }
}
</script>