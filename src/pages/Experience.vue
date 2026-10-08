<template>
  <div class="exp">
    <div class="row experienceContainer">
      <div class="col-5 experience">
        <p class="justify-center flex text-bold text-purple-8">
          Working Experience :
        </p>
        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 flex">
          <q-card
            v-for="(job, index) in experienceList"
            :key="index"
            class="experienceCard bg-amber-8"
            flat
            bordered
          >
            <q-card-section>
              <div class="row">
                <div class="col-lg-7 col-md-6 col-xs-12 col-sm-12">
                  <q-card-section class="q-py-xs text-bold">
                    <div class="text-h5 q-mt-sm q-mb-xs">
                      <span class="project_link text-orange-1 text-bold">
                        {{ job.role }} at
                        <a
                          :href="job.companyUrl"
                          target="_blank"
                          class="text-purple-8"
                        >
                          {{ job.company }}
                        </a>
                      </span>
                      <p class="text-subtitle2 text-purple-8">
                        {{ job.period }}
                      </p>
                    </div>
                    <div class="text-grey-9" style="font-size: 18px">
                      {{ job.description }}
                      <ul>
                        <li v-for="(project, pIdx) in job.projects" :key="pIdx">
                          <a :href="project.url" target="_blank">
                            {{ project.title }}</a
                          >
                        </li>
                      </ul>
                    </div>
                  </q-card-section>
                </div>
                <div class="col-lg-5 col-md-4 col-xs-12 col-sm-12">
                  <q-card-section class="col-3 flex">
                    <q-img
                      width="250px"
                      height="300px"
                      class="rounded-borders bg-white"
                      style="border: 1px solid darkgrey"
                      fit="fill"
                      :src="job.logo"
                    />
                  </q-card-section>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { experienceData as experienceList } from "src/data/experience";
</script>

<style scoped lang="scss">
.exp {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .experienceContainer {
    display: flex;
    justify-content: center;
    .experience {
      font-size: 28px;
      .experienceCard {
        border-radius: 10%;
      }
    }
  }
}
</style>
