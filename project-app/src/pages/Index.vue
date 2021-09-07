<template>
<p>
{{this.user.Name}}
</p>
</template>

<script>
import { defineComponent } from 'vue';
import { database } from '../boot/firebase';

export default defineComponent({
  name: 'PageIndex',
  data() {
    return {
      user: null
    }
  },
  async created() { 
    await this.readUser();
    this.user = database.user;
    console.log(this.user.Name);
  },
  methods: {
    readUser() {
      database.getUser();
    }
  }
})
</script>
