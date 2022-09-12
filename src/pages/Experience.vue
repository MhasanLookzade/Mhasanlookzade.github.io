<template>
  <div class="exp">
    <h2 class="justify-center flex q-mb-md " style="color:#9c27b0">Experience</h2>
    <div class="row experienceContainer">
      <div class="col-5  experience ">
        <p class="justify-center flex text-red-5">Working Experience</p>
        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12  flex ">
          <q-card class="my-card" flat bordered>
            <q-card-section>
              <div class="row">
                <div class="col-lg-7 col-md-6 col-xs-12 col-sm-12">
                  <q-card-section class="q-py-xs">
                    <div class="text-h5 q-mt-sm q-mb-xs">
                      <a class="project_link" style="text-decoration: none;color: #eb4f4f;">
                        Junior Front-End at <a href="https://alaatv.com" target="_blank">AlaaTV</a></a>
                      <p class="text-subtitle2">2021 - 2022</p>
                    </div>
                    <div class="text-caption text-grey-9">
                      In this company we used 3 of vue.js frameworks named Quasar framework , Nuxt.js and Vutify
                      and also we coded pure html css and js in laravel
                      <ul>
                        <li>Modern and responsive design</li>
                        <li>Building design based on CRM</li>
                        <li>Simple CRM Dashboard</li>
                        <li>Activity tracking on Calendar</li>
                        <li>Export feature</li>
                      </ul>
                    </div>
                  </q-card-section>
                </div>
                <div class="col-lg-5 col-md-4 col-xs-12 col-sm-12">
                  <q-card-section class="col-3 flex ">
                    <q-img
                      width="100%"
                      href="google.com"
                      class="rounded-borders"
                      style="border:1px solid darkgrey"
                      fit="fill"
                      src="https://nodes.alaatv.com/upload/footer-alaaLogo.png?w=45&h=60"
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

<script>
export default {
  name: "Experience"
}
</script>

<style scoped lang="scss">
.exp{
  .experienceContainer{
    display: flex;
    justify-content: center;
    .experience{
      font-size: 28px;
      .my-card{
        background-color: #ffd68c;
      }
    }
  }

}

</style>
