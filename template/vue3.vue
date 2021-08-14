<template>
  <div>这是vue3模版</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";

interface DataInterface {
  name: string;
}

export default defineComponent({
  name: "PageHome",
  components: {},
  props: {},
  emits: {},
  setup() {
    let num = ref(0);
    let data: DataInterface = reactive<DataInterface>({
      name: "",
    });
    return {
      data,
      num,
    };
  },
});
</script>

<style lang="less" scoped></style>