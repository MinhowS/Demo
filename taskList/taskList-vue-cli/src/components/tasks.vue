<template>
  <ul class="list-group">
    <li class="list-group-item"
        :class="{'completed':task.completed}"
        v-for="(task,index) in tasks">
      {{task.title}}
      <button class="btn btn-warning btn-xs pull-right"
              @click="deleteTask(index)"
      >删除
      </button>
      <button class="btn btn-xs pull-right margin-right-10"
              :class="[task.completed ? 'btn-danger' : 'btn-success']"
              @click="toggleStatus(task)"
      >{{task.completed ? '已完成' : '未完成'}}
      </button>
    </li>
  </ul>
</template>

<script>
    export default {
        name: "tasks",
      props: ['tasks'],
      methods: {
        deleteTask(index) {
          this.tasks.splice(index, 1)
        },
        toggleStatus(task) {
          task.completed = !task.completed
        }
      }

    }
</script>

<style scoped>
  .completed {
    color: #5cb85c;
    text-decoration: line-through;
  }
  .margin-right-10 {
    margin-right: 10px;
  }

</style>
