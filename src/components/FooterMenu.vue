<template> 
  <div class="text-center pt-3"><small class="text-muted">&copy; {{copyright}} Adib Hasan</small></div>
</template>

<script>
export default {
  name: "FooterMenu",
  props: {
    copyright: Number
  }
};
</script>
