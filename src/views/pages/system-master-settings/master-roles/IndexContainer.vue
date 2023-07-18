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


const drawerTitle = 'Roles & Permissions'

const tabs = [
  {
    icon: 'tabler-user-plus',
    title: 'Roles',
    to: { name: 'Master Roles' },
  },
  {
    icon: 'tabler-lock',
    title: 'Permissions',
    to: { name: 'Master Permissions' },
  },
]

const route = useRoute()

const isActiveRoute = routeName => {
  return route.matched.some(record => record.name === routeName)
}
</script>

<style scoped>
.productsrouter {
  margin-block-start: 20px;
}
</style>
