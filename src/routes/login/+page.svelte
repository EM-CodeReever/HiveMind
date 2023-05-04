<script lang="ts">
    import type { PageData } from './$types';
    import { slide } from 'svelte/transition';
	  import { quintOut } from 'svelte/easing';
    import TextInput from '../../Components/TextInput.svelte';
    let LoginRequest = {
      email: '',
      password: ''
    }
        // export const data: PageData;
</script>

<section class="min-h-screen w-full bg-gray-900 flex justify-start">
    
    <section class="w-full flex flex-col justify-center items-center">
        <svg class="w-40 h-40" id="ez4vmdBWQKZ1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 235 170" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><polygon points="0,-67.875169 58.78162,-33.937584 58.78162,33.937584 0,67.875168 -58.78162,33.937584 -58.78162,-33.937584 0,-67.875169" transform="matrix(1 0.000184-.000184 1 117.553435 82.114037)" fill="#e0a82e" stroke="#000" stroke-width="8" stroke-linejoin="bevel"/><path d="M149.975069,169.317348q0-67.896758,93.918061-82.803353" transform="matrix(-1 0 0 1 262.434099-48.746025)" fill="none" stroke="#01040b" stroke-width="8" stroke-linecap="round"/><path d="M149.975069,169.317348q0-67.896758,93.918061-82.803353" transform="translate(-28.434099-48.746025)" fill="none" stroke="#01040b" stroke-width="8" stroke-linecap="round"/><path d="M150.000001,159.780091q58.756689,0,58.756687-58.868407" transform="translate(-33.434099-48.746025)" fill="none" stroke="#01040b" stroke-width="8" stroke-linecap="round"/><path d="M150.000001,159.780091q58.756689,0,58.756687-58.868407" transform="matrix(-1 0 0 1 268.322589-48.746025)" fill="none" stroke="#01040b" stroke-width="8" stroke-linecap="round"/><ellipse rx="10.827525" ry="10.827525" transform="matrix(.636141 0 0 0.636141 216.459031 37.76797)" fill="#ecbe07" stroke="#000" stroke-width="8"/><ellipse rx="10.827525" ry="10.827525" transform="matrix(.636141 0 0 0.636141 18.540969 37.76797)" fill="#ecbe07" stroke="#000" stroke-width="8"/><path d="M130.310734,191.519439v-27.739347" transform="translate(-32.4341-52.746025)" fill="none" stroke="#01040b" stroke-width="8"/><path d="M130.310734,191.519439v-27.739347" transform="translate(5.5659-52.746025)" fill="none" stroke="#000002" stroke-width="8"/></svg>
        <h1 class="text-6xl text-primary font-bold mb-8">HiveMind</h1>
        <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form>
              <!-- Email input -->
              <TextInput label="Email" type="email" value={LoginRequest.email}/>
              <!-- Password input -->
              <TextInput label="Password" type="password" value={LoginRequest.password}/>
    
              <div class="mb-6 flex items-center justify-between"> 
                <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    value=""
                    id="exampleCheck2" />
                  <label
                    class="inline-block pl-[0.15rem] hover:cursor-pointer text-white"
                    for="exampleCheck2">
                    Remember me
                  </label>
                </div> 
    
               <a href="#!" class="text-gray-400 hover:text-primary">Forgot password?</a>
              </div>
    
              <!-- Login button -->
              <div class="text-center lg:text-left">
                <button
                  class="btn btn-primary w-full">
                    Enter Hive
                </button>
    
                <!-- Register link -->
                <p class="mb-0 mt-2 text-center pt-1 text-sm text-gray-400 font-semibold">
                  Don't have an account?
                  <a
                    href="#!"
                    class="text-danger hover:text-primary transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                    >Register</a
                  >
                </p>
              </div>
            </form>
          </div>
    </section>
</section>