<template>
<div class="taches">
    <div v-for="(task, index) in tasks" :key="index" class="largeur d-flex justify-content-between m-auto col-6" >
        <input type="text" v-model="task.name" :readonly="task.editState">
        <button class="btn bg-secondary" @click="test(task)">edit</button>
        <button class="btn bg-success" @click="DONEtask(task)">done</button>
        <button class="btn bg-danger" @click="DELETEtask(task)">delete</button>
    </div>
</div>
    
</template>

<script>
  // @ is an alias to /src
  import {
    mapActions,
    mapGetters
  } from 'vuex'

  export default {
    name: 'Taches',
    data() {
      return {
        efface: true,
        fait: true,
      }
    },
    computed: {
      ...mapGetters([
        'addTask',
        'tasks',
        'deleted',
        'done',
      ])
    },
    methods: {
      ...mapActions([
        'DELETEtask',
        'DONEtask',
      ]),
      test(task) {
        task.editState = !task.editState;
        console.table(this.tasks);
        console.table(this.done);
        console.table(this.deleted);
      }
    },
  }
</script>

<style scoped>
  .displaylist {
    width: 100vw;
    height: 75vh;
    background-color: blue;
  }

  .largeur {
    width: 35vw;
  }
</style>

