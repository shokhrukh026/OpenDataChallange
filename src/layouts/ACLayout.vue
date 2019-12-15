<template>
  <q-layout
    view="hHh Lpr fFf"
    class="bg"
  >

  <q-toolbar class="bg text-white shadow-2">
      <q-btn flat label="Главная" />
      <q-space />

      <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
      <q-tabs v-model="tab" shrink>
        <router-link :to="{ path: '/accounting/main'}" replace>
          <q-tab name="tab1" label="Рабочий стол" class="tab" />
        </router-link>
        <router-link :to="{ path: '/accounting/main'}" replace>
          <q-tab name="tab2" label="Заказы" class="tab" />
        </router-link>
        <router-link :to="{ path: '/accounting/main'}" replace>
          <q-tab name="tab3" label="Покупатели" class="tab" />
        </router-link>
        <router-link :to="{ path: '/accounting/main'}" replace>
          <q-tab name="tab4" label="Поставщики"  class="tab"/>
        </router-link>
        <router-link :to="{ path: '/accounting/main'}" replace>
          <q-tab name="tab5" label="Каталог товаров" class="tab" />
        </router-link>
        <router-link :to="{ path: '/accounting/main'}" replace>
          <q-tab name="tab6" label="Тренд"  class="tab"/>
        </router-link>
        <router-link :to="{ path: '/accounting/main'}" replace>
          <q-tab name="tab7" label="Склад" class="tab" />
        </router-link>
        <router-link :to="{ path: '/accounting/main'}" replace>
          <q-tab name="tab8" label="Отчеты" class="tab" />
        </router-link>
        <router-link :to="{ path: '/accounting/main'}" replace>
          <q-tab name="tab9" label="Настройки" class="tab" />
        </router-link>
      </q-tabs>
    </q-toolbar>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
    data(){
        return{
            tab:''
        }
    }
}
</script>

<style scoped>
.bg{
    background: #1D2E4E;
}
.tab{
    color: white;
}
</style>