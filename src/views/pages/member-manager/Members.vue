<script setup>
import { useUserListStore } from '@/@fakeData/other/usertablestate'
import { avatarText } from '@core/utils/formatters'
import { VDataTableServer } from 'vuetify/labs/VDataTable'

const userListStore = useUserListStore()
const searchQuery = ref('')
const selectedRole = ref()
const selectedPlan = ref()
const selectedStatus = ref()
const totalPage = ref(1)
const totalUsers = ref(0)
const users = ref([])

const options = ref({
  page: 1,
  itemsPerPage: 10,
  sortBy: [],
  groupBy: [],
  search: undefined,
})

// Headers
const headers = [
  {
    title: 'UUID',
    key: 'uuid',
  },
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Location',
    key: 'location',
  },
  {
    title: 'Rating',
    key: 'Parent',
  },
  {
    title: 'Status',
    key: 'status',
  },
  {
    title: 'Actions',
    key: 'actions',
    sortable: false,
  },
]

// 👉 Fetching users
const fetchUsers = () => {
  userListStore.fetchUsers({
    q: searchQuery.value,
    status: selectedStatus.value,
    plan: selectedPlan.value,
    role: selectedRole.value,
    options: options.value,
  }).then(response => {
    users.value = response.data.users
    totalPage.value = response.data.totalPage
    totalUsers.value = response.data.totalUsers
    options.value.page = response.data.page
  }).catch(error => {
    console.error(error)
  })
}

const paginationMeta = computed(() => {
  return (options, total) => {
    const start = (options.page - 1) * options.itemsPerPage + 1
    const end = Math.min(options.page * options.itemsPerPage, total)
    
    return `Showing ${start} to ${end} of ${total} entries`
  }
})

watchEffect(fetchUsers)

const resolveUserRoleVariant = role => {
  const roleLowerCase = role.toLowerCase()
  if (roleLowerCase === 'subscriber')
    return {
      color: 'warning',
      icon: 'tabler-circle-check',
    }
  if (roleLowerCase === 'author')
    return {
      color: 'success',
      icon: 'tabler-user',
    }
  if (roleLowerCase === 'maintainer')
    return {
      color: 'primary',
      icon: 'tabler-chart-pie-2',
    }
  if (roleLowerCase === 'editor')
    return {
      color: 'info',
      icon: 'tabler-edit',
    }
  if (roleLowerCase === 'admin')
    return {
      color: 'secondary',
      icon: 'tabler-device-laptop',
    }
  
  return {
    color: 'primary',
    icon: 'tabler-user',
  }
}

const resolveUserStatusVariant = stat => {
  const statLowerCase = stat.toLowerCase()
  if (statLowerCase === 'pending')
    return 'warning'
  if (statLowerCase === 'active')
    return 'success'
  if (statLowerCase === 'inactive')
    return 'secondary'
  
  return 'primary'
}

const deleteUser = id => {
  userListStore.deleteUser(id)

  // refetch User
  fetchUsers()
}
</script>

<template>
  <div>
    <VRow>
      <VCol cols="12">
        <VCard>
          <div class="pa-5">
            <section class="d-flex flex-wrap py-4 ">
              <div class="">
                <AppSelect
                  :model-value="options.itemsPerPage"
                  :items="[
                    { value: 10, title: '10' },
                    { value: 25, title: '25' },
                    { value: 50, title: '50' },
                    { value: 100, title: '100' },
                    { value: -1, title: 'All' },
                  ]"
                  style="inline-size: 6.25rem;"
                  @update:model-value="options.itemsPerPage = parseInt($event, 10)"
                />
              </div>
              <VSpacer />

              <div class=" d-flex gap-4 align-right">
                <!-- 👉 Search  -->
                <div style="inline-size: 10rem;">
                  <AppTextField
                    v-model="searchQuery"
                    placeholder="Search"
                    density="compact"
                  />
                </div>

                <!--
                  👉 Add user button 
                  <VBtn
                  prepend-icon="tabler-plus"
                  @click="isAddNewUserDrawerVisible = true"
                  >
                  Add New User
                  </VBtn>
                  </div> 
                -->
              </div>
            </section>

            <VDivider />

            <!-- SECTION datatable -->
            <VDataTableServer
              v-model:items-per-page="options.itemsPerPage"
              v-model:page="options.page"
              :items="users"
              :items-length="totalUsers"
              :headers="headers"
              class="text-no-wrap"
              @update:options="options = $event"
            >
              <!-- User -->
              <template #item.user="{ item }">
                <div class="d-flex align-center">
                  <VAvatar
                    size="34"
                    :variant="!item.raw.avatar ? 'tonal' : undefined"
                    :color="!item.raw.avatar ? resolveUserRoleVariant(item.raw.role).color : undefined"
                    class="me-3"
                  >
                    <VImg
                      v-if="item.raw.avatar"
                      :src="item.raw.avatar"
                    />
                    <span v-else>{{ avatarText(item.raw.fullName) }}</span>
                  </VAvatar>

                  <div class="d-flex flex-column">
                    <h6 class="text-base">
                      <RouterLink
                        :to="{ name: 'apps-user-view-id', params: { id: item.raw.id } }"
                        class="font-weight-medium user-list-name"
                      >
                        {{ item.raw.fullName }}
                      </RouterLink>
                    </h6>

                    <span class="text-sm text-medium-emphasis">@{{ item.raw.email }}</span>
                  </div>
                </div>
              </template>

              <!-- 👉 Role -->
              <template #item.role="{ item }">
                <div class="d-flex align-center gap-4">
                  <VAvatar
                    :size="30"
                    :color="resolveUserRoleVariant(item.raw.role).color"
                    variant="tonal"
                  >
                    <VIcon
                      :size="20"
                      :icon="resolveUserRoleVariant(item.raw.role).icon"
                    />
                  </VAvatar>
                  <span class="text-capitalize">{{ item.raw.role }}</span>
                </div>
              </template>

              <!-- Plan -->
              <template #item.plan="{ item }">
                <span class="text-capitalize font-weight-medium">{{ item.raw.currentPlan }}</span>
              </template>

              <!-- Status -->
              <template #item.status="{ item }">
                <VChip
                  :color="resolveUserStatusVariant(item.raw.status)"
                  size="small"
                  label
                  class="text-capitalize"
                >
                  {{ item.raw.status }}
                </VChip>
              </template>

              <!-- Actions -->
              <template #item.actions="{ item }">
                <IconBtn @click="deleteUser(item.raw.id)">
                  <VIcon icon="tabler-trash" />
                </IconBtn>

                <IconBtn>
                  <VIcon icon="tabler-edit" />
                </IconBtn>

                <VBtn
                  icon
                  variant="text"
                  size="small"
                  color="medium-emphasis"
                >
                  <VIcon
                    size="24"
                    icon="tabler-dots-vertical"
                  />

                  <VMenu activator="parent">
                    <VList>
                      <VListItem :to="{ name: 'apps-user-view-id', params: { id: item.raw.id } }">
                        <template #prepend>
                          <VIcon icon="tabler-eye" />
                        </template>

                        <VListItemTitle>View</VListItemTitle>
                      </VListItem>

                      <VListItem link>
                        <template #prepend>
                          <VIcon icon="tabler-pencil" />
                        </template>
                        <VListItemTitle>Edit</VListItemTitle>
                      </VListItem>

                      <VListItem @click="deleteUser(item.raw.id)">
                        <template #prepend>
                          <VIcon icon="tabler-trash" />
                        </template>
                        <VListItemTitle>Delete</VListItemTitle>
                      </VListItem>
                    </VList>
                  </VMenu>
                </VBtn>
              </template>

              <!-- pagination -->
              <template #bottom>
                <VDivider />
                <div class="d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3">
                  <p class="text-sm text-disabled mb-0">
                    {{ paginationMeta(options, totalUsers) }}
                  </p>

                  <VPagination
                    v-model="options.page"
                    :length="Math.ceil(totalUsers / options.itemsPerPage)"
                    :total-visible="$vuetify.display.xs ? 1 : Math.ceil(totalUsers / options.itemsPerPage)"
                  >
                    <template #prev="slotProps">
                      <VBtn
                        variant="tonal"
                        color="default"
                        v-bind="slotProps"
                        :icon="false"
                      >
                        Previous
                      </VBtn>
                    </template>

                    <template #next="slotProps">
                      <VBtn
                        variant="tonal"
                        color="default"
                        v-bind="slotProps"
                        :icon="false"
                      >
                        Next
                      </VBtn>
                    </template>
                  </VPagination>
                </div>
              </template>
            </VDataTableServer>
          <!-- SECTION -->
          </div>
        </VCard>
      </vcol>
    </vrow>
  </div>
</template>

<style lang="scss">
.app-user-search-filter {
  inline-size: 31.6rem;
}

.text-capitalize {
  text-transform: capitalize;
}

.user-list-name:not(:hover) {
  color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
}
</style>
