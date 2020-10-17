<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center mt-5">
      <li class="page-item" :class="{disabled: pages.current_page === 1 }">
        <a class="page-link" href="#" aria-label="Previous"
          @click="pageCounting(pages.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        v-for="(item, idx) in pages.total_pages"
        :key="idx"
        class="page-item"
        :class="{active: item === pages.current_page}"
      >
        <a class="page-link" href="#" @click="pageCounting(item)">{{ item }}</a>
      </li>
      <li class="page-item" :class="{disabled: pages.current_page === pages.total_pages}">
        <a class="page-link" href="#" aria-label="Next"
          @click="pageCounting(pages.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    pages: {},
  },
  methods: {
    pageCounting(item) {
      this.$emit('page-counting', item);
    },
  },
};
</script>
