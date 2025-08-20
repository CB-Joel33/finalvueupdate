<template>
  <div class="flex justify-center items-center gap-8 my-8 paginate">
    <template v-if="!props.loading">
      <button
        :disabled="!hasPreviousPage || props.loading"
        @click="$emit('page-change', currentPage - 1)"
        class="pagination-button"
      >
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </button>

      <div class="flex gap-2 flex-wrap items-center">
        <template v-for="page in getPages" :key="page">
          <button
            v-if="typeof page === 'number'"
            :class="[
              'pagination-button',
              page === currentPage ? 'bg-primary text-white border-primary' : '',
            ]"
            :disabled="page === currentPage || props.loading"
            @click="$emit('page-change', page)"
          >
            {{ page }}
          </button>
          <span v-else class="px-2 text-black select-none">{{ page }}</span>
        </template>
      </div>

      <button
        :disabled="!hasNextPage || props.loading"
        @click="$emit('page-change', currentPage + 1)"
        class="pagination-button"
      >
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </button>
    </template>
    <template v-else>
      <div class="flex items-center justify-center w-full h-8">
        <svg class="animate-spin h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
        </svg>
        <span class="ml-2 text-primary">Loading...</span>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
interface Props {
  currentPage: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  loading?: boolean;
}

const props = defineProps<Props>();

const getPages = computed(() => {
  const pages: (number | string)[] = [];
  const { currentPage, totalPages } = props;

  if (totalPages <= 7) {
    // Show all pages if not too many
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    // Always show first, last, current, and neighbors
    if (currentPage <= 4) {
      for (let i = 1; i <= 5; i++) pages.push(i);
      pages.push("...");
      pages.push(totalPages);
    } else if (currentPage >= totalPages - 3) {
      pages.push(1);
      pages.push("...");
      for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      pages.push("...");
      for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
      pages.push("...");
      pages.push(totalPages);
    }
  }
  return pages;
});

defineEmits<{
  (e: "page-change", page: number): void;
}>();
</script>

<style scoped>
.pagination-button {
  width: 32px;
  height: 32px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: black;
  align-items: center;
  border: 1px solid black;
}

.pagination-button:disabled {
  cursor: not-allowed;
  opacity: 1;
}

.pagination-button:not(:disabled):hover {
  background-color: #000462;
  color: white;
  border-color: #000462;
}
</style>
