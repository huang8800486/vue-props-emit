<template>
    <div class="index">
        <div v-bind:title="msg" v-once>{{msg.split('').reverse().join('')}}</div>
        <div>{{number + 1}}</div>
        <div v-if="seen" v-on:click="isClickSenn">你看不到我看不到我</div>
        <div v-for="(item, index) in arr" :key="index">
            {{item}}
        </div>
        <input type="text" v-model.lazy="msg">
        <span>{{rawHtml}}</span>
        <span v-html="rawHtml"></span>
        <div v-bind:id="dynamicId"></div>
        <div id="exmaple" ref="exmaple">
            <p>{{message}}</p>
            <p>{{reversedMessage}}</p>
        </div>
        <input type="text" v-model="firstName">
        <input type="text" v-model="lastName">
        <div class="static" v-bind:class="{active: isActive, 'text-danger': hasError }">{{fullName}}</div>
        <div class="static" v-bind:class="classObject">{{fullName}}</div>
        <div v-bind:class="[activeClass, errorClass]" @click="switchIf">数组class</div>
        <h1 v-if="ok">v-if</h1>
        <h1 v-else>v-else</h1>
        <h1 v-show="ok">v-show</h1>
        <ul>
            <li v-for="(item, index) in AlanArr" :key="index">
                {{item.message}} -- {{index}}
            </li>
        </ul>
        <ul>
            <li v-for="(value, key, index) in object" :key="index">
                {{key}} -- {{value}} -- {{index}}
            </li>
        </ul>
        <ul>
            <li v-for="(n,index) in evenNumbers" :key="index">
                {{ n }}
            </li>
        </ul>
        <ul>
            <li v-for="(n,index) in even(numbers)" :key="index">
                {{ n }}
            </li>
        </ul>
        <button v-on:click="green">{{message}}</button>
        <button v-on:click.exact="green2('hello')">{{message}}</button>
        <button v-on:click.left="green3('hello', $event)">{{message}}</button>
        <input type="text" v-model="msg" value="fewfe">
        <textarea v-model="message" placeholder="add multiple lines"></textarea>
        <input type="checkbox" id="checkBox" v-model="checked" true-value="yes" false-value="no">
        <label for="checkBox">{{checked}}</label>
        <div class="test">
            <input type="checkbox" id="jack" value="jack" v-model="checkedNames">
            <label for="jack">jack</label>
            <input type="checkbox" id="john" value="john" v-model="checkedNames">
            <label for="john">john</label>
            <input type="checkbox" id="mike" value="mike" v-model="checkedNames">
            <label for="mike">mike</label>
            <span>select name: {{checkedNames}}</span>
        </div>
        <div class="test">
            <input type="radio" id="one" value="one" v-model="picked">
            <label for="one">One</label>
            <input type="radio" id="two" value="two" v-model="picked">
            <label for="two">Two</label>
            <span>Picked: {{ picked }}</span>
        </div>
        <div id="example-5">
            <select v-model="selected">
                <option disabled value="">请选择</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
            <span>Selected: {{ selected }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        data() {
            return {
                AlanArr: [{
                        "message": "one"
                    },
                    {
                        "message": "two"
                    }
                ],
                object: {
                    firstName: 'John',
                    lastName: 'Doe',
                    age: 30
                },
                ok: false,
                message: "这是正常的文字",
                msg: 'Welcome to Your Vue.js App',
                seen: true,
                rawHtml: "<h1>输出HTML</h1>",
                picked: "",
                selected: '',
                arr: ["ICE, ICE2, ICE3"],
                dynamicId: false,
                number: 1,
                isActive: true,
                hasError: true,
                activeClass: 'active',
                errorClass: 'text-danger',
                error: null,
                firstName: 'Foo',
                lastName: 'Bar',
                fullName: 'Foo Bar',
                checked: false,
                checkedNames: [],
                numbers: [1, 2, 3, 4, 5],
            }
        },
        watch: {
            firstName: function (val) {
                this.fullName = val + ' ' + this.lastName
            },
            lastName: function (val) {
                this.fullName = this.firstName + ' ' + val
            }
        },
        mounted() {
            console.log(this.$refs.exmaple);
        },
        methods: {
            even(numbers) {
                return numbers.filter(function (number) {
                    return number % 2 === 0
                })
            },
            isClickSenn() {
                console.log("1")
            },
            switchIf() {
                this.ok = !this.ok;
            },
            green() {
                alert("green")
            },
            green2(msg) {
                alert(msg)
            },
            green3(msg, event) {
                console.log(msg, event.type);
            }
        },

        computed: {
            reversedMessage() {
                return this.message.split("").reverse().join("");
            },
            classObject() {
                return {
                    active: this.isActive && !this.error,
                    'text-danger': this.error && this.error.type === "fatal"
                }
            },
            evenNumbers() {
                return this.numbers.filter(function (number) {
                    return number % 2 === 0;
                })
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
