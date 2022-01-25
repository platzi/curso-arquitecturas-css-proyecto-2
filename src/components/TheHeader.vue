<template>
  <header class="header">
    <nav class="header--container">
      <ul>
        <li v-for="(item, index) in menu" :key="index">
          <router-link :to="item.link">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>


<script>
export default {
  setup() {
    const menu = [
      { name: '.is', link: '#' },
      { name: '.Portfolio', link: '#' },
      { name: '.abooutMe', link: '#' },
      { name: '.contact', link: '#' },
    ]

    return {
      menu
    }
  }
}
</script>
