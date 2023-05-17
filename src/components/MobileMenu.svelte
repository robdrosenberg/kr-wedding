<script>
  import { fade } from "svelte/transition";
  export let openMenu;
  export let toggle;
</script>

{#if openMenu}
  <div
    class="flex flex-col fixed top-0 z-40 h-screen w-screen bg-green p-5"
    transition:fade
  >
    <ul
      class="mt-32 font-mack text-4xl h-[40vh] flex flex-col justify-between mb-10"
    >
      <li>
        <a href="#home" on:click={toggle} class="h1-desk text-4xl">
          DATE/TIME</a
        >
      </li>
      <li>
        <a href="#details" on:click={toggle} class="h1-desk text-4xl">DETAILS</a
        >
      </li>
      <li>
        <a href="#travel" on:click={toggle} class="h1-desk text-4xl"> TRAVEL</a>
      </li>
      <li>
        <a href="#register" on:click={toggle} class="h1-desk text-4xl">
          REGISTRY/RVSP</a
        >
      </li>
    </ul>

    <div class="flex flex-col gap-4">
      <p class="text-sm">LANGUAGE</p>
      <div class="flex gap-8">
        <button class="  font-mack text-2xl">EN</button>
        <button class=" font-mack text-2xl">SK</button>
      </div>
    </div>
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <div class="absolute bottom-0 right-5 z-50 object-cover p-1 pb-8 bg-white">
      <img
        src="/images/mobile-menu-polaroid.jpg"
        alt="Kristina and Rob holding hands and looking at eachother."
      />
    </div>

    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img
      class="absolute bottom-0 left-0 w-full object-cover"
      src="/images/mobile-menu-bottom.jpg"
      alt="Neighbourhood picture"
    />
  </div>
{/if}
