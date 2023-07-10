<template lang="">
  <div class="container">
    <div class="row">
      <div
        class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 text-left"
      >
        <h1 class="text-center">
          Vue Resource
        </h1>
        <div class="form-group mb-2">
          <input class="form-control" type="text" v-model="user.username" />
        </div>
        <div class="form-group mb-2">
          <input class="form-control" type="text" v-model="user.email" />
        </div>
        <button class="btn btn-success" @click.prevent="submit" type="submit">
          Submit
        </button>
        <hr />
        <input type="text" v-model="node" class="form-control" />
        <br />
        <button class="btn btn-block btn-warning" @click.prevent="getData">
          Get All Data
        </button>
        <br />
        <ul class="list-group">
          <li class="list-group-item" v-for="user in users">
            {{ user.username }} - {{ user.email }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: ""
      },
      users: [],
      resource: {},
      node: "user"
    };
  },
  methods: {
    submit() {
      // console.log(this.user.username);
      // this.$http.post("", this.user).then();
      this.resource.createItem(this.user);
    },
    getData() {
      this.resource
        .getNodeData({ node: this.node })
        .then(Response => {
          return Response.json();
        })
        .then(data => {
          const newArray = [];
          for (let key in data) {
            newArray.push(data[key]);
          }
          this.users = newArray;
        })
        .then(error => {
          console.log(error);
        });
    }
  },
  created() {
    const customActions = {
      createItem: {
        method: "POST",
        url: "user.json"
      },
      getNodeData: {
        method: "GET"
      }
    };
    this.resource = this.$resource("data.json", {}, customActions);
  }
};
</script>
<style lang=""></style>
