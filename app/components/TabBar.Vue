<template>
  <div class="tw-h-12 tw-bg-blue-light tw-text-white tw-flex">
    <nuxt-link to="/transaction" class="tw-w-10 tw-h-full tw-flex tw-justify-center tw-items-center tw-flex-1 tw-flex-col">
      <span class="tw-text-white">
        <i class="exchange icon"></i>
      </span>
      <span class="tw-text-white">Giao dich</span>
    </nuxt-link>
    <nuxt-link to="/history" class="tw-w-10 tw-h-full tw-flex tw-justify-center tw-items-center tw-flex-1 tw-flex-col">
      <span class="tw-text-white">
        <i class="file alternate outline icon"></i>
      </span>
      <span class="tw-text-white">Lich su</span>
    </nuxt-link>
    <nuxt-link to="/account" class="tw-w-10 tw-h-full tw-flex tw-justify-center tw-items-center tw-flex-1 tw-flex-col">
      <span class="tw-text-white">
        <i class="user outline icon"></i>
      </span>
      <span class="tw-text-white">Tai khoan</span>
    </nuxt-link>
  </div>
</template>