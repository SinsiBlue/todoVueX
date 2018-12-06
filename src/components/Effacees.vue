<template>
<div class="effacees">
    <div class="bg-danger largeur m-auto py-2" v-show="efface">
      <div class=" d-flex justify-content-between col-6" v-show="efface" v-for="(element, index) in deleted" :key="index.id">
        <input type="text" v-model="element.name" :readonly="element.editState">
        <button class="btn bg-secondary" @click="test(element)">edit</button>
        <button class="btn bg-primary" @click="TODOdelete(element)">to do</button>
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
    name: 'Effacees',
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

