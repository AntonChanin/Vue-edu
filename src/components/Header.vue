<template>
  <div class="header">
    <h1>Vue education</h1>
    <div class="navigation-wrapper">
      <nav>
        <ul>
          <li>
            <a href="/#">Главная</a>
          </li>
          <li>
            <a href="/gallery">Галлерея</a>
          </li>
          <li>
            <a href="/aboutUs">О нас</a>
          </li>
        </ul>
      </nav>
    </div>
    <button class="navigation-icon"></button>
    <div class="contact">
      <span>+7 916 800-60-23</span>
      <span>AVH</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background: #000;
  color: #fff;
  min-height: 100px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
}

.header nav {
  display: flex;
  margin: 18px 0;
}

.header h1 {
  display: flex;
  align-items: flex-end;
}

.header ul {
  display: flex;
  justify-content: space-around;
  width: 400px;
  margin-left: 0;
  /* Отступ слева в браузере IE и Opera */
  padding-left: 0;
  /* Отступ слева в браузере Firefox, Safari, Chrome */
}

.header li {
  list-style-type: none;
}

.header a {
  color: #fff;
  font-size: 24px;
  text-decoration: auto;
}

.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.navigation-icon {
  display: none;
}

@media screen and (max-width: 992px) {
  .header h1 {
    font-size: 28px;
    align-items: center;
  }
  .header ul {
    width: 300px;
  }
}

@media screen and (max-width: 672px) {
  .header ul {
    flex-direction: column;
  }
  .navigation-wrapper {
    width: 110px;
  }
  .contact {
    display: none;
  }
  .header h1 {
    align-items: center;
  }
  .navigation-wrapper {
    display: none;
  }
  .navigation-icon {
    display: block;
    width: 50px;
    height: 50px;
    background-color: #fff;
    border: 0;
    margin: auto 0;
  }
}
@media screen and (max-width: 376px) {
  .header h1 {
    font-size: 24px;
  }
}
</style>
