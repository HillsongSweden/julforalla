<template>
  <aside class="fixed bottom-0 bg-white text-center rounded-t-lg">
    <div class="bg-primary-600 mx-auto my-8" style="height: 40px; width: 40px;"></div>
    <h3 class="text-black">Ge en gåva</h3>
    <form name="gava" method="POST" data-netlify="true" @submit="showAlert" class="flex flex-wrap">
      <FormulateInput
        type="select"
        :options="{matkasse: 'Matkasse', julklapp: 'Julklapp'}"
        name="category"
        placeholder="Välj matkasse eller julklapp"
        validation="in:matkasse,julklapp"
        class="flex-auto w-full"
      />
      <FormulateInput type="textarea" name="message" placeholder="Skriv en hälsning till en familj... (valfritt)" class="flex-auto w-full"/>
      <FormulateInput type="email"  name="email" placeholder="Email (valfritt)" label="Om du vill ha återkoppling när vi gett gåvorna så får du gärna fylla i din email" validation="email" class="flex-auto w-full"/>
      <FormulateInput
        type="submit"
        name="Swisha gåva"
        class="flex-auto w-full"
      />
    </form>
  </aside>
</template>

<script>
export default {
  methods: {
    showAlert(evt) {
      window.alert(evt);
    },
  },
}
</script>
