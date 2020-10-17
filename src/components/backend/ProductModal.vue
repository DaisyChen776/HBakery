<template>
  <div class="modal fade" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" :class="execution !== 'delete' ? 'modal-xl' : ''">
      <div class="modal-content">
        <div class="modal-header" :class="execution === 'delete' ? 'bg-danger text-white' : ''">
          <h5 class="modal-title" id="exampleModalLabel">
            <span v-if="execution === 'new'">新增產品</span>
            <span v-else-if="execution === 'edit'">更新產品</span>
            <span v-else-if="execution === 'delete'">刪除產品</span>
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"
            :class="execution === 'delete' ? 'text-white' : ''"
            @click="cleanData">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <!-- 刪除產品彈出視窗 元件 -->
        <div class="modal-body" v-show="execution === 'delete'">
          是否刪除 <strong class="text-danger">{{ product.title }}</strong> 商品(刪除後將無法恢復)。
        </div>
        <!-- 新增/更新 產品 彈出視窗 元件 -->
        <div class="modal-body" v-show="execution !== 'delete'">
          <div class="row">
            <div class="col-sm-4">
              <div class="form-group">
                <label for="imageUrl1">輸入圖片網址</label>
                <input type="text" class="form-control" id="imageUrl1" placeholder="請輸入圖片網址"
                  v-model="tempProduct.imageUrl[0]" />
              </div>
              <img class="img-fluid mb-3" alt=""
                :src="tempProduct.imageUrl[0]" v-show="!!tempProduct.imageUrl[0]" />
              <div class="form-group">
                <label for="imageUrl2">輸入圖片網址</label>
                <input type="text" class="form-control" id="imageUrl2" placeholder="請輸入圖片網址"
                  v-model="tempProduct.imageUrl[1]" />
              </div>
              <img class="img-fluid mb-3" alt=""
                :src="tempProduct.imageUrl[1]" v-show="!!tempProduct.imageUrl[1]" />
              <div class="form-group">
                <label for="imageUrl3">輸入圖片網址</label>
                <input type="text" class="form-control" id="imageUrl3" placeholder="請輸入圖片網址"
                  v-model="tempProduct.imageUrl[2]" />
              </div>
              <img class="img-fluid mb-3" alt=""
                :src="tempProduct.imageUrl[2]" v-show="!!tempProduct.imageUrl[2]" />
              <div class="form-group">
                <label for="imageUrl4">輸入圖片網址</label>
                <input type="text" class="form-control" id="imageUrl4" placeholder="請輸入圖片網址"
                  v-model="tempProduct.imageUrl[3]" />
              </div>
              <img class="img-fluid mb-3" alt=""
                :src="tempProduct.imageUrl[3]" v-show="!!tempProduct.imageUrl[3]" />
              <div class="form-group">
                <label for="imageUrl5">輸入圖片網址</label>
                <input type="text" class="form-control" id="imageUrl5" placeholder="請輸入圖片網址"
                  v-model="tempProduct.imageUrl[4]" />
              </div>
              <img class="img-fluid mb-3" alt=""
                :src="tempProduct.imageUrl[4]" v-show="!!tempProduct.imageUrl[4]" />
              <div class="form-group">
                <label for="customerFile">上傳圖片</label>
                <input type="file" class="form-control" id="customerFile" />
                <div class="text-center">
                  <button type="button" class="btn btn-warning mt-2"
                    @click="uploadFile">
                    <div class="spinner-border spinner-border-sm text-dark" role="status"
                      v-show="isUploadingFile">
                      <span class="sr-only">Loading...</span>
                    </div>
                    上傳圖片
                  </button>
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="form-group">
                <label for="title">標題</label>
                <input type="text" class="form-control" id="title"
                  placeholder="請輸入標題" v-model="tempProduct.title" />
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="category">分類</label>
                  <input type="text" class="form-control" id="category"
                    placeholder="請輸入分類" v-model="tempProduct.category" />
                </div>
                <div class="form-group col-md-6">
                  <label for="unit">單位</label>
                  <input type="text" class="form-control" id="unit"
                    placeholder="請輸入單位" v-model="tempProduct.unit" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="origin_price">原價</label>
                  <input type="number" class="form-control" id="origin_price" placeholder="請輸入原價"
                    v-model="tempProduct.origin_price" />
                </div>
                <div class="form-group col-md-6">
                  <label for="price">售價</label>
                  <input type="text" class="form-control" id="price" placeholder="請輸入售價"
                    v-model="tempProduct.price" />
                </div>
              </div>
              <hr>
              <div class="form-group">
                <label for="content">產品描述</label>
                <textarea class="form-control" id="content" placeholder="請輸入產品描述"
                  v-model="tempProduct.content"></textarea>
              </div>
              <hr>
              <div class="form-group">
                <label for="description">產品說明</label>
                <div id="description"></div>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="inlineRadioOptions"
                  id="enabled" v-model="tempProduct.enabled" />
                <label class="form-check-label" for="enabled">是否啟用</label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal"
            @click="cleanData">取消</button>
          <button type="button" class="btn btn-primary"
            @click="delProduct"
            v-if="execution === 'delete'">確定刪除</button>
          <button type="button" class="btn btn-primary" @click="updateProduct" v-else>
            <span v-if="execution === 'new'">確定新增</span>
            <span v-else-if="execution === 'edit'">確定更新</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $, Quill */

export default {
  data() {
    return {
      tempProduct: {
        imageUrl: [],
      },
      quill: null,
      quillToolbarOptions: [
        [{ size: ['small', false, 'large', 'huge'] }, 'bold', 'italic', 'underline', 'strike'],
        [
          { color: [false, '#333', '#ddd'] },
          { background: [false, '#ccc'] },
        ],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ indent: '-1' }, { indent: '+1' }],
      ],
      isUploadingFile: false,
    };
  },
  props: ['execution', 'product'],
  methods: {
    getProduct(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/product/${id}`;
      this.$emit('change-loading', true);
      this.$http.get(api).then((res) => {
        this.tempProduct = JSON.parse(JSON.stringify(res.data.data));
        // Quill 文字編輯器需資料
        this.quill.setContents(JSON.parse(vm.tempProduct.description));
        this.$emit('change-loading', false);
        this.$emit('ctrl-modal', true);
      }).catch(() => {
        this.$emit('change-loading', false);
        this.$emit('change-alert-status', true);
      });
    },
    updateProduct() {
      let api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/product`; // new
      let httpMethod = 'post';
      if (this.execution === 'edit') { // edit
        api += `/${this.tempProduct.id}`;
        httpMethod = 'patch';
      }
      this.tempProduct.description = JSON.stringify(this.quill.getContents());
      this.$emit('change-loading', true);
      this.$emit('ctrl-modal', false);
      this.$http[httpMethod](api, this.tempProduct).then(() => {
        this.$emit('update-products');
        this.cleanData();
      }).catch(() => {
        this.$emit('change-loading', false);
        this.$emit('change-alert-status', true);
        this.cleanData();
      });
    },
    delProduct() {
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/product/${this.product.id}`;
      this.$emit('ctrl-modal', false);
      this.$emit('change-loading', true);
      this.$http.delete(api).then(() => {
        this.$emit('update-products');
      }).catch(() => {
        this.$emit('change-loading', true);
      });
    },
    uploadFile() {
      this.isUploadingFile = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/storage`;
      const uploadedFile = document.querySelector('#customerFile').files[0];
      const formData = new FormData();
      formData.append('file', uploadedFile);
      this.$http.post(api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((res) => {
        const len = this.tempProduct.imageUrl.length;
        if (len < 5) {
          this.tempProduct.imageUrl[len] = res.data.data.path;
        }
        this.isUploadingFile = false;
      }).catch(() => {
        this.isAjaxFail = true;
      });
    },
    cleanData() {
      this.tempProduct = JSON.parse(JSON.stringify(
        {
          imageUrl: [],
        },
      ));
    },
  },
  mounted() {
    const vm = this;
    const editor = document.getElementById('description');

    // Quill 文字編輯器初始化
    this.quill = new Quill(editor, {
      theme: 'snow',
      placeholder: '請輸入產品說明',
      modules: {
        toolbar: vm.quillToolbarOptions,
      },
    });

    // 接收 bus 傳來的資料
    this.$bus.$on('empty-quill-content', () => {
      $('.ql-editor').empty();
    });
    this.$bus.$on('get-product-id', (id) => {
      this.getProduct(id);
    });
  },
  beforeDestroy() {
    this.$bus.$off('empty-quill-content');
    this.$bus.$off('get-product-id');
  },
};
</script>
