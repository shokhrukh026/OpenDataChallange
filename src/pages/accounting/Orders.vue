<template>
    <q-page class="q-ma-lg bg rounded-borders q-pa-md">
        <q-table
      title="Заказы"
      :data="data"
      :columns="columns"
      row-key="name"
      :rows-per-page-options="[]"
    >
     <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
            <q-popup-edit v-model="props.row.name" title="Edit the Name">
              <q-input v-model="props.row.name" dense autofocus counter />
            </q-popup-edit>
          </q-td>
          <q-td key="date" :props="props">
            {{ props.row.date }}
            <q-popup-edit v-model="props.row.date" title="Edit the Name">
              <q-input v-model="props.row.date" dense autofocus counter />
            </q-popup-edit>
          </q-td>
          <q-td key="phone" :props="props">
            {{ props.row.phone }}
            <q-popup-edit v-model.number="props.row.phone">
              <q-input type="number" v-model.number="props.row.phone" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="product" :props="props">
            {{ props.row.product }}
            <q-popup-edit v-model="props.row.product">
              <q-input v-model="props.row.product" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="quantity" :props="props">
            {{ props.row.quantity }}
            <q-popup-edit v-model.number="props.row.quantity">
              <q-input type="number" v-model.number="props.row.quantity" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="price" :props="props">
            {{ props.row.price }}
            <q-popup-edit v-model.number="props.row.price">
              <q-input type="number" v-model.number="props.row.price" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="total" :props="props">
            {{ props.row.total }}
            <q-popup-edit v-model.number="props.row.total">
              <q-input type="number" v-model.number="props.row.total" dense autofocus />
            </q-popup-edit>
          </q-td>
        </q-tr>
      </template>

      
    </q-table>
    </q-page>
</template>

<script>
export default {
    data(){
        return {
             filter: '',
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Покупатель',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'date', label: 'Дата', field: 'date',align: 'left' },
        { name: 'phone', align: 'center', label: 'Телефон', field: 'phone', sortable: true },
        { name: 'product', label: 'Продукт', field: 'product',align: 'left', sortable: true },
        { name: 'quantity', label: 'Кол-во', field: 'quantity' },
        { name: 'price', label: 'Цена', field: 'price' },
        { name: 'total', label: 'Всего', field: 'total' },
      ],
      data: [
        {
          name: 'Shokhurkh',
          date: '2017-01-21',
          phone: 998998442431,
          product: 'Звачка орбит',
          quantity: 1000,
          price: 400.00,
          total: 222
        },
        {
          name: 'Shokhurkh',
          date: '2017-01-21',
          phone: 998998442431,
          product: 'Звачка орбит',
          quantity: 1000,
          price: 400.00,
          total: 222
        },
        {
          name: 'Shokhurkh',
          date: '2017-01-21',
          phone: 998998442431,
          product: 'Звачка орбит',
          quantity: 1000,
          price: 400.00,
          total: 222
        },
        {
          name: 'Shokhurkh',
          date: '2017-01-21',
          phone: 998998442431,
          product: 'Звачка орбит',
          quantity: 1000,
          price: 400.00,
          total: 222
        },
        
      ]
        }
    }
 
}
</script>

<style scoped>
.bg{
  background: #233A5C;
}
</style>