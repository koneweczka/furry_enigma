<template>
    <div>
        <ul>
            <li v-for="(task, index) in list" :key="task.summary">
                {{ task.summary }}  
                <RemoveTask v-model="list" :index="index" />
                <EditTask v-model="list" :index="index" :task="task" />
            </li>
        </ul>
        <AddTask v-model="list" />
        <Customer/>
    </div>
</template>

<script>
// tu chyba trzeba dać to:
import AddTask from './AddTask.vue'
import RemoveTask from './RemoveTask.vue'
import EditTask from './EditTask.vue'
import Customer from './Customer.vue'

export default {
    components: {
    AddTask, RemoveTask, EditTask,
    Customer
    },
    computed: {
        list() {
            return this.$store.state.list
        }
    }
}
</script>