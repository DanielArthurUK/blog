<template>
    <div class="author">

        <g-image alt="Author image" class="author__image" src="~/assets/images/author.jpg" width="200" height="200"
                 blur="5"/>

        <h1 v-if="showTitle" class="author__site-title">
            <MainLogo/>
        </h1>

        <p class="author__intro">I am a Full-Stack Software Engineer working in the finance industry in London, UK.</p>

        <p class="author__links">
            <a target="_blank" href="https://www.linkedin.com/in/danielarthuruk"><i class="fab fa-linkedin"></i></a>
            <a target="_blank" href="https://github.com/DanielArthurUK"><i class="fab fa-github"></i></a>
            <a target="_blank" href="https://stackoverflow.com/users/4934818/daniel-arthur"><i class="fab fa-stack-overflow"></i></a>
        </p>

    </div>
</template>

<script>
  import MainLogo from './MainLogo.vue'

  export default {
    components: {MainLogo},
    props: ['showTitle']
  }
</script>

<style lang="scss">
    .author {
        margin: 0 auto;
        max-width: 500px;
        text-align: center;
        padding: calc(var(--space) / 2) 0;

        &__image {
            border-radius: 100%;
            width: 150px;
            height: 150px;
            margin-bottom: 1em;
        }

        &__intro {
            color: var(--bg-content-color);
            opacity: .8;
        }

        &__site-title {
            font-size: 1.5em;
        }

        &__links {
            margin-top: -.5em;
            font-size: 1.5em;

            a {
                margin: 0 .5em;
            }
        }
    }
</style>
