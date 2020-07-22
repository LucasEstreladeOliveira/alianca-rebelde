<template>
  <sui-modal v-model="open" size="mini" :closable="false">
    <!-- Titulo do Gif selecionado -->
    <div class="modal-login">
      <sui-modal-header class="modal-header">
        <h2 style="text-align:center">Login</h2>
      </sui-modal-header>
      <!-- Gif selecionado -->
      <sui-form
        style="text-align: center; margin:10px; margin-top:20px; margin-bottom:20px"
      >
        <sui-form-field>
          <h4>ID</h4>
          <input placeholder="ID" v-model="id" />
        </sui-form-field>
        <sui-form-field>
          <h4>Password</h4>
          <input placeholder="Password" v-model="password" />
        </sui-form-field>
      </sui-form>
      <!-- Botao que fecha o modal -->
      <sui-button
        attached="bottom"
        fluid
        positive
        @click="toggle()"
        class="buttom-modal"
      >
        <sui-icon name="check" /> OK
      </sui-button>
    </div>
  </sui-modal>
</template>

<script>
export default {
  data() {
    return {
      open: true,
      id: "",
      password: ""
    };
  },
  methods: {
    toggle() {
      let login = {
        id: this.id,
        password: this.password
      };
      this.$store.commit("setLogin", login);
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.modal-login {
  background: #132b41 !important;
}

.modal-header {
  background-color: #132b41 !important;
  color: white !important;
  padding-top: 20px;
}

h4 {
  color: white !important;
}

.buttom-modal {
  background-color: #fbbd06 !important;
  color: #132b41 !important;
}
</style>
