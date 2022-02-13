<template> 
  <hr/>
  <div class="text-center"><small class="text-muted">&copy; {{copyright}} Adib Hasan</small></div>
</template>

<script>
export default {
  name: "FooterMenu",
  props: {
    copyright: Number
  }
};
</script>
