<template>
  <div class="">

    <h3 class="bg-primary text-light p-4"> My first vuex task list </h3>

    <form action="">
      <input type="text" class="mt-2 largeur" v-model="$store.state.addTask">
      <br>
      <button type="submit" class="btn largeur mt-2" @click="ADDtask(addTask)"> ADD </button>
    </form>

    <br>

    <div class="d-flex justify-content-between m-auto" style="width: 35vw">
      <button class="btn bg-light" @click="fait = true; efface = true">all</button>
      <button class="btn bg-light" @click="fait = false; efface = false">to do</button>
      <button class="btn bg-light" @click="fait = !fait">done</button>
      <button class="btn bg-light" @click="efface = !efface">deleted</button>
    </div>

    <br>


        <div class="largeur d-flex justify-content-between m-auto col-6" v-for="(task, index) in tasks" :key="index">
          <input type="text" v-model="task.name" :readonly="task.editState">
          <!-- <span>{{task}}</span> -->
          <button class="btn bg-secondary" @click="test(task)">edit</button>
          <button class="btn bg-success" @click="DONEtask(task)">done</button>
          <button class="btn bg-danger" @click="DELETEtask(task)">delete</button>
        </div>

      <div class="bg-success largeur m-auto py-2" v-show="fait">
        <div class=" d-flex justify-content-between  col-6" v-for="(element, index) in done" :key="index.id">
          <input type="text" v-model="element.name" :readonly="element.editState">
          <!-- <span>{{element.name}}</span>    -->
          <button class="btn bg-secondary" @click="test(element)">edit</button>
          <button class="btn bg-primary" @click="TODOtask(element)">to do</button>
          <button class="btn bg-danger" @click="DELETEdone(element)">delete</button>   
        </div>
      </div>

      <div class="bg-danger largeur m-auto py-2" v-show="efface">
        <div class=" d-flex justify-content-between col-6" v-show="efface" v-for="(element, index) in deleted" :key="index.id">
          <input type="text" v-model="element.name" :readonly="element.editState">
          <!-- <span>{{element.name}}</span>  -->
          <button class="btn bg-secondary" @click="test(element)">edit</button>
          <button class="btn bg-primary" @click="TODOdelete(element)">to do</button>     
        </div>
      </div>


    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import {
    mapActions,
    // mapState,
    mapGetters
  } from 'vuex'

  export default {
    // name: 'task',
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
        'tasks',
        'deleted',
        'done',
      ])
    },
    methods: {
      ...mapActions([
        'ADDtask',
        'DELETEtask',
        'DELETEdone',
        'EDITtask',
        'DONEtask',
        'TODOtask',
        'TODOdelete'
      ]),
      test(task){
        // this.console.log('test');
        task.editState = !task.editState;
        console.table('todo',this.tasks);
        console.table(this.done);
        console.table(this.deleted);
      }
    },
    components: {},
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