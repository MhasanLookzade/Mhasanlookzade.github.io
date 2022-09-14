<template>
  <div class="skillPageContainer">
    <div
      class="flex q-mt-sm q-ml-lg"
      v-for="(skill,index) in skills"
      :key="index"
    >
      <q-btn class="q-ma-md " color="purple" label="click to show" text-color="amber-3" v-on:click="skill.show = !skill.show">
      <span class="q-pl-xs text-amber-8" >
        {{ skill.name }}
      </span>
      </q-btn>
      <!-- Now obviously not like this : ) but how ? -->
      <transition
        v-for="(part,index) in skill.Included"
        :key="index"
        appear
        enter-active-class="animated zoomIn"
        leave-active-class="animated bounceOut"
        :duration="1000">
        <q-card
          class="bg-amber-8 text-orange-1"
          v-show="skill.show"
          style="
        margin-left: 10px;
        width: 92px;
        height: 92px;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        display: flex;
        ">
          {{ part }}
        </q-card>
      </transition>
    </div>

  </div>

</template>
<!--
transition-show="flip-up"
transition-hide="flip-down"
-->


<script>
export default {
  name: "Skills",
  data() {
    return {
      show: false,
      skills:[
        {
          name:'Programming & Scripting Languages',
          Included:['Java-Script','Html','Css','Scss'],
          show:false
        },
        {
          name:'Micro-service Systems',
          Included:['Docker', 'Git'],
          show:false
        },
        {
          name:'Web Frameworks',
          Included:['Vue.Js', 'Bootstrap'],
          show:false
        },
        {
          name:'Operating Systems',
          Included:['Linux(Ubuntu)','Windows'],
          show:false
        },
        {
          name:'Multi-paradigm programming language',
          Included:['Matlab' ,'Maples'],
          show:false
        },
        {
          name:'Databases Systems',
          Included:['MySQL'],
          show:false
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .skillPageContainer{
    margin-top: 50px;
  }

</style>
