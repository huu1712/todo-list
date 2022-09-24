Vue.createApp({
    data() {
        return {
            newTask: '',
            listTask: [],
            listTaskDone: []
        }
    },
    methods: {
        add(newTask) {
            if (this.newTask == '') {
                alert('Input empty')
            } else {
                this.listTask.push({nameTask: newTask, isDone: false})
                this.newTask = '';
            }

        },
        clearItem(index) {
            this.listTask.splice(index, 1);
            this.listTaskDone = []
        },
        clearAll() {
            this.listTask = [],
            this.listTaskDone = []
        },
        finish(item) {
            item.isDone = !item.isDone

            if (item.isDone == true) {
                this.listTaskDone.push(item.isDone)
                console.log('thêm' + item.nameTask + 'vào ds hoàn thành')
            } else {
                this.listTaskDone.splice(item.isDone)
                console.log('xóa' + item.nameTask + 'khỏi ds hoàn thành')
            }
        }
    }
}).mount("#app")