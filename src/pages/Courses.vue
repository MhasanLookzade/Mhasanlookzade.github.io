<template>

  <div class="courseContainer row">
    <div class=" col-5 q-pl-xl "
         v-for="(subject,index) in courses"
         :key="index">
      <q-card
      class="course bg-amber-8" >
        <h3 class="justify-center flex q-my-none q-pb-lg">
          <q-avatar  class="q-mr-sm">
          <img :src="subject.icon" alt="kharazmiIcon" class="bg-amber-2"></q-avatar>
          {{ subject.name }}
        </h3>
        <div class="row courseChipContainer">
          <div class="col-11 courseChip transparent">
            <q-chip
              class="Kharazmi flex-center"
              v-for="(course,index) in subject.lessons"
              :key="index"
              :color="course.color"
              :label=" !course.link ?  course.name : '' "
            >
              <div v-if="course.link">
                <a :href="course.link" target="_blank">{{course.name}}</a>
              </div>
            </q-chip>

          </div>
        </div>

      </q-card>

    </div>
  </div>
</template>

<script>
export default {
  name: "Courses",
  data() {
    return {
      courses: [
        {
          name: 'Kharazmi University',
          icon: require('assets/Kharazmi/Kharazmy_University_logo.svg'),
          lessons: [
            {
              name: 'Computational Intelligence',
              color: 'red'
            }, {
              name: 'Design and Analysis of Algorithms',
              color: 'blue'
            }, {
              name: 'Linear Algebra',
              color: 'red'
            }, {
              name: 'Databases and data mining',
              color: 'blue'
            }, {
              name: 'Software engineering',
              color: 'red'
            }, {
              name: 'Data Structures',
              color: 'blue'
            }, {
              name: 'Data Mining',
              color: 'red'
            }, {
              name: 'Computer Network',
              color: 'blue'
            }, {
              name: 'Operating Systems',
              color: 'red'
            }, {
              name: 'logic circuit',
              color: 'blue'
            },

          ]
        },
        {
          name: 'Udemy',
          icon: require('assets/Udemy/udemy_logo_icon.svg'),
          lessons: [
            {
              name: 'Udemy - Modern HTML CSS From The Beginning (Including Sass) 2020-4',
              color: 'blue',
              link:'https://www.udemy.com/course/modern-html-css-from-the-beginning/'
            },
            {
                name: 'Udemy - Vue - The Complete Guide (w Router, Vuex, Composition API) 2020-12',
              color: 'red',
              link:'https://www.udemy.com/course/vuejs-2-the-complete-guide/'
            },
            {
                name: 'Udemy - MAX - JavaScript - The Complete Guide 2021 (Beginner + Advanced)',
              color: 'blue',
              link:'https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/'
            },
            {
              name: 'Udemy - Design Patterns in JavaScript 2019-6 (Just Familiar)',
              color: 'red',
              link:'https://www.udemy.com/course/design-patterns-javascript/'
            },


          ]
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.courseContainer{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  .course{
    border-radius: 40px;
    padding: 24px;
    .courseChipContainer{
      justify-content: center;
      align-items: center;
      display: flex;
      .courseChip{
        .udemy{

        }
        .Kharazmi{

        }
      }

    }

  }
}
</style>
