<template>
  <div class="contaner">
    <MyCard>
      <template #content>
        <div id="card-1" class="content">
          <div class="desc">
            <h1>{{ resume.title }}</h1>
            <article>{{ resume.article }}</article>
          </div>
        </div>
      </template>
    </MyCard>
    <MyCard>
      <template #content>
        <div id="card-2" class="content">
          <div class="desc">
            <div v-for="item in aboutMe.items" :key="item.label" class="row">
              <span>{{ item.label }}</span>
              <span>{{ item.content }}</span>
            </div>
            <button>DOWNLOAD RESUME →</button>
          </div>
          <div class="short-history">
            <div class="banner">short story</div>
            <span class="hello">HELLO</span>
            <h3>{{ aboutMe.shortHistory.title }}</h3>
            <article>{{ aboutMe.shortHistory.article }}</article>
          </div>
        </div>
      </template>
    </MyCard>
    <MyCard>
      <template #content>
        <div id="card-3" class="content">
          <div class="desc">
            <h2>{{ skills.title }}</h2>
            <div>{{ skills.subtitle }}</div>
            <article>{{ skills.article }}</article>
          </div>
          <img alt="Picture" />
        </div>
      </template>
    </MyCard>
    <h1 class="comments-title">Comments</h1>
    <div class="comments">
      <div v-for="comment in comments" :key="comment.id">
        <MyCard>
          <template #content>
            <span>
              {{ comment.name }} email
              <b>{{ comment.email }}</b>
            </span>
            <p>{{ comment.body }}</p>
          </template>
        </MyCard>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import MyCard from "../components/MyCard.vue";

export default {
  name: "AboutUs",
  components: {
    MyCard,
  },
  data: function () {
    return {
      aboutMe: {
        items: [
          { label: "Name:", content: "AntonyChanin" },
          { label: "Email:", content: "antonyChe@gmail.com" },
          { label: "Phone:", content: "(8)-800-5335" },
          { label: "Fax:", content: "(8)-800-5335" },
          { label: "Date of birth:", content: "23 May 1995" },
          { label: "Country", content: "Russian Federation" },
        ],
        shortHistory: {
          title: `I'm a UI/UX Designer & Frontend Developer from Moskow RF,
          I hold a master degree of Web Design from the World University`,
          article: `Worked with project to create user-friendly and appealing application
          interfaces and websites for users. Met with project.`,
        },
      },
      resume: {
        title: `Hello! My Name is Antony Chanin`,
        article: `I design thoughtful digital experiences & beautiful brand aesthetics.
        I provide high quality web development services`,
      },
      skills: {
        title: `Good Design Keeps the User Happy, the Manufacturer in the Black
              and the Aesthete Unoffended.`,
        subtitle: `We're creative minds`,
        article: `branding standards. Delined and documented website design
              standards when needed. Designed adaptive layouts to maintain a
              consistent user experience across the product. Created clickable
              prototype when needed.`,
      },
    };
  },
  computed: {
    ...mapState("comments", ["comments"]),
  },
  methods: {
    ...mapActions("comments", ["featchComments"]),
  },

  async mounted() {
    await this.featchComments();
  },
};
</script>

<style scoped>
#card-2 {
  display: flex;
  width: 100%;
}

#card-2 .desc {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

#card-2 .desc button {
  background-color: deeppink;
  color: #fff;
  border: 0;
  max-width: 200px;
  height: 30px;
  margin: 8px;
}

#card-2 .desc button:active {
  margin: 0;
  height: 46px;
  border: 8px #ff96ce solid;
}

.contaner :first-child[class^="card"] {
  background-color: rgba(0, 247, 255, 0.5);
}

.contaner {
  min-width: 280px;
  max-width: 820px;
  margin: 0 auto;
}
.content {
  height: 412px;
  display: flex;
}

.content img {
  width: 50%;
  background-color: rgba(95, 158, 160, 0.5);
}
.comments {
  padding: 10px;
  margin: 10px;
  box-shadow: 0px 0px 4px 0px rgba(34, 60, 80, 0.2);
}
.comments-title {
  margin-left: 10px;
}

.desc {
  width: 45%;
  margin: 0 5%;
}

article {
  color: rgba(0, 0, 0, 0.5);
  font-size: 15px;
}
.desc .row {
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
}

.short-history {
  width: 50%;
  margin: 0 0 0 10px;
}

.short-history h3 {
  margin: 12px 0;
}

.banner {
  background-color: gold;
  color: #fff;
  font-size: x-large;
  font-weight: bold;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.hello {
  background-color: #000;
  color: #fff;
  width: 100px;
  height: 20px;
  display: flex;
  justify-content: center;
  margin: 30px 0 0 0;
  font-size: 10px;
  align-items: center;
}

@media screen and (max-width: 550px) {
  .content {
    flex-direction: column;
    height: 540px;
  }
  .desc,
  .short-history {
    width: 95%;
  }
  .short-history,
  .content img {
    margin: 15px auto 0 auto;
  }
  .content img {
    width: 85%;
    height: 100%;
  }
}
@media screen and (max-width: 376px) {
  .content {
    height: 600px;
  }
}
</style>