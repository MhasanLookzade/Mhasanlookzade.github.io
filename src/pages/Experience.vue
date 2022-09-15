<template>
  <div class="exp">
    <div class="row experienceContainer">
      <div class="col-5  experience ">
        <p class="justify-center flex text-bold text-purple-8" >Working Experience :</p>
        <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12  flex ">
          <q-card class="experienceCard bg-amber-8" flat bordered>
            <q-card-section>
              <div class="row">
                <div class="col-lg-7 col-md-6 col-xs-12 col-sm-12">
                  <q-card-section class="q-py-xs text-bold">
                    <div class="text-h5 q-mt-sm q-mb-xs">
                      <a class="project_link text-orange-1 text-bold" style="text-decoration: none;">
                        Junior Front-End at <a href="https://alaatv.com" target="_blank" class="text-purple-8">AlaaTV</a></a>
                      <p class="text-subtitle2 text-purple-8">2021 - 2022</p>
                    </div>
                    <div class="text-grey-9" style="font-size: 18px">
                      In this company we used 3 frameworks of Vue.js named Quasar framework, Nuxt.js and Vuetify
                      and also we used pure html, css and js code
                      <ul>
                        <li><a href="https://alaatv.com/landing/9"> Landing for each new products</a></li>
                        <li><a href="https://alaatv.com/map"> site map page</a></li>
                        <li><a href="https://alaatv.com/t#/"> Ticketing panel</a></li>
                        <li><a href="https://3a.alaatv.com"> Online test system</a></li>
                        <li><a href="https://soalaa.com/login"> Online test Question Bank</a></li>
                        <li><a href="https://soalaa.com/login"> Online test breadcrumbs</a></li>
                      </ul>
                    </div>
                  </q-card-section>
                </div>
                <div class="col-lg-5 col-md-4 col-xs-12 col-sm-12">
                  <q-card-section class="col-3 flex ">
                    <q-img
                      width="250px"
                      height="300px"
                      href="google.com"
                      class="rounded-borders bg-white"
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .experienceContainer{
    display: flex;
    justify-content: center;
    .experience{
      font-size: 28px;
      .experienceCard{
        border-radius: 10%;
      }
    }
  }

}

</style>
