<template>
    <q-page class="bg q-pa-xl rounded-borders">
        <div class="q-pb-md"><span class="text-bold text-orange text-h6">Заполните форму:</span></div>
        <div>
            <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
    <div class="row">
      <!-- <div class="col-3 q-pa-sm">
        <q-input dark filled v-model="name" label="Компания*" lazy-rules
           />
      </div> -->
      <div class="col-3 q-pa-sm">
        <q-input dark filled v-model="mark" label="Марка*" lazy-rules
           />
      </div>
      <div class="col-3 q-pa-sm">
        <q-input dark filled v-model="year_model" label="Год выпуска*" lazy-rules
          />
      </div>
      <div class="col-3 q-pa-sm">
        <q-input dark filled v-model="fuel_type" label="Тип топлива *"  lazy-rules
         />
      </div>

        <div class="col-3 q-pa-sm">
        <q-input dark filled v-model="kuzov_type" label="Тип кузова *"  lazy-rules
           />
      </div>
      <div class="col-3 q-pa-sm">
        <q-input dark filled v-model="mileage" label="Пробег*"  lazy-rules
          />
      </div>
      <div class="col-3 q-pa-sm">
        <q-input dark filled v-model="color" label="Цвет *"  lazy-rules
           />
      </div>
      <!-- <div class="col-3 q-pa-sm">
        <q-input dark filled v-model="name" label="Цена*"  lazy-rules
           />
      </div> -->
    
      <div class="col-3 q-pa-sm">
        <q-input dark filled v-model="uzatma" label="Коробка передач *"  lazy-rules
           />
      </div>
      <!-- <div class="col-3 q-pa-sm">
        <q-input dark filled v-model="name" label="ОбЪём двигателя*"  lazy-rules
           />
      </div> -->
    
    </div>
     
      <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->

      <div>
        <q-btn label="Отправить" type="submit" color="primary" @click="basic = true"/>
        <q-btn label="Сброс " type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

    <q-dialog v-model="basic" transition-show="rotate" transition-hide="rotate">
      <q-card>
        <q-card-section>
          <div class="text-h6">Результат:</div>
          <div>{{post}}</div>
        </q-card-section>

        <q-card-section>
          <p v-for="n in 15" :key="n">

          </p>
        </q-card-section>

        <q-card-actions align="right">
          <!-- <q-btn flat label="Decline" color="primary" v-close-popup /> -->
          <q-btn flat label="Закрыть" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
        </div>
    </q-page>
</template>

<script>
export default {
    data(){
        return {
            basic: false,
            body: {
                mark: this.mark,
                year_model: this.year_model,
                fuel_type: this.fuel_type,
                kuzov_type: this.kuzov_type,
                mileage: this.mileage,
                color: this.color,
                uzatma: this.uzatma
            },
            post: ''
        }
    },
    methods:{
        postPost(){
            axios.post(``,{
                body: this.body
            })
            .then(response => {})
            .catch(e => {
                console.log(e)
            })
        },
        getGet(){
            axios.get(``)
            .then(response => {
                this.post = response.data
            })
            .catch(e => {
                console.log(e)
            })
        }
    }
}
</script>

<style scoped>

</style>