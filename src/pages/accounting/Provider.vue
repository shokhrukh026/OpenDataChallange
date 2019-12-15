<template>
    <q-page class="q-ma-lg bg rounded-borders q-pa-md">
        <q-table
      title="Поставщики"
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
          label: 'Поставщик',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'phone', align: 'center', label: 'Телефон', field: 'phone', sortable: true },
        { name: 'product', label: 'Продукт', field: 'product', sortable: true },
        { name: 'quantity', label: 'Кол-во', field: 'quantity' },
        { name: 'price', label: 'Цена', field: 'price' }
      ],
      data: [
        {
          name: 'Shokhurkh',
          phone: 998998442431,
          product: 'Звачка орбит',
          quantity: 1000,
          price: 400.00
        },
        {
          name: 'Shokhurkh',
          phone: 998998442431,
          product: 'Звачка орбит',
          quantity: 1000,
          price: 400.00
        },
        {
          name: 'Shokhurkh',
          phone: 998998442431,
          product: 'Звачка орбит',
          quantity: 1000,
          price: 400.00
        },
        {
          name: 'Shokhurkh',
          phone: 998998442431,
          product: 'Звачка орбит',
          quantity: 1000,
          price: 400.00
        },
        {
          name: 'Shokhurkh',
          phone: 998998442431,
          product: 'Звачка орбит',
          quantity: 1000,
          price: 400.00
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