<script setup lang="ts">
import * as industriesServices from "@/services/master-data/industries"
import Table from '@/views/components/tables/Table.vue'
import { onMounted, ref, shallowReactive } from "vue"

const showDialog = ref(false)
const showPasswordConfirmationModel = ref(false)

const tableOptions = ref({
  pageLimit: 10,
  currentPage: 1,
  totalItems: 0,
})

const tableHeaders = [
  {
    title: "Name",
    align: "start",
    key: "name",
  },
  { title: "Action", key: "action", sortable: false },
]

const industriesData = shallowReactive({
  loading: false,
  saving: false, // loading state => creating and editing
  deleting: false, 
  data: [],
})

const industryInput = ref("")


async function getIndustriesData() {
  try {
    industriesData.loading = true

    const industries = await industriesServices.getIndustries({
      page: tableOptions.value.currentPage,
      limit: tableOptions.value.pageLimit,
    })

    industriesData.data = industries.data
    tableOptions.value.totalItems = industries.meta.total
  } catch (err) {
    console.log(err)
  } finally {
    industriesData.loading = false
  }
}

async function deleteIndustries(deleteIndustryId) {
  if (!deleteIndustryId) return
  try {
    industriesData.deleting = true
    await industriesServices.deleteIndustry(deleteIndustryId)
    industriesData.deleting = false
    showPasswordConfirmationModel.value = false
    await getIndustriesData()
   
  } catch (err) {
    industriesData.deleting = false
    console.log(err)
  }
}

async function createNewIndustry({ name }) {
  industriesData.saving = true
  try {
    const res = await industriesServices.createNewIndustries({ name })

    industriesData.data = industriesData.data.concat(res.data)
    tableOptions.value.totalItems++

    industriesData.saving = false
    industryInput.value = ""
    showDialog.value = false
  } catch (err) {
    console.log(err)
    industriesData.saving = false
  }
}

async function editIndustry({ editIndustryId, name }) {
  try {
    industriesData.saving = true
    await industriesServices.updateIndustries(editIndustryId, { name })
    industriesData.saving = false
    industryInput.value = ""
    showDialog.value = false
    await getIndustriesData()
  } catch(err) {
    console.log(err)
    industriesData.saving = false
  }
}
function onSave({ mode, value, itemId }) {
  if(mode === 'CREATE') {
    createNewIndustry({ name: value })
  }
  if(mode === 'EDIT') {
    editIndustry({ name: value, editIndustryId: itemId })
  }
}
onMounted(() => {
  getIndustriesData()
})
</script>

<template>
  <div>
    <Table
      v-model:showDialog="showDialog"
      v-model:tableOptions="tableOptions"
      v-model:itemInput="industryInput"
      v-model:passwordConfirmationModel="showPasswordConfirmationModel"
      :table-headers="tableHeaders"
      :loading-data="industriesData.loading"
      :saving-data="industriesData.saving"
      :deleting-data="industriesData.deleting"
      :table-data="industriesData.data"
      @saveItem="onSave"
      @deleteItem="deleteIndustries"
      @closeDialog="console.log"
      @refresh="getIndustriesData"
    />
  </div>
</template>
