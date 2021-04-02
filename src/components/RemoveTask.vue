<template>
    <div>
        <button @click="removeTask" >Usuń</button>
    </div>
</template>

<script>

export default {
    props: ['value', 'index'],
    data() {
        return {
            list: []
        }
    },
    watch: {
        value: {
            deep: true,
            immediate:true,
            handler(value) {
                this.list = value;
            }
        }
    },
    methods: {
        removeTask() {
            // Czy to jest dobry warunek?? z tym -1 trzeba dawac jak robie tak
            if (this.index > -1) {
                this.list.splice(this.index, 1)
                // input w emicie zawsze na edycje, usuwanie, dodawanie wszytsko na tym czycms
                this.$emit('input', this.list)
            } else {
                alert("Something goes wrong.")
            }
        }
    }
}
</script>