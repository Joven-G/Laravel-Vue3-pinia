<template>
  <div>
    <section class="hidden-md-and-up">
      <VCard
        class="mb-6 pa-3"
        style="position: relative; z-index: 50;"
      >
        <IconBtn
          id="vertical-nav-toggle-btn"
          class=""
          @click="drawer = !drawer"
        >
          <VIcon
            size="26"
            icon="tabler-menu-2"
          />
        </IconBtn>
        <Teleport to="body">
          <VNavigationDrawer
            v-model="drawer"
            class="drawer-container"
          >
            <VCardTitle class="pa-1 ma-4">
              <strong>{{ drawerTitle }}</strong>
            </VCardTitle>
            <template
              v-for="tab in tabs"
              :key="tab.title"
            >
              <VListItem :to="tab.to">
                <VIcon
                  :size="20"
                  class="mb-2"
                >
                  {{ tab.icon }}
                </VIcon>
                <button
                  class="drawer-button"
                  @click="navigateTo(tab.to)"
                >
                  <section class="d-flex align-center pa-2">
                    <span
                      class="me-1"
                      style="font-size: 18px;"
                    >
                      {{ tab.title }} 
                      <VChip
                        label
                        color="info"
                        text-color="white"
                      >
                        {{ tab.totalItem }}
                      </VChip>
                    </span>
                  </section>
                </button>
              </VListItem>
            </template>
          </VNavigationDrawer>
        </Teleport>
      </VCard>
    </section>
    <section class="hidden-sm-and-down">
      <VCard
        class="mb-6 pa-2"
        style="position: relative; z-index: 999;"
      >
        <VTabs
          v-model="activeTab"
          class="v-tabs-pill"
        >
          <VTab
            v-for="tab in tabs"
            :key="tab.title"
            :to="tab.to"
          >
            <VIcon
              :size="18"
              :icon="tab.icon"
              class="me-1"
            />
            <p class="mb-0 d-flex align-center">
              <span class="d-inline-block mr-1">
                {{ tab.title }} 
              </span>
              <VChip
                label
                size="x-small"
                class="text-white bg-info"
              >
                {{ tab.totalItem }}
              </VChip>
            </p>
          </VTab>
        </VTabs>
      </VCard>
    </section>
    <div class="productsrouter">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { RouterView, useRouter } from 'vue-router'

const props = defineProps({
  drawerTitle: {
    type: String,
    default: 'Default Title',
    required: true,
  },
  tabs: {
    type: Array,
    required: true,
  },
})

const drawer = ref(false)
const activeTab = ref(null)
const router = useRouter()

onMounted(() => {
  setActiveTab(router.currentRoute.value)
})

router.afterEach(to => {
  setActiveTab(to)
})

function setActiveTab(route) {
  const currentRouteName = route.name
  const activeTabInfo = props.tabs.find(tab => tab.to === currentRouteName || (tab.children && tab.children.some(child => child.to === currentRouteName)))
  if (activeTabInfo) {
    if (activeTabInfo.children) {
      activeTab.value = activeTabInfo.to // Keep the top-level tab selected
    } else {
      activeTab.value = currentRouteName // Set the active tab to the current route name
    }
  } else {
    activeTab.value = null
  }
}

function navigateTo(to) {
  router.push({ name: to })
}
</script>

<style scoped>
.drawer-container {
  position: relative;
  z-index: 1200;
}

.align-center {
  display: flex;
  align-items: center;
}

.drawer-button {
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.drawer-button:focus {
  outline: none;
}

.drawer-button:hover {
  background-color: #f5f5f5;
}
</style>
