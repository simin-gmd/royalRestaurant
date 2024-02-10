<template>
  <div @click="deleteAddress" class="btn btn-dark">
    حذف
    <div v-if="loading" class="spinner-border spinner-border-sm ms-2"></div>
  </div>
</template>
<script setup>
import { useToast } from "vue-toastification";

const props = defineProps(["addressId"]);
const loading = ref(false);
const toast = useToast();
const refreshGetAddress = inject('refreshGetAddress');
async function deleteAddress() {
  try {
    loading.value = true;
    await $fetch("/api/profile/addresses/delete", {
      method: "POST",
      body: { address_id: props.addressId },
    });
    refreshGetAddress();
    toast.warning("حذف با موفقیت انجام شد..");
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}
</script>
