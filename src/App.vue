<script setup lang="ts">
import data from "./assets/data";
import Course from "./components/SingleCourse.vue";

</script>

<template>
  <header>
    <h1>Saera <span>:: SJPI22 ::</span> Lernia</h1>
    <h2>Systemutvecklare i Java och JavaScript 2022 | <a href="https://www.lernia.se/">Lernia Yrkeshögskola</a></h2>
  </header>

  <main>
    <Course v-for="(course, index) in data" :course="course" :index="index"></Course>
  </main>

  <footer>
    Made with ❤️ by Sara!
  </footer>
</template>

<style scoped lang="scss">
header {
  text-align: center;
}

h2 {
  font-weight: 500;
  margin: 0rem 2rem 3rem;
  font-size: 1.4rem;


  & a {
    color: $fourth;
    text-transform: uppercase;
    font-size: 1.1rem;

    &:hover {
      color: $accent2;
    }
  }
}

h1 {
  text-transform: uppercase;
  font-size: 3rem;
  margin: 2rem 2rem 0.2rem;
  font-weight: 900;
  line-height: 140%;
  letter-spacing: 0.1em;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  text-shadow: 4px 4px $accent,
    12px 12px #000000;

  & span {
    text-shadow: 4px 4px $bg,
      12px 12px #000000;
  }
}

header,
main,
footer {
  width: 100%;
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}

main {
  border-top: 2px solid $accent2;
  max-width: 70vw;
}

footer {
  justify-content: flex-end;
}
</style>
