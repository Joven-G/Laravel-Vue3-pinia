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

const drawerTitle = 'Consignment'

const tabs = [
  {
    icon: 'tabler-building-bank',
    title: 'Requests',
    to: { name: 'Consignment Request' },
  },
  {
    icon: 'tabler-receipt-refund',
    title: 'Offers',
    to: { name: 'Consignment Offer' },
  },
  {
    icon: 'tabler-file-invoice',
    title: 'Open',
    to: { name: 'Consignment Open' },
  },
  {
    icon: 'tabler-certificate',
    title: 'Completed',
    to: { name: 'Consignment Completed' },
  },
]
</script>

<style scoped>
.productsrouter {
  margin-block-start: 20px;
}
</style>
