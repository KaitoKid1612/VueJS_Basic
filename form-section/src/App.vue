<template>
  <!-- Section: Design Block -->
  <div>
    <div class="background-radial-gradient overflow-hidden">
      <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div class="row gx-lg-5 align-items-center mb-5">
          <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">
            <h1 class="my-5 display-5 fw-bold ls-tight" style="color: hsl(218, 81%, 95%)">
              The best offer <br />
              <span style="color: hsl(218, 81%, 75%)">for your business</span>
            </h1>
            <p class="mb-4 opacity-70" style="color: hsl(218, 81%, 85%)">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus, expedita iusto veniam atque, magni tempora mollitia
              dolorum consequatur nulla, neque debitis eos reprehenderit quasi
              ab ipsum nisi dolorem modi. Quos?
            </p>
          </div>

          <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

            <div class="card bg-glass">
              <div class="card-body px-4 py-5 px-md-5">
                <form>
                  <!-- 2 column grid layout with text inputs for the first and last names -->
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input type="text" id="first-name" class="form-control" v-model="userData.firstName" />
                        <label class="form-label mt-1" for="first-name">First name</label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input type="text" id="last-name" class="form-control" v-model="userData.lastName" />
                        <label class="form-label mt-1" for="last-name">Last name</label>
                      </div>
                    </div>
                  </div>

                  <!-- Email input -->
                  <div class="form-outline mb-4">
                    <input type="email" id="email" class="form-control" :value="userData.email"
                      @input="userData.email = $event.target.value" />
                    <label class="form-label mt-1" for="email">Email address</label>
                  </div>

                  <!-- Password input -->
                  <div class="form-outline mb-4">
                    <input type="password" id="password" class="form-control" v-model="userData.password" />
                    <label class="form-label mt-1" for="password">Password</label>
                  </div>

                  <div class="form-outline mb-4">
                    <textarea name="message" id="" class="form-control" v-model="message"></textarea>
                    <label class="form-label mt-1" for="password">Message</label>
                  </div>

                  <!-- Checkbox -->
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" value="HTML" type="checkbox" v-model="chooseLanguage" id="html" />
                    <label class="form-check-label" for="html">HTML</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" value="PHP" type="checkbox" v-model="chooseLanguage" id="php" />
                    <label class="form-check-label" for="php">PHP</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" value="Java" type="checkbox" v-model="chooseLanguage" id="java" />
                    <label class="form-check-label" for="java">Java</label>
                  </div>

                  <div class="form-check mt-2">
                    <input class="form-check-input" type="radio" name="sex" value="male" v-model="gender">
                    <label class="form-check-label" for="male">
                      Male
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="sex" value="female" v-model="gender">
                    <label class="form-check-label" for="female">
                      Female
                    </label>
                  </div>

                  <select class="form-select mt-2" v-model="selectOptions.selected">
                    <option :selected="number" v-for="number in selectOptions.numbers" v-bind:value="number"
                      :key="number">{{ number }}</option>
                  </select>

                  <!-- Submit button -->
                  <div class="d-flex justify-content-center mb-2 mt-2">
                    <button type="submit" class="btn btn-primary btn-block mb-2 d-flex justify-content-center">
                      Sign up
                    </button>
                  </div>

                  <!-- Register buttons -->
                  <div class="text-center">
                    <p>or sign up with:</p>
                    <button type="button" class="btn btn-link btn-floating mx-1">
                      <i class="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" class="btn btn-link btn-floating mx-1">
                      <i class="fab fa-google"></i>
                    </button>

                    <button type="button" class="btn btn-link btn-floating mx-1">
                      <i class="fab fa-twitter"></i>
                    </button>

                    <button type="button" class="btn btn-link btn-floating mx-1">
                      <i class="fab fa-github"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-custom></app-custom>
    <div class="container">
      <div class="row">
        <h2>Your Data</h2>
      </div>
      <div class="row">
        <label for="">First name: {{ userData.firstName }}</label>
        <label for="">Last name: {{ userData.lastName }}</label>
        <label for="">Email address: {{ userData.email }}</label>
        <label for="">Password: {{ userData.password }}</label>
        <label style="white-space: pre" for="">Message: {{ message }}</label>
        <label for="">Choose Languages: </label>
        <ul>
          <li v-for="item in chooseLanguage" :key="item">{{ item }}</li>
        </ul>
        <label for="">Sex: {{ gender }}</label>
        <label for="">Number: {{ selectOptions.selected }}</label>
      </div>
    </div>

  </div>

  <!-- Section: Design Block -->
</template>

<script>
import Custom from './components/customControl.vue';

export default {
  data: function () {
    return {
      userData: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      },
      message: "",
      chooseLanguage: [],
      gender: '',
      selectOptions: {
        selected: '',
        numbers: [1, 2, 3, 4, 5, 6]
      },
    };
  },
  components: {
    appCustom: Custom
  }
};
</script>

<style>
.background-radial-gradient {
  background-color: hsl(218, 41%, 15%);
  background-image: radial-gradient(650px circle at 0% 0%,
      hsl(218, 41%, 35%) 15%,
      hsl(218, 41%, 30%) 35%,
      hsl(218, 41%, 20%) 75%,
      hsl(218, 41%, 19%) 80%,
      transparent 100%),
    radial-gradient(1250px circle at 100% 100%,
      hsl(218, 41%, 45%) 15%,
      hsl(218, 41%, 30%) 35%,
      hsl(218, 41%, 20%) 75%,
      hsl(218, 41%, 19%) 80%,
      transparent 100%);
}

#radius-shape-1 {
  height: 220px;
  width: 220px;
  top: -60px;
  left: -130px;
  background: radial-gradient(#44006b, #ad1fff);
  overflow: hidden;
}

#radius-shape-2 {
  border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
  bottom: -60px;
  right: -110px;
  width: 300px;
  height: 300px;
  background: radial-gradient(#44006b, #ad1fff);
  overflow: hidden;
}

.bg-glass {
  background-color: hsla(0, 0%, 100%, 0.9) !important;
  backdrop-filter: saturate(200%) blur(25px);
}
</style>
