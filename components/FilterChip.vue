<template>
  <v-chip v-if="isVisible" class="filter-chip">
    {{ label }}
    <i class="fal fa-times-circle ml-2" @click="isVisible = false"></i>
  </v-chip>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isVisible: true
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-chip {
  ::v-deep .v-chip__content {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif !important;
    //TODO: To pull font-size from global styles
    font-size: 16px;
    color: blue !important;
    & i {
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
  }
}
</style>
