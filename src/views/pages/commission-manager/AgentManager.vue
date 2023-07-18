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
import TabComponent from '../../components/general/TabComponent.vue'


const drawerTitle = 'Master Product'

const tabs = [
  {
    icon: 'tabler-zoom-exclamation',
    title: 'Late Actions',
    to: { name: 'AM Late Actions' },
  },
  {
    icon: 'tabler-users-group',
    title: 'Agents',
    to: { name: 'AM Agents' },
  },
  {
    icon: 'tabler-building-store',
    title: 'Shops',
    to: { name: 'AM Shops' },
  },
]
</script>

<style scoped>
.productsrouter {
  margin-block-start: 20px;
}
</style>
