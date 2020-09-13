<template>
  <div>
    <Loading :active.sync="isLoading"></Loading>
    <h2 class="h3 m-3 text-left">
      產品列表
      <button type="button" class="btn btn-warning float-right"
        @click="openModal('new', {})">新增產品</button>
    </h2>
    <table class="table mt-4">
      <thead>
        <tr class="bg-light">
          <th width="150">分類</th>
          <th>產品名稱</th>
          <th width="100" class="text-right">原價</th>
          <th width="100" class="text-right">售價</th>
          <th width="150" class="text-center">是否啟用</th>
          <th width="120">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">{{ item.origin_price }}</td>
          <td class="text-right">{{ item.price }}</td>
          <td class="text-center">
            <span class="text-danger" v-if="item.enabled">啟用</span>
            <span class="text-success" v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-info btn-sm"
                @click="openModal('edit', item)">編輯</button>
              <button type="button" class="btn btn-outline-danger btn-sm"
                @click="openModal('delete', item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pages="pagination" @page-counting="getProducts" />
    <ProductModal ref="modal" :execution="productFn" :product="tempProduct"
      @update-products="getProducts"
      @change-loading="changeLaodingStatus"
      @change-alert-status="changeAlertStatus"
      @ctrl-modal="ctrlModal" />
    <div class="alert alert-warning fade show position-fixed
      fixed-bottom m-auto rounded-0 text-center"
      v-show="isAjaxFail" role="alert">
      伺服器連線錯誤!!
      <button type="button" class="close" aria-label="Close"
        @click.prevent="changeAlertStatus(false)">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
/* global $  */
import ProductModal from '@/components/ProductModal.vue';

export default {
  data() {
    return {
      products: [],
      tempProduct: {
        imageUrl: [],
      },
      pagination: {},
      isLoading: false,
      productFn: '',
      isAjaxFail: false,
    };
  },
  components: {
    ProductModal,
  },
  // props: ['token'],
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/products?page=${page}&paged=5`;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        this.products = res.data.data;
        this.pagination = res.data.meta.pagination;
      }).catch(() => {
        this.isAjaxFail = true;
        this.isLoading = false;
      });
    },
    openModal(status, product) {
      this.productFn = status;
      if (status === 'edit') {
        this.$bus.$emit('get-product-id', product.id);
      } else {
        this.tempProduct = JSON.parse(JSON.stringify(product));
        this.$bus.$emit('empty-quill-content');
        $(this.$refs.modal.$el).modal('show');
      }
    },
    changeAlertStatus(status) {
      this.isAjaxFail = status;
    },
    changeLaodingStatus(status) {
      this.isLoading = status;
    },
    ctrlModal(isOpen) {
      $(this.$refs.modal.$el).modal(isOpen ? 'show' : 'hide');
    },
  },
  created() {
    this.getProducts();
  },
  mounted() {
    this.$bus.$emit('active-menu', 0);
  },
};
</script>
