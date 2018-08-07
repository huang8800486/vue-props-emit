<template>
    <li @click="delectHandle">{{title}}</li>
</template>

<script>
    export default {
        name: 'home',
        props: ["title", "index"],
        data() {
            return {
                inputValue: '',
                list:[]
            }
        },
        methods:{
            delectHandle(){
                console.log(this.index)
                this.$emit("delect", this.index)
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
