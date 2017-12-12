<template>
  <div id="app">
    <h1>计划完成的任务数： {{taskCount}} </h1>
    <!--   <img src="./assets/logo.png">
       <HelloWorld/>-->
    <tasks :tasks="tasks"></tasks>
    <TaskForm :tasks="tasks"/>
    <!--<task-form :tasks="tasks"></task-form>-->
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld'
  import tasks from './components/tasks'
  import TaskForm from './components/TaskForm'

  export default {
    name: 'app',
    components: {
      /*HelloWorld,*/tasks,TaskForm
    },
    data() {
      return {
        tasks: [
          {id: 1, title: '开始工作', completed: false}
        ],
      }
    },
    computed: {
      taskCount() {
        return this.tasks.length;
      }
    },

  }
</script>

<style>

</style>
