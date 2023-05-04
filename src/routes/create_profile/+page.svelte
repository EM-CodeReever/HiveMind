<script lang="ts">
    import type { PageData } from './$types';
    import TextInput from '../../Components/TextInput.svelte';
    import type { RegisterError } from '../../lib/types';
    
    export let data: PageData;
</script>

<section class="h-fit w-full flex pt-24 justify-center">
    <div class="bg-accent grid grid-cols-4 grid-flow-row p-4 max-w-5xl w-full gap-5">
        <div class="col-span-4 flex justify-center">
        <svg class="w-40 h-40" id="ez4vmdBWQKZ1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 235 170" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><polygon points="0,-67.875169 58.78162,-33.937584 58.78162,33.937584 0,67.875168 -58.78162,33.937584 -58.78162,-33.937584 0,-67.875169" transform="matrix(1 0.000184-.000184 1 117.553435 82.114037)" fill="#e0a82e" stroke="#000" stroke-width="8" stroke-linejoin="bevel"/><path d="M149.975069,169.317348q0-67.896758,93.918061-82.803353" transform="matrix(-1 0 0 1 262.434099-48.746025)" fill="none" stroke="#01040b" stroke-width="8" stroke-linecap="round"/><path d="M149.975069,169.317348q0-67.896758,93.918061-82.803353" transform="translate(-28.434099-48.746025)" fill="none" stroke="#01040b" stroke-width="8" stroke-linecap="round"/><path d="M150.000001,159.780091q58.756689,0,58.756687-58.868407" transform="translate(-33.434099-48.746025)" fill="none" stroke="#01040b" stroke-width="8" stroke-linecap="round"/><path d="M150.000001,159.780091q58.756689,0,58.756687-58.868407" transform="matrix(-1 0 0 1 268.322589-48.746025)" fill="none" stroke="#01040b" stroke-width="8" stroke-linecap="round"/><ellipse rx="10.827525" ry="10.827525" transform="matrix(.636141 0 0 0.636141 216.459031 37.76797)" fill="#ecbe07" stroke="#000" stroke-width="8"/><ellipse rx="10.827525" ry="10.827525" transform="matrix(.636141 0 0 0.636141 18.540969 37.76797)" fill="#ecbe07" stroke="#000" stroke-width="8"/><path d="M130.310734,191.519439v-27.739347" transform="translate(-32.4341-52.746025)" fill="none" stroke="#01040b" stroke-width="8"/><path d="M130.310734,191.519439v-27.739347" transform="translate(5.5659-52.746025)" fill="none" stroke="#000002" stroke-width="8"/></svg>
        </div>
        <div class="col-span-4">
            <TextInput label="Username" />
        </div>
        <div class="col-span-4">
            <TextInput label="Email" />
        </div>
        <div class="col-span-2">
            <TextInput label="First Name" />
        </div>
        <div class="col-span-2">
            <TextInput label="Last Name" /> 
        </div>
        <div class="col-span-3">
            <div class="relative mb-6">
                <input
                  type="date"
                  class="w-full rounded border-0 bg-opacity-10 bg-white outline-none px-3 py-[0.32rem] leading-[2.15] dark:text-neutral-200 dark:placeholder:text-neutral-200"
                  id="txtDateOfBirth"
                  />
                <label
                  for="txtDateOfBirth"
                  class="absolute -top-3 left-3  badge badge-accent text-primary"
                  >Date of Birth
                </label>
              </div>
            </div>
            <div class="relative col-span-1">
                <select id="SelectGender" class="select bg-opacity-10 w-full bg-white dark:text-neutral-400 dark:placeholder:text-neutral-200">
                    <option selected disabled></option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Rather not say</option>
                </select>
                <label
                      for="SelectGender"
                      class="absolute -top-3 left-3  badge badge-accent text-primary"
                      >Gender
                    </label>
            </div>

            <button class="btn btn-primary mx-auto col-span-full">Finish Profile</button>
            
    </div>
</section>
