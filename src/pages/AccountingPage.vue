<template>
  <q-page>
    <div class="row q-mt-md bg">
      <!-- <div class="col-1"></div> -->

  <div class="col-12 text-h6 text-orange text-bold q-pa-md">Магазин "Sahovat"</div>
        <div class="col-1 wrap dots">........................................................................................................................................</div>
        <div class="col-10 q-pa-md">
        <q-btn class="col-3 q-ma-sm bg q-py-md btn-color btn-size" size="sm">
            <q-icon name="img:statics/circle-icons/table-lamp.svg" size="60px"></q-icon>
            <span class="text-subtitle1">&nbsp;&nbsp;Рабочий стол</span>
          </q-btn>
          <q-btn class="col-3 q-ma-sm bg q-py-md btn-color btn-size" size="sm" to="accounting/orders">
            <q-icon name="img:statics/circle-icons/clipboard.svg" size="60px"></q-icon>
            <span class="text-subtitle1">&nbsp;&nbsp;&nbsp; &nbsp;  Заказы &nbsp; </span>
          </q-btn>
          <q-btn class="col-3 q-ma-sm bg q-py-md btn-color btn-size" size="sm" to="/accounting/customers">
            <q-icon name="img:statics/circle-icons/deal.svg" size="60px"></q-icon>
            <span class="text-subtitle1">&nbsp;&nbsp;Покупатели</span>
          </q-btn>
          <q-btn class="col-3 q-ma-sm bg q-py-md btn-color btn-size" size="sm">
            <q-icon name="img:statics/circle-icons/growth.svg" size="60px"></q-icon>
            <span class="text-subtitle1">&nbsp;&nbsp;&nbsp; Тренд&nbsp;</span>
          </q-btn>
          <q-btn class="col-3 q-ma-sm bg q-py-md btn-color btn-size" size="sm" to="/accounting/products">
            <q-icon name="img:statics/circle-icons/box.svg" size="60px"></q-icon>
            <span class="text-subtitle1">&nbsp;&nbsp;Каталог товаров</span>
          </q-btn>
          <q-btn class="col-3 q-ma-sm bg q-py-md btn-color btn-size" size="sm" to="/accounting/providers">
            <q-icon name="img:statics/circle-icons/delivery-truck.svg" size="60px"></q-icon>
            <span class="text-subtitle1">&nbsp;&nbsp;&nbsp;Поставщики &nbsp;</span>
          </q-btn>
          <q-btn class="col-3 q-ma-sm bg q-py-md btn-color btn-size" size="sm" to="/accounting/warehouse">
            &nbsp;&nbsp;
            <q-icon name="img:statics/circle-icons/warehouse.svg" size="60px"></q-icon>
            &nbsp;&nbsp;
            <span class="text-subtitle1">&nbsp;&nbsp;&nbsp;Склад&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </q-btn>
          <q-btn class="col-3 q-ma-sm bg q-py-md btn-color btn-size" size="sm">
            <q-icon name="img:statics/circle-icons/signature.svg" size="60px"></q-icon>
            <span class="text-subtitle1">&nbsp;&nbsp;&nbsp;&nbsp;Отчеты&nbsp;</span>
          </q-btn>
          <q-btn class="col-3 q-ma-sm bg q-py-md btn-color btn-size" size="sm">
            <q-icon name="img:statics/circle-icons/organize.svg" size="60px"></q-icon>
            <span class="text-subtitle1">&nbsp;&nbsp;&nbsp;Настройки&nbsp;</span>
          </q-btn>
            
        </div>
         <div class="col-1 text-yellow wrap dots">........................................................................................................................................</div>
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
.dots{
    color: yellow;
    padding: 120px 10px 10px 10px;
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

</style>