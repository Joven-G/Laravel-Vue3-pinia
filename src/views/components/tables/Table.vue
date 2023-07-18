<script setup>
import { requiredValidator } from "@validators"
import { reactive, shallowRef, watch } from 'vue'
import { VDataTable } from "vuetify/labs/VDataTable"

const props = defineProps({
  tableHeaders: Array,
  loadingData: Boolean,
  savingData: Boolean,
  deletingData: Boolean, 
  tableData: Array,
})

const emits = defineEmits(['closeDialog', "saveItem", "deleteItem", "refresh"])

const showDialog = defineModel('showDialog', { default: false })
const showPasswordConfirmationModel = defineModel('passwordConfirmationModel', { default: false })

// const sortBy = defineModel('sortBy')
// const sortBy = ref([{ key: "created_at", order: "desc" }])
const itemInput = defineModel('itemInput', { default: "" })

const tableOptions = defineModel('tableOptions', { default: {
  pageLimit: 10,
  currentPage: 1,
  totalItems: 0,
} })

const searchInput = shallowRef("")
const editItemId = shallowRef(null)
const deleteItemId = shallowRef(null)

watch(showPasswordConfirmationModel, value => {
  if (!value && deleteItemId.value) {
    deleteItemId.value = null
  }
})

// form ref
const formRef = shallowRef()

const defaultOptions = {
  mode: "",
  info: {
    title: "",
  },
}

// creating and editing industries dialoag
const dialog = reactive({ ...defaultOptions })

watch(showDialog, val => {
  if(!val) {
    Object.assign(dialog, defaultOptions)
    if (editItemId.value) editItemId.value = null
    if(itemInput.value) itemInput.value = ""
  }
})

/**
 * @param {"Edit" | "Create"} type
 */
function openDialog(type) {
  showDialog.value = true
  if (type === "Create") {
    dialog.mode = "CREATE"
    dialog.info = { title: "Create Industry" }
  } else {
    dialog.mode = "EDIT"
    dialog.info = { title: "Edit Industry" }
  }
}

function closeDialog() {
  if (!props.savingData) {
    showDialog.value = false
    Object.assign(dialog, defaultOptions)
    if (editItemId.value) editItemId.value = null
    if(itemInput.value) itemInput.value = ""
    emits('closeDialog')
  }
}


async function onSave() {
  if (!formRef.value) return
  const result = await formRef.value.validate()

  // form invalid || input value empty || request already in progress
  if (!result.valid || !itemInput.value || props.savingData)
    return

  const itemData = {
    mode: dialog.mode,
    value: itemInput.value,
  }

  if(dialog.mode === 'EDIT' && editItemId.value) {
    itemData.itemId = editItemId.value
  }
  emits('saveItem', itemData)
}
function handleEditItem({ name, id }) {
  itemInput.value = name
  editItemId.value = id
  openDialog('Edit')
}
</script>

<template>
  <div>
    <VDialog
      v-model="showDialog"
      width="700"
      transition="slide-y-transition"
    >
      <VCard>
        <VCardTitle class="bg-primary">
          {{ dialog.info.title }}
          <DialogCloseBtn @click="closeDialog" />
        </VCardTitle>
        <VCardText>
          <div class="text-subtitle-1 text-medium-emphasis">
            Name
          </div>
          <VForm
            ref="formRef"
            @submit.prevent="onSave"
          >
            <VTextField
              v-model="itemInput"
              placeholder="Name"
              :rules="[requiredValidator]"
              :readonly="props.savingData"
            />
            <div class="text-end mt-10">
              <VBtn
                :loading="props.savingData"
                color="primary"
                type="submit"
                :disabled="props.savingData"
              >
                Save
              </VBtn>
            </div>
          </VForm>
        </VCardText>
      </VCard>
    </VDialog>
    <VDialog
      v-model="showPasswordConfirmationModel"
      width="440"
      transition="v-scale-transition"
    >
      <VCard>
        <div
          class="py-6 mx-auto text-center"
          style="inline-size: 90%"
        >
          <VIcon
            icon="mdi-alert-circle-outline"
            class="text-warning"
            style="block-size: 94px;inline-size:94px"
          />
          <h2 class="text-h3 font-weight-medium">
            Are you sure to delete this Industry?
          </h2>
          <p class="text-subtitle-1">
            You won't be able to revert this!
          </p>
          <VBtn
            color="primary"
            type="submit"
            class="mr-3"
            :loading="props.deletingData"
            :disabled="props.deletingData"
            @click="!props.deletingData && emits('deleteItem', deleteItemId)"
          >
            Yes Delete it!
          </VBtn>
          <VBtn
            variant="outlined"
            color="error"
            :disabled="props.deletingData"
            @click="!props.deletingData && (showPasswordConfirmationModel = false)"
          >
            Cancel
          </VBtn>
        </div>
      </VCard>
    </VDialog>
    <VCard class="mb-6">
      <template #title>
        <VRow>
          <VCol>
            <VBtn @click="openDialog('Create')">
              Create
            </VBtn>
          </VCol>
          <VCol
            class="d-flex align-center"
            style="max-inline-size: 340px"
          >
            <p class="font-weight-bold text-sm mr-2 mb-0">
              Search
            </p>
            <VTextField
              v-model="searchInput"
              placeholder="search"
            />
          </VCol>
        </VRow>
      </template>
      <template #text>
        <!-- :sort-by="sortBy" -->
        <VDataTable
          v-model:page="tableOptions.currentPage"
          :loading="props.loadingData"
          :headers="props.tableHeaders"
          :items="props.tableData"
          item-key="name"
          :items-per-page="tableOptions.pageLimit"
          hide-default-footer
        >
          <template #loader>
            <VProgressCircular
              class="table-loading"
              indeterminate
              :size="40"
            />
          </template>
          <template #item.image="{ item }">
            <VImg
              v-if="item.columns.image"
              :src="item.columns.image"
              height="100%"
              width="100px"
              cover
              class="pa-1"
            />
          </template>
          <template #item.action="{ item }">
            <VMenu>
              <template #activator="{ props }">
                <VBtn
                  v-bind="props"
                  variant="text"
                  :ripple="false"
                >
                  <VIcon icon="mdi-dots-vertical" />
                </VBtn>
              </template>
              <VList>
                <VBtn
                  prepend-icon="mdi-pencil-outline"
                  variant="text"
                  block
                  class="justify-start"
                  @click="handleEditItem({name: item.raw.name, id: item.raw.id})"
                >
                  Edit
                </VBtn>
                <VBtn
                  prepend-icon="mdi-trash-can-outline"
                  variant="text"
                  block
                  class="justify-start"
                  @click="
                    () => {
                      deleteItemId = item.raw.id;
                      showPasswordConfirmationModel = true;
                    }
                  "
                >
                  Delete
                </VBtn>
              </VList>
            </VMenu>
          </template>
          <template #bottom>
            <div class="d-flex justify-space-between align-center">
              <div class="d-flex align-center gap-3">
                <span class="d-inline-block">
                  Showing  {{ tableOptions.currentPage }} to 
                </span>
                <VSelect
                  v-model="tableOptions.pageLimit"
                  :items="[2, 5, 10, 15, 20]"
                  variant="outlined"
                />
                <span class="d-inline-block">
                  of {{ tableOptions.totalItems }} entries
                </span>
              </div>
              <VBtn
                class="ml-2"
                density="compact"
                icon="mdi-refresh"
                @click="emits('refresh')"
              />
              <VPagination
                v-model="tableOptions.currentPage"
                class="ml-auto"
                rounded="circle"
                :total-visible="5"
                :length="Math.ceil(tableOptions.totalItems / tableOptions.pageLimit)"
                style="max-inline-size: 400px"
              />
            </div>
          </template>
        </VDataTable>
      </template>
    </VCard>
  </div>
</template>

<style>
  .table-loading {
    position: absolute;
    inset-block-start:50%;
    inset-inline-start: 50%;
    transform: translate(-50%, -50%);
  }
</style>
