<template>
<div class="faites">
       <div class="bg-success largeur m-auto py-2" v-show="fait">
      <div class=" d-flex justify-content-between  col-6" v-for="(element, index) in done" :key="index.id">
        <input type="text" v-model="element.name" :readonly="element.editState">
        <button class="btn bg-secondary" @click="test(element)">edit</button>
        <button class="btn bg-primary" @click="TODOtask(element)">to do</button>
        <button class="btn bg-danger" @click="DELETEdone(element)">delete</button>
      </div>
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
    name: 'Faites',
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
        'DELETEdone',
        'TODOtask',
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
 
   .largeur {
    width: 35vw;
  }
</style>

