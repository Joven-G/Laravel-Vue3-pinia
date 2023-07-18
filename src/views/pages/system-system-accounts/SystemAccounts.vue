<template>
  <section>
    <VCard class="pa-4">
      <VRow>
        <VCol cols="12">
          <section class="d-flex flex-wrap py-4">
            <div style="inline-size: 80px;">
              <VSelect
                v-model="rowPerPage"
                density="compact"
                variant="outlined"
                :items="[10, 20, 30, 50]"
              />
            </div>
            <VSpacer />
            <div class="d-flex align-right flex-wrap gap-4">
              <!-- 👉 Search -->
              <div>
                <VTextField
                  v-model="searchQuery"
                  placeholder="Search"
                  density="compact"
                  style="inline-size: 150px;"
                />
              </div>
              <!-- 👉 Add user button -->
              <VBtn prepend-icon="tabler-plus">
                Add New User
              </VBtn>
            </div>
          </section>
          <VDivider />

          <VTable
            class=""
            density="default"
            hover
            fixed-header
          >
            <!-- 👉 table head -->
            <thead class="thead">
              <tr>
                <th
                  scope="col"
                  :class="{ 'sortable': sortColumn === 'fullName' }"
                  @click="sortBy('fullName')"
                >
                  <strong>USER</strong>
                  <VIcon
                    v-show="sortColumn === 'fullName'"
                    :class="sortDirection === 'asc' ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                  />
                </th>
                <th
                  scope="col"
                  :class="{ 'sortable': sortColumn === 'email' }"
                  @click="sortBy('email')"
                >
                  <strong>EMAIL</strong>
                  <VIcon
                    v-show="sortColumn === 'email'"
                    :class="sortDirection === 'asc' ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                  />
                </th>
                <th
                  scope="col"
                  :class="{ 'sortable': sortColumn === 'role' }"
                  @click="sortBy('role')"
                >
                  <strong>ROLE</strong>
                  <VIcon
                    v-show="sortColumn === 'role'"
                    :class="sortDirection === 'asc' ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                  />
                </th>
                <th
                  scope="col"
                  :class="{ 'sortable': sortColumn === 'currentPlan' }"
                  @click="sortBy('currentPlan')"
                >
                  <strong>PLAN</strong>
                  <VIcon
                    v-show="sortColumn === 'currentPlan'"
                    :class="sortDirection === 'asc' ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                  />
                </th>
                <th
                  scope="col"
                  :class="{ 'sortable': sortColumn === 'billing' }"
                  @click="sortBy('billing')"
                >
                  <strong>BILLING</strong>
                  <VIcon
                    v-show="sortColumn === 'billing'"
                    :class="sortDirection === 'asc' ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                  />
                </th>
                <th
                  scope="col"
                  :class="{ 'sortable': sortColumn === 'status' }"
                  @click="sortBy('status')"
                >
                  <strong>STATUS</strong>
                  <VIcon
                    v-show="sortColumn === 'status'"
                    :class="sortDirection === 'asc' ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                  />
                </th>
                <th scope="col">
                  <strong>ACTIONS</strong>
                </th>
              </tr>
            </thead>

            <!-- 👉 table body -->
            <tbody>
              <tr
                v-for="user in paginatedUsers"
                :key="user.id"
                style="block-size: 3.75rem;"
              >
                <!-- 👉 User -->
                <td>
                  <span class="text-sm text-base">@{{ user.fullName }}</span>
                </td>
                <!-- 👉 Email -->
                <td>
                  <span class="text-sm text-base">@{{ user.email }}</span>
                </td>

                <!-- 👉 Role -->
                <td>
                  <span class="text-capitalize text-base">{{ user.role }}</span>
                </td>

                <!-- 👉 Plan -->
                <td>
                  <span class="text-capitalize text-base font-weight-semibold">
                    {{ user.currentPlan }}
                  </span>
                </td>

                <!-- 👉 Billing -->
                <td>
                  <span class="text-base">{{ user.billing }}</span>
                </td>

                <!-- 👉 Status -->
                <td>
                  <span class="text-base">{{ user.status }}</span>
                </td>

                <!-- 👉 Actions -->
                <td
                  class="text-center"
                  style="inline-size: 5rem;"
                >
                  <VBtn
                    icon
                    size="x-small"
                    color="default"
                    variant="text"
                  >
                    <VIcon
                      size="22"
                      icon="tabler-dots-vertical"
                    />
                  </VBtn>
                </td>
              </tr>
            </tbody>
          </VTable>
          <tfoot v-show="!filteredUsers.length">
            <tr>
              <td
                colspan="7"
                class="text-center"
              >
                No data available
              </td>
            </tr>
          </tfoot>
        </VCol>
      </VRow>
      <VDivider />
      <VCardText class="d-flex align-center flex-wrap justify-space-between gap-4 py-3 px-5">
        <span class="text-sm text-disabled">
          {{
            ((currentPage - 1) * rowPerPage + 1) +
              ' to ' +
              Math.min(currentPage * rowPerPage, filteredUsers.length) +
              ' of ' +
              filteredUsers.length +
              ' entries'
          }}
        </span>

        <VPagination
          v-model="currentPage"
          size="small"
          :total-visible="5"
          :length="totalPage"
        />
      </VCardText>
    </VCard>

    <VDivider />
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { users } from '../../../@fakeData/testTable'

const rowPerPage = ref(10)
const searchQuery = ref('')

// Pagination related variables
const currentPage = ref(1)
const totalPage = computed(() => Math.ceil(filteredUsers.value.length / rowPerPage.value))

// Computed property for the filtered users
const filteredUsers = computed(() => {
  const query = searchQuery.value.toLowerCase()
  
  return users.filter(user =>
    user.fullName.toLowerCase().includes(query) ||
    user.email.toLowerCase().includes(query) ||
    user.role.toLowerCase().includes(query) ||
    user.currentPlan.toLowerCase().includes(query) ||
    user.billing.toLowerCase().includes(query) ||
    user.status.toLowerCase().includes(query),
  )
})

// Computed property for the paginated users
const paginatedUsers = computed(() => {
  const startIndex = (currentPage.value - 1) * rowPerPage.value
  const endIndex = currentPage.value * rowPerPage.value
  
  return filteredUsers.value.slice(startIndex, endIndex)
})

// Sorting
const sortColumn = ref('')
const sortDirection = ref('')

// Function to sort the users based on a column
const sortBy = column => {
  if (sortColumn.value === column) {
    // If already sorting by the same column, toggle the sort direction
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
  } else {
    // If sorting by a new column, set the sort column and direction
    sortColumn.value = column
    sortDirection.value = 'asc'
  }

  // Perform the sorting
  filteredUsers.value.sort((a, b) => {
    const aValue = a[column]
    const bValue = b[column]

    if (aValue === bValue) {
      return 0
    } else if (sortDirection.value === 'asc') {
      return aValue < bValue ? -1 : 1
    } else {
      return aValue > bValue ? -1 : 1
    }
  })
}
</script>

<style scoped>
.v-icon.sortable {
  color: red;
}
</style>
