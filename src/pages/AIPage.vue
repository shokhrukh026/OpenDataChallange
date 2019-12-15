<template>
  <q-page>
    <div class="row q-mt-md bg">
        <div class="col-12 text-h6 text-orange text-bold q-pa-md">Что вы хотите прогнозировать?</div>
        <div class="col-1 dots wrap">.......................................................................................................................</div>
        <div class="col-10 q-pa-md">
        <q-btn class="col-3 q-ma-sm bg q-py-md btn-color btn-size" size="sm">
            <q-icon name="img:statics/AI/suit.svg" size="60px"></q-icon>
            <span class="text-subtitle1">&nbsp;&nbsp;Одежда</span>
          </q-btn>
          <q-btn class="col-3 q-ma-sm bg q-py-md btn-color btn-size" size="sm">
            <q-icon name="img:statics/AI/temperature.svg" size="60px"></q-icon>
            <span class="text-subtitle1">&nbsp;&nbsp;Лекарства</span>
          </q-btn>
          <q-btn class="col-3 q-ma-sm bg q-py-md btn-color btn-size" size="sm">
            <q-icon name="img:statics/AI/bread.svg" size="60px"></q-icon>
            <span class="text-subtitle1">&nbsp;&nbsp;Еда</span>
          </q-btn>
          <q-btn class="col-3 q-ma-sm bg q-py-md btn-color btn-size" size="sm">
            <q-icon name="img:statics/AI/house.svg" size="60px"></q-icon>
            <span class="text-subtitle1">&nbsp;&nbsp;Недвижимость</span>
          </q-btn>
          <q-btn class="col-3 q-ma-sm bg q-py-md btn-color btn-size" size="sm" to="/prediction/cars">
            <q-icon name="img:statics/AI/sport-car.svg" size="60px"></q-icon>
            <span class="text-subtitle1">&nbsp;&nbsp;Машина</span>
          </q-btn>
          <q-btn class="col-3 q-ma-sm bg q-py-md btn-color btn-size" size="sm">
            <q-icon name="img:statics/AI/brochure.svg" size="60px"></q-icon>
            <span class="text-subtitle1">&nbsp;&nbsp;Другое</span>
          </q-btn>
            
        </div>
         <div class="col-1 dots wrap">.......................................................................................................................</div>
    </div>
  </q-page>
</template>

<script>
  export default {

  }
</script>

<style scoped>
.bg{
  background: #233A5C;
}
.yellow-dots{
    color: yellow;
}
.btn-color{
    background: #283C62;
}
.wrap{
  word-wrap: break-word;
}
.btn-size{
  width: 200px;
  height: 110px;
}
.dots{
    color: yellow;
    padding: 60px 10px 10px 10px;
}
</style>