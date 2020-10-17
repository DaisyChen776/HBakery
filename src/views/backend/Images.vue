<template>
  <div>
    <Loading :active.sync="isLoading"></Loading>
    <h2 class="h3 m-3 text-left">圖片列表</h2>
    <table class="table mt-4">
      <thead>
        <tr class="bg-light">
          <th width="150">圖片</th>
          <th class="text-left">圖片網址</th>
          <th width="120">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in images" :key="item.id">
          <td><img class="img-fluid" :src="item.path"></td>
          <td class="text-left text-break">{{ item.path }}</td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-danger btn-sm"
                @click="openModal(item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <Pagination :pages="pagination" @page-counting="getImages" />

    <!-- 刪除圖片彈出視窗 -->
    <div class="modal fade" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title" id="exampleModalLabel">刪除產品</h5>
          <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body text-center">
          <p class="h4 mb-3 text-danger">是否刪除此張圖片</p>
          <img class="img-fluid" :src="tempImage.path">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" @click="delImg">確定</button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
/* global $  */

export default {
  data() {
    return {
      images: [],
      tempImage: {},
      pagination: {},
      isLoading: false,
    };
  },
  methods: {
    getImages(page = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/storage?page=${page}&paged=5`;
      this.$http.get(api).then((res) => {
        this.images = res.data.data;
        this.pagination = res.data.meta.pagination;
        this.isLoading = false;
      }).catch(() => {
        this.isLoading = false;
      });
    },
    delImg() {
      $(this.$refs.modal).modal('hide');
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/storage/${this.tempImage.id}`;
      this.$http.delete(api).then(() => {
        this.getImages();
      }).catch(() => {
        this.isLoading = false;
        $(this.$refs.modal).modal('hide');
      });
    },
    openModal(image) {
      this.tempImage = image;
      $(this.$refs.modal).modal('show');
    },
  },
  created() {
    this.getImages();
  },
};
</script>
