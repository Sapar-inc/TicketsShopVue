<template>
  <div class="slider-container">
    <div class="slider">
      <div class="slides" :style="slideStyles">
        <div class="slide" v-for="(slide, index) in slides" :key="index">
          <img :src="slide.image" :alt="slide.caption" />
          <div class="caption">{{ slide.caption }}</div>
        </div>
      </div>
      <button class="slider-button left" @click="previousSlide">&lt;</button>
      <button class="slider-button right" @click="nextSlide">&gt;</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderRock",
  data() {
    return {
      currentSlideIndex: 0,
      slides: [
        {
          image: require('@/assets/img/imgSliders/images1.jpg'),
        },
        {
          image: require('@/assets/img/imgSliders/images2.jpg'),
        },
        {
          image: require('@/assets/img/imgSliders/images3.jpg'),
        },
        {
          image: require('@/assets/img/imgSliders/images2.jpg'),
        },
      ],
      slideInterval: null,
    };
  },
  computed: {
    slideStyles() {
      return {
        transform: `translateX(-${this.currentSlideIndex * 100}%)`,
      };
    },
  },
  methods: {
    previousSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
      } else {
        this.currentSlideIndex = this.slides.length - 1;
      }
      this.resetSlideInterval();
    },
    nextSlide() {
      if (this.currentSlideIndex < this.slides.length - 1) {
        this.currentSlideIndex++;
      } else {
        this.currentSlideIndex = 0;
      }
      this.resetSlideInterval();
    },
    startSlideInterval() {
      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    },
    resetSlideInterval() {
      clearInterval(this.slideInterval);
      this.startSlideInterval();
    },
  },
  mounted() {
    this.startSlideInterval();
  },
};
</script>

<style scoped>
.slider-container {
  position: relative;
  display: flex;
  justify-content: center;
}

.slider {
  position: relative;
  width: 50%;
  height: 400px;
  overflow: hidden;
}

.slides {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
}

.slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.slide img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.caption {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  font-size: 20px;
}

.slider-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 24px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}

.slider-button.left {
  left: 10px;
}

.slider-button.right {
  right: 10px;
}

.slider-button:focus {
  outline: none;
}
@media (max-width: 768px) {
  .slider {
    width: 600px;
    height: 250px;
    max-height: 50vh;
  }

  .caption {
    font-size: 16px;
  }

  .slider-button {
    width: 30px;
    height: 30px;
    font-size: 20px;
  }
}
</style>
