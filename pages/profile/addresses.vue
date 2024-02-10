<template>
    <ProfileAddressCreate :provinces="data.provinces" :cities="data.cities" />
    <hr/>
    <template v-for="address in data.addresses" :key="address.id">
        <ProfileAddressEdit :address="address" :provinces="data.provinces" :cities="data.cities"  />
    </template>
</template>

<script setup>

const { data , refresh } = await useFetch('/api/profile/addresses', {
    headers: useRequestHeaders(['cookie'])
})

provide('refreshGetAddress', refresh);

console.log(data.value);

</script>