<template>
    <div v-bind:class="{ 'post-meta': true, light: variant === 'light'}">
        Posted {{ post.date }}.
        <template v-if="post.timeToRead">
            <strong>{{ post.timeToRead }} min read.</strong>
        </template>
    </div>
</template>

<script>
  export default {
    props: ['post', 'variant']
  }
</script>

<style lang="scss">
    .post-meta {
        color: var(--body-color);
        font-size: .8em;
        opacity: .8;

        &.light {
            color: var(--bg-content-color);
        }
    }
</style>