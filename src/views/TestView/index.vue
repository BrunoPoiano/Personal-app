<template>
  <h1>Pure HTML CSS Form</h1>
  <button v-on:click="injectValue">Inject value</button>

  <form v-on:submit.prevent="sendForm" id="testForm">
    <fieldset>
      <legend>form</legend>
      <div>
        <label>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          value="teste"
        />
      </div>
      <div>
        <label for="">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="email"
          tooltip="teste"
        />
      </div>
      <div>
        <label for="">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          required
          placeholder="minimo 6 char"
          :minlength="6"
        />
      </div>

      <div>
        <label for="select">select</label>
        <select id="select" name="select" required placeholder="teste">
          <option value="" selected>Please choose</option>

          <option value="Mr">Mr</option>
          <option value="Miss">Miss</option>
          <option value="Mrs">Mrs</option>
          <option value="Ms">Ms</option>

          <option value="Dr">Dr</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label for="range">Input range</label>
        <input
          type="range"
          id="range"
          name="range"
          min="0"
          max="100"
          value="50"
          v-bind:on-change="updateValue()"
        />
        <p>Current Volume: <span id="rangeValue">50</span></p>
      </div>

      <div>
        <label for="textarea">select</label>
        <textarea
          name="textarea"
          id="textarea"
          placeholder="textarea"
          rows="10"
          cols="30"
          required
        >
        The cat was playing in the garden.
    </textarea
        >
      </div>

      <button type="submit">Enviar</button>
    </fieldset>
  </form>
</template>

<script>
export default {
  methods: {
    sendForm(e) {
      e.preventDefault();
      console.log("aqui e", e.target);

      const formData = new FormData(e.target);
      console.log("aqui formData", formData);

      const formObject = Object.fromEntries(formData);
      console.log("aqui formObject", formObject);
    },

    updateValue(value) {
      console.log("aqui value", value);
      const form = document.getElementById("testForm");
      // const inputElement = form.querySelector(`[name="rangeValue"]`);
      // if (inputElement) {
      //   inputElement.value = value;
      // }
    },

    injectValue() {
      const formData = {
        name: "JohnDoe",
        email: "john@example.com",
        password: "123",
        select: "Dr",
        textarea: "banana",
        range: 74,
      };

      const form = document.getElementById("testForm");

      for (const [key, value] of Object.entries(formData)) {
        const inputElement = form.querySelector(`[name="${key}"]`);
        if (inputElement) {
          inputElement.value = value;
        }
      }
    },
  },
};
</script>

<style scoped>
form {
  fieldset {
    display: grid;
    gap: 10px;
    div {
      display: grid;
    }
  }

  input,
  select,
  textarea {
    outline: 2px solid;
    border-radius: 5px;
    padding: 5px 10px;
    outline-color: grey;
  }
  input:not(:placeholder-shown):valid,
  textarea:not(:placeholder-shown):valid,
  select:not(:placeholder-shown):valid {
    outline-color: green;
  }
  input:not(:placeholder-shown):invalid,
  textarea:not(:placeholder-shown):invalid,
  select:not(:placeholder-shown):invalid {
    outline-color: red;
  }

  input:focus:invalid,
  textarea:focus:invalid,
  select:focus:invalid {
    outline-color: grey;
  }
}
</style>
