<template>
  <aside class="fixed bottom-0 bg-white text-center rounded-t-lg">
    <div class="bg-primary-600 mx-auto my-8" style="height: 40px; width: 40px;"></div>
    <h3 class="text-black">Ge en gåva</h3>
    <form name="gava" method="POST" data-netlify="true" class="flex flex-wrap">
      <select placeholder="Välj matkasse eller julklapp">
        <option>Matkasse</option>
        <option>Julklapp</option>
      </select>
      <textarea placeholder="Skriv en hälsning till en familj... (valfritt)"></textarea>
      <input type="email" placeholder="email@gmail.com (valfritt)">
      <button type="submit">Ge gåva</button>
    </form>
  </aside>
</template>

<script>
export default {

}
</script>
