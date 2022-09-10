<template>
  <div class="q-pa-md">
    <div class="row justify-center q-gutter-sm">

      <q-intersection
        v-for="(education,index) in educations"
        :key="index"
        class="example-item"
      >
        <q-card class="educationCard q-ma-sm">
          <q-carousel
            arrows
            control-color="purple-4"
            color="orange"
            swipeable
            navigation
            animated
            v-model="education.model"
            infinite
            class="eduCarousel rounded-borders"
          >
            <q-carousel-slide
              v-for="(src,index) in education.imageSrcs"
              :key="index"
              :name="index">
              <q-img
                class="bg-white rounded-borders"
                height="300px"
                fit="fill"
                loading="lazy"
                :src="src"/>
            </q-carousel-slide>
          </q-carousel>

          <q-card-section>
            <div class="text-h5 educationInfo">
              <q-img height="40px" width="40px" fit="fill" :src="education.svg" :alt="education.name"/>
              <a class="subjectLink" :href="education.url" target="_blank"> {{ education.name }} </a>
            </div>
            <div class="text-h6 ">{{ education.degree }}</div>
            <div class="text-subtitle2">{{ education.period }}</div>
          </q-card-section>
        </q-card>
      </q-intersection>
    </div>
  </div>
</template>

<script>
export default {
  name: "Education",
  data() {
    return {
      slide: 0,
      educations: [
        {
          model: 0,
          name: 'Kharazmi University',
          url: 'https://khu.ac.ir/en/',
          period: '2018 - 2023',
          svg: require('src/assets/Kharazmy_University_logo.svg'),
          degree: 'Bachelor of Technology in Computer Science',
          imageSrcs: [
            'https://upload.wikimedia.org/wikipedia/en/0/01/Kharazmy_University_logo.svg',
            'https://cdn.quasar.dev/img/mountains.jpg',
            require('src/assets/Kharazmy_University_logo.svg'),
          ],
        },
        {
          model: 0,
          name: 'Mofid High School',
          url: 'https://mofidsch.ir/',
          period: '2014 - 2018',
          svg: require('src/assets/Mofid_School_logo.png'),
          degree: 'Diploma of Education , Mathematics',
          imageSrcs: [
            require('src/assets/Mofid_School_logo.png'),
            'https://cdn.quasar.dev/img/mountains.jpg',
            require('src/assets/Kharazmy_University_logo.svg'),
          ],

        },
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.example-item {
  height: 290px;
  width: 500px;

  .educationCard {
    background-color: #ffd68c;

    ::v-deep(.educationInfo) {
      display: flex;

      .subjectLink {
        padding-left: 4px;
      }
    }

    .eduCarousel {
      background-color: #ffa549;
    }
  }
}

</style>
