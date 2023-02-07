var app;
const books = [
    { title: "解決問題、創意湧現、高效表達的3×3系統思考法" },
    { title: "文明的邏輯：人類與風險的博弈" },
    { title: "逆思維：華頓商學院最具影響力的教授，突破人生盲點的全局思考" },
    { title: "垃圾之書：面對人類將被廢棄物所廢棄的事實與行動" },
];
const someData = { n1: '11', n2: '22', n3: '33' };

$(function () {
    app = Vue.createApp({
        components: {
            vSelect: window["vue-select"]
        },
        data() {
            return {
                books: books,
                someData: Object.keys(someData),
                param1: '',
                param2: '',
            };
        },
    }).mount("#app");
});