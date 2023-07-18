<template>
  <div>
    <TabComponent
      :drawer-title="drawerTitle"
      :tabs="tabs"
    >
      <template #default>
        <div class="productsrouter">
          <RouterView />
        </div>
      </template>
    </TabComponent>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import TabComponent from '../../../components/general/TabComponent.vue'

const drawerTitle = 'Sales Manager'

const tabs = [
  {
    icon: 'tabler-building-bank',
    title: 'Actions',
    to: { name: 'Consignment Request' },
  },
  {
    icon: 'tabler-receipt-refund',
    title: 'Payments',
    to: { name: 'Consignment Offer' },
  },
  {
    icon: 'tabler-file-invoice',
    title: 'My Stock',
    to: { name: 'Consignment Open' },
  },
]
</script>

<style scoped>
.productsrouter {
  margin-block-start: 20px;
}
</style>
