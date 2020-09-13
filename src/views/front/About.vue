<template>
  <div class="about">
    <h2>關於我們</h2>
    <div id="edit"></div>
  </div>
</template>
<script>
/* global Quill  */

export default {
  data() {
    return {
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
    };
  },
  methods: {
  },
  mounted() {
    const vm = this;
    const editor = document.getElementById('edit');
    this.quill = new Quill(editor, {
      theme: 'snow',
      modules: {
        toolbar: vm.quillToolbarOptions,
      },
      placeholder: '請輸入產品說明',
    });
  },
};
</script>
