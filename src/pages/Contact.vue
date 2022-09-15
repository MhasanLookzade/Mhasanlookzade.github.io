<template>
    <div class="contactME">
      <q-card class="contactCardContainer  bg-orange-4">
        <q-card-section class="contactCard">
          <div class="details ">
            <ul class="q-pl-md q-pr-sm text-bold" style="font-size: 18px;color: purple">
              <li>
                <i class="fas fa-envelope-open mr-2 q-mr-sm"></i>
                <a href="mailto:hassan.lookzade@gmail.com">hassan.lookzade@gmail.com</a>
              </li>
              <li>
                <i class="fas fa-mobile-alt mr-2 q-mr-sm">&nbsp;
                </i>
                <a href="tel:+989363109356">+989363109356</a>
              </li>
              <li><i class="fa-brands fa-telegram q-mr-sm"></i>
                <a href="https://t.me/itsha3an" target="_blank">Itsha3an</a>
              </li>

              <li><i class="fas fa-map-marker-alt mr-2 q-mr-sm"></i> <span class="text-blue-9">Iran,Tehran</span> </li>

            </ul>
          </div>

        </q-card-section>
        <q-card-section>
          <div class="googleMapContainer"
          >
            <iframe
              class="google"
              src="https://maps.google.com/maps?q=tehran&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              allowfullscreen
            />
          </div>

        </q-card-section>
      </q-card>

    </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped lang="scss">
.contactME {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .contactCardContainer{
    width: 50%;
    border-radius: 45px;
    .contactCard  {
      padding: 0;
      .details{
        display: grid;
        justify-content: center;
      }
    }
  }
  .googleMapContainer {
    display: flex;
    justify-content: center;

    .google {
      border-radius: 15px;
      height: 300px;
      width: 80%;
    }
  }

}


</style>
