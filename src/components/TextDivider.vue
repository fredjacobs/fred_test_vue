<template>
  <div>
    <div class="text-divider py-6" >{{ text }}</div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {};
  },
  props: ["text"],
};
</script>

<style scoped>
:root {
  --text-divider-gap: 50px;
}

.text-divider {
  display: flex;
  align-items: center;
}
.text-divider::before,
.text-divider::after {
  content: "";
  height: 1px;
  background-color: silver;
  flex-grow: 1;
}

.text-divider::before {
  margin-right: 20px;
}

.text-divider::after {
  margin-left: 20px;
}
</style>
