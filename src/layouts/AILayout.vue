<template>
  <q-layout view="lHh Lpr lFf" style="background: #1D2E4E;">
    <q-header>
      <div>
        <div class="text-white" style="background: #1D2E4E;">
          <q-toolbar>
            <q-btn class="q-mx-md q-mt-sm" flat>
              <q-icon name="img:statics/stairs.svg" :size="'xl'" class="q-pa-sm col"></q-icon>
              ilmSoft
            </q-btn>
            <q-space />
            <span style="color: blue;">Hello, &nbsp;</span>
            <span style="color: yellow; margin-right: 10px;"> Smith</span>
            <q-btn flat round dense>
              <q-icon name="img:statics/user.svg"></q-icon>
            </q-btn>
            <!-- <q-btn flat round dense icon="search" class="q-mr-xs"></q-btn> -->

          </q-toolbar>
          <q-toolbar inset>
            <q-space />
           

            <q-btn class="q-mx-md bg" to="/accounting">
              <q-icon name="img:statics/calculator.svg" :size="'xl'" class="q-pa-sm"></q-icon>
              Бухгалтерия
            </q-btn>
            <q-btn class="q-mx-md bg" to="prediction">
              <q-icon name="img:statics/artificial-intelligence.svg" :size="'xl'" class="q-pa-sm"></q-icon>
              ИИ прогноз
            </q-btn>
            <q-btn class="q-mx-md" style="background: #233A5C" to="/contacts">
              <q-icon name="img:statics/call.svg" :size="'xl'" class="q-pa-sm"></q-icon>
              Контакты
            </q-btn>
            <q-space />
          </q-toolbar>
        </div>
      </div>
    </q-header>


    <div class="row text-white text-center">
      <div class="col-2" style="margin-top: 100px; padding-left: 24px;">
        <q-img src="statics/123.png" style="max-width: 150px; height: 200px;" :ratio="1"></q-img>
        <q-card class="bg-info q-ma-lg q-pa-sm"><div class="text-subtitle">Последний прогноз:</div> <div class="text-h4">0</div></q-card>
      </div>
      <div class="col-9">
        <q-page-container>
          <router-view />
        </q-page-container>
      </div>
      <div class="col-1">
        
      </div>
    </div>

  </q-layout>
</template>

<script>
  export default {
    name: 'MyLayout',

    data() {
      return {
        activeBtn: '',
      }
    },
    computed: {
      
      
    },
    methods:{
      
    }
  }
</script>

<style scoped>
  .bux, .ai {
    background: orange;
  }
  .bg{
    background: #233A5C;
  }
</style>