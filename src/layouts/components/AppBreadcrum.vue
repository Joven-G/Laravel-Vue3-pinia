<template>
  <VContainer
    v-if="pageTitle || breadcrumb"
    class="content-header ma-0 pa-0 mt-n2"
  >
    <!-- Content Left -->
    <span class="content-div d-flex flex-row align-center mt-n3">
      <span v-if="iconName">
        <VIcon
          left
          size="large"
        >{{ iconName }}</VIcon>
      </span>
      <span class="my-2 pl-1">
        <h2 class="content-header-title mb-0">
          {{ pageTitle }}
        </h2>
      </span>
      <span class="hidden-sm-and-down mt-1">
        <VBreadcrumbs v-if="breadcrumb && breadcrumb.length">
          <VBreadcrumbsItem
            v-for="item in breadcrumb"
            :key="item.text"
            :to="item.to"
            :disabled="item.active"
            :exact="item.exact"
            link
          >
            {{ item.text }}
          </VBreadcrumbsItem>
        </VBreadcrumbs>
      </span>
    </span>
    <!-- Content Right -->
  </VContainer>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const pageTitle = computed(() => route.meta.pageTitle)
const breadcrumb = computed(() => route.meta.breadcrumb)
const iconName = computed(() => route.meta.icon)

// const iconName = ref('mdi-account')
</script>

<style scoped>
.content-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.content-header-title {
  margin-block-end: 10px;
}

.align-center {
  align-items: center;
}

/* Add more custom styles as needed */
</style>
