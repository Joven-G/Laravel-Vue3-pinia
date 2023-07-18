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

<script setup lang="ts">
import axios from '@/utils/axios'
import { computed, onMounted, shallowRef, watch } from 'vue'
import { RouterView } from 'vue-router'
import TabComponent from '../../../components/general/TabComponent.vue'

const masterDataStats = shallowRef({
  "total_industries": null,
  "total_brands": null,
  "total_products": null,
  "total_product_uoms": null,
})

watch(masterDataStats, console.log)

const drawerTitle = 'Master Product'

const tabs = computed(() => [
  {
    icon: 'tabler-building-factory-2',
    title: 'Industry',
    totalItem: masterDataStats.value['total_industries'],
    to: { name: 'master_industry' },
  },
  {
    icon: 'tabler-badge-tm',
    title: 'Brand',
    totalItem: masterDataStats.value['total_brands'],
    to: { name: 'master_brand' },
  },
  {
    icon: 'tabler-flask',
    title: 'Product',
    totalItem: masterDataStats.value['total_products'],
    to: { name: 'master_product' },
  },
  {
    icon: 'tabler-package',
    title: 'UoM',
    totalItem: masterDataStats.value['total_product_uoms'],
    to: { name: 'master_uom' },
  },
])

onMounted(() => {
  axios.get("v1/product-master-data-stats").then(res => {
    masterDataStats.value = res.data.data
  }).catch(err => {
    console.log(err)
  })
})
</script>

<style scoped>
.productsrouter {
  margin-block-start: 20px;
}
</style>
