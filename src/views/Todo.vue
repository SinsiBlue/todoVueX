<template>
  <div class="">

    <h3 class="bg-primary text-light p-4"> My first vuex task list </h3>

    <form @submit.prevent="ADDtask(addTask)">
      <input type="text" class="mt-2 largeur" v-model="$store.state.addTask">
      <br>
      <button type="submit" class="btn largeur mt-2"> ADD </button>
    </form>

    <br>

    <div class="d-flex justify-content-between m-auto" style="width: 35vw">
      <button class="btn bg-light" @click="fait = true; efface = true">all</button>
      <button class="btn bg-light" @click="fait = false; efface = false">to do</button>
      <button class="btn bg-light" @click="fait = !fait">done</button>
      <button class="btn bg-light" @click="efface = !efface">deleted</button>
    </div>

    <br>

  <Taches/>

  <Faites/>
    
  <Effacees/>

  </div>
</template>

<script>
  // @ is an alias to /src
  import {
    mapActions,
    // mapState,
    mapGetters
  } from 'vuex'
  import Taches from '@/components/Taches.vue'
  import Faites from '@/components/Faites.vue'
  import Effacees from '@/components/Effacees.vue'


  export default {
    data() {
      return {
        efface: true,
        fait: true,
        // readonly: true,
      }
    },
    computed: {
      // tasks(){
      //   return this.$store.state.tasks;
      // },
      // ...mapState([
      //   'addTask'
      // ]),
      ...mapGetters([
        'addTask',
        // 'tasks',
        // 'deleted',
        // 'done',
      ])
    },
    methods: {
      ...mapActions([
        'ADDtask',
        // 'DELETEtask',
        // 'DELETEdone',
        // 'EDITtask',
        // 'DONEtask',
        // 'TODOtask',
        // 'TODOdelete'
      ]),
      // test(task) {
      //   task.editState = !task.editState;
      //   console.table(this.tasks);
      //   console.table(this.done);
      //   console.table(this.deleted);
      // }
    },
    components: {
      Taches,
      Faites,
      Effacees
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