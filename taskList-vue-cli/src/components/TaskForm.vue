<template>
  <form @submit.prevent="addTask(newTask)">
    <div class="form-group">
      <input type="text"
             v-model="newTask.title"
             class="form-control"
             placeholder="要完成什么">
    </div>
    <div class="form-group">
      <button class="btn btn-success" type="submit">添加任务</button>
    </div>
  </form>

</template>

<script>
    export default {
        name: "task-form",
      props:['tasks'],
      data(){
        return {
          newTask: {id: null, title: '', completed: false},
        }
      },
      methods: {
        addTask(newTask) {
          //先判断输入的内容是否全为空格
          if (newTask.title && newTask.title.split(" ").join("").length != 0){
            this.tasks.push(newTask);
            this.newTask = {id: null, title: '', completed: false}
          } else {
            alert("输入的任务不能为空，请重新输入")
          }
        },
      }

    }
</script>

<style scoped>

</style>
