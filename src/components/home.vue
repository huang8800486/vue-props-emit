<template>
    <div class="home">
        <input type="text" v-model="inputValue">
        <button @click="handleClik">提交</button>
        <ul>
            <TodoItem 
                v-for="(item, index) in list" 
                :key="index" 
                :title="item" 
                :index="index" 
                @delect="delectList"
            >
            </TodoItem>
        </ul>
    </div>
</template>

<script>
    import TodoItem from "./TodoItem"
    export default {
        name: 'home',
        data() {
            return {
                inputValue: '',
                list:[]
            }
        },
        methods:{
            handleClik(){
                this.list.push(this.inputValue);
                this.inputValue = "";
            },
            delectList(index){
                this.list.splice(index, 1)
            }
        },
        components: {
            TodoItem
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
