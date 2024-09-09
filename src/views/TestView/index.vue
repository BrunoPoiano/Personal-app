<template>
  <h1>Pure HTML CSS Form</h1>
  <button v-on:click="injectValue">Inject value</button>

  <form v-on:submit.prevent="sendForm" id="testForm">
    <fieldset>
      <!-- <legend>form</legend> -->
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
          minlength="6"
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
        />
      </div>

      <div>
        <label for="">checkbox</label>
        <input
          type="checkbox"
          id="checkbox"
          name="checkbox"
          value="true"
          required
        />
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
        ></textarea>
      </div>

      <button type="submit">Enviar</button>
      <button type="reset">Resetar</button>
    </fieldset>
  </form>
</template>

<script>
export default {
  methods: {
    sendForm(e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      const formObject = Object.fromEntries(formData);
      console.log("aqui formObject", formObject);
    },

    updateValue(value) {
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
  width: 100%;
  max-width: 50ch;
  fieldset {
    display: grid;
    gap: 10px;
    border: none;
    div {
      display: grid;
      gap: 3px;
    }
  }

  input,
  select,
  textarea {
    outline: 2px solid var(--neutral-color-80);
    border-radius: 5px;
    padding: 5px 10px;
    border: none;
    background: #fff;
  }
  input:not(:placeholder-shown):valid,
  textarea:not(:placeholder-shown):valid,
  select:not(:placeholder-shown):valid {
    outline-color: var(--accent-color-60);
  }
  input:not(:placeholder-shown):invalid,
  textarea:not(:placeholder-shown):invalid,
  select:not(:placeholder-shown):invalid {
    outline-color: var(--attention-color-60);
  }

  input:focus:invalid,
  textarea:focus:invalid,
  select:focus:invalid {
    outline-color: var(--accent-color-70);
  }

  input[type="range"],
  input[type="checkbox"] {
    outline: none;
  }
}
</style>
