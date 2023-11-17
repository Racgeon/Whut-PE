var vue=new Vue({
    el: "#app",
    data() {
        return {
            options: [{
                label: '拉丁舞',
                value: '拉丁舞'
            }, {
                label: '健美操',
                value: '健美操'
            }, {
                label: '体育舞蹈',
                value: '体育舞蹈'
            }, {
                label: '羽毛球',
                value: '羽毛球'
            }, {
                label: '足球',
                value: '足球'
            }, {
                label: '形体艺术',
                value: '形体艺术'
            }, {
                label: '气排球',
                value: '气排球'
            }, {
                label: '大一基础体育',
                value: '大一基础体育'
            }, {
                label: '大二基础知识',
                value: '大二基础知识'
            }, {
                label: '武术',
                value: '武术'
            }, {
                label: '网球',
                value: '网球'
            }, {
                label: '柔力球',
                value: '柔力球'
            }, {
                label: '瑜伽',
                value: '瑜伽'
            }, {
                label: '散打',
                value: '散打'
            }, {
                label: '乒乓球',
                value: '乒乓球'
            }, {
                label: '游泳',
                value: '游泳'
            }, {
                label: '普拉提',
                value: '普拉提'
            }, {
                label: '排球',
                value: '排球'
            }, {
                label: '篮球',
                value: '篮球'
            }, {
                label: '跆拳道',
                value: '跆拳道'
            },],
            problem_set: '',
            content_query: '',
            query_result: [],
            content_illegal: false,
        }
    },
    mounted() {

    },
    methods: {
        query() {
            axios.get('https://services.rosemoe.cyou/api/problem_bank/query?problem_set=' + this.problem_set
                + '&content_query=' + this.content_query).then((response) => {
                let _this = this
                if (response.data.success === false) {
                    this.$message({
                        showClose: true,
                        message: response.data.message,
                        type: 'error'
                    });
                } else if (response.data.results.length === 0) {
                    this.$message({
                        showClose: true,
                        message: '您输入的内容没有查询出任何结果',
                        type: 'error'
                    });
                }
                _this.query_result = response.data.results
            })
        },
        checkContent() {
            this.content_illegal = this.content_query.length < 2;
        }
    }
})

