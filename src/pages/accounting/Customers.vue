<template>
    <q-page class="q-ma-lg bg rounded-borders q-pa-md">
        <q-table
      title="Покупатели"
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
          <q-td key="payed" :props="props">
            {{ props.row.payed }}
            <q-popup-edit v-model.number="props.row.payed">
              <q-input type="number" v-model.number="props.row.payed" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="notPayed" :props="props">
            {{ props.row.notPayed }}
            <q-popup-edit v-model.number="props.row.notPayed">
              <q-input type="number" v-model.number="props.row.notPayed" dense autofocus />
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
        { name: 'phone', align: 'center', label: 'Телефон', field: 'phone', sortable: true },
        { name: 'payed', label: 'Оплачено', field: 'payed', sortable: true },
        { name: 'notPayed', label: 'Неоплачено', field: 'notPayed' },
        { name: 'total', label: 'Всего', field: 'total' }
      ],
      data: [
        {
          name: 'Shokhurkh',
          phone: '+99899-844-24-31',
          payed: 440000.00,
          notPayed: 10000.00,
          total: 450000.00
        },
        {
          name: 'Shokhurkh',
          phone: '+99899-844-24-31',
          payed: 440000.00,
          notPayed: 10000.00,
          total: 450000.00
        },
        {
          name: 'Shokhurkh',
          phone: '+99899-844-24-31',
          payed: 440000.00,
          notPayed: 10000.00,
          total: 450000.00
        },
        {
          name: 'Shokhurkh',
          phone: '+99899-844-24-31',
          payed: 440000.00,
          notPayed: 10000.00,
          total: 450000.00
        },
        {
          name: 'Shokhurkh',
          phone: '+99899-844-24-31',
          payed: 440000.00,
          notPayed: 10000.00,
          total: 450000.00
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