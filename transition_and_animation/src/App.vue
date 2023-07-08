<template lang="">
  <div class="container">
    <div class="row">
      <div
        class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 text-center"
      >
        <h1>Animations</h1>
        <hr />
        <select name="" v-model="typeAnimation" class="form-control mb-md-3">
          <option value="fade">Fade</option>
          <option value="sliide">Slide</option>
        </select>
        <button class="btn btn-block btn-success" @click.prevent="show = !show">
          Show notifications
        </button>
        <br />
        <br />
        <transition :name="typeAnimation">
          <div class="alert alert-success" v-if="show">
            This is Something about notifications
          </div>
        </transition>
        <transition name="slide">
          <div class="alert alert-warning" v-if="show">
            This is Something about notifications
          </div>
        </transition>
        <transition
          appear
          enter-class=""
          enter-active-class="animate__animated animate__bounce"
          leave-class=""
          leave-active-class="animate__animated animate__tada"
        >
          <div class="alert alert-danger" v-if="show">
            This is Something about notifications
          </div>
        </transition>
        <transition :name="typeAnimation" mode="out-in">
          <div class="alert alert-success" v-if="show" key="success">
            This is Something about notifications Success
          </div>
          <div class="alert alert-danger" v-else key="danger">
            This is Something about notifications Danger
          </div>
        </transition>
        <hr />
        <button class="btn btn-success" @click="status = !status">
          Add or remove
        </button>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
        >
          <div
            class="mt-3"
            v-model="status"
            style="width: 200px; height: 200px; background-color: purple;"
            v-if="status"
          ></div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      typeAnimation: "fade",
      status: false
    };
  },
  methods: {
    beforeEnter(el) {
      console.log(el);
    },
    enter(el, done) {
      console.log("enter");
      done();
    },
    afterEnter(el) {
      console.log("afterenter");
    },
    enterCancelled(el) {
      console.log("enterCancelled");
    },
    beforeLeave(el) {
      console.log(el);
    },
    leave(el, done) {
      console.log("leave");
      done();
    },
    afterLeave(el) {
      console.log("afterleave");
    },
    leaveCancelled(el) {
      console.log("leaveCancelled");
    }
  }
};
</script>
<style lang="">
/* enter */
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

/* leave */
.fade-leave {
  /* opacity: 1; */
}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

/* Slide transition effect */
/* enter */
.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  transition: opacity 1s;
  animation: slide-in 1s ease-in-out forwards;
}

/* leave */
.slide-leave {
}

.slide-leave-active {
  transition: opacity 1s;
  animation: slide-out 1s ease-in-out forwards;
}

/* key frames */

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
