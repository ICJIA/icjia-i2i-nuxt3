<template>
  <div>
    <v-card
      elevation="0"
      class="toc px-5 py-5 markdown-body"
      style="border-left: 0px solid #eee; background: #fafafa"
    >
      <div
        id="navigation"
        ref="navigation"
        class="hover pb-4 navigation-anchor"
        style="border: 0px; font-size: 20px; font-weight: bold"
        @click="scrollToTop"
      >
        {{ props.title }}
      </div>
      <div v-for="(item, index) in props.data.links" :key="index" class="pl-3">
        <div
          :id="`toc-${item.id}`"
          class="mb-4 hover tocItem"
          @click="scrollTo(item.id)"
        >
          {{ item.text }}
        </div>
      </div>
      <br /><br />
      <!-- Debug:<br />
      {{ props.data }} -->
    </v-card>
  </div>
</template>

<script setup>
const navigation = ref(null);
const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
  title: {
    type: String,
    default: "Navigation",
  },
});

const scrollTo = (id) => {
  // console.log("scrolling to", id);
  const el = document.querySelector(`#${id}`);
  // console.log("el: ", el);
  window.scrollTo({
    behavior: "smooth",
    top:
      el.getBoundingClientRect().top -
      document.body.getBoundingClientRect().top -
      80,
  });
};

const scrollToTop = () => {
  window.scrollTo({
    behavior: "smooth",
    top: 0,
  });
};

onMounted(() => {
  const scrollOffset = 100;
  const toc = [];
  console.log("mounted toc");
  const sections = Array.from(document.querySelectorAll("h2"));
  sections.forEach((section) => {
    const obj = {};
    obj.text = section.innerText;
    obj.id = section.id;
    toc.push(obj);
  });

  window.onscroll = () => {
    let scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    scrollPosition = scrollPosition + scrollOffset + 35;
    const tocItems = document.querySelectorAll(".tocItem");

    if (scrollPosition < 150) {
      tocItems.forEach((toc) => {
        toc.classList.remove("visible");
      });
      navigation.value.classList.add("visible-anchor");
    } else {
      navigation.value.classList.remove("visible-anchor");
    }

    sections.forEach((section) => {
      if (section.offsetTop <= scrollPosition) {
        if (tocItems) {
          tocItems.forEach((toc) => {
            toc.classList.remove("visible");
          });
        }
        const sectionItem = document.getElementById(`toc-${section.id}`);
        sectionItem.classList.add("visible");
      }
    });
  };
});

// const observerOptions = {
//   rootMargin: "10px",
//   threshold: 1.0,
// };

// const observer = new IntersectionObserver(observerCallback, observerOptions);

// function observerCallback(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       console.log("entry: ", entry.target, entry.isIntersecting);
//     }
//   });
// }
// const target = "H2";
// document.querySelectorAll(target).forEach((i) => {
//   if (i) {
//     observer.observe(i);
//   }
// });

onUnmounted(() => {
  window.onscroll = null;
});
</script>

<style>
/* TOC Styles */

.divider {
  border-left: 1px solid #ccc;
}

.visible {
  color: rgb(34, 18, 104);
  font-weight: 900;
  margin-left: 2px;
  border-left: 5px solid #aaa;
  padding-left: 10px;
  transition: visibility 0s, opacity 0.5s linear;
}

.anchor {
  padding: 2px 5px 2px 5px;
}

.visible-anchor {
  color: rgb(34, 18, 104);
  font-weight: 900;
}

.navigation-anchor:hover {
  text-decoration: underline;
}

.anchor:hover {
  color: #0d4474;
  background: #eee;
}

.shaded {
  background: #eee;
  padding: 15px;
  margin-bottom: 25px;
}

.toc {
  position: -webkit-sticky !important;
  position: sticky !important;
  top: 115px !important;
  font-size: 14px !important;
}

.tocItem {
  margin-bottom: 3px;
  font-size: 14px;
}

.tocItem:hover {
  text-decoration: underline;
}

/* ul.toc-list {
  list-style-type: none;
}

ul.toc-list li {
  color: #333;
  padding: 2px 5px 2px 5px;
  cursor: pointer;
  margin-bottom: 3px;
  font-size: 14px;
}

ul.toc-list li:hover {
  color: #aaa;
  background: #eee;
}

.tocListItem {
  margin-left: -20px !important;
} */

/* .tocItem {
} */
</style>
