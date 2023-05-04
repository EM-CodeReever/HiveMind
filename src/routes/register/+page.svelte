<script lang="ts">
    import type { PageData } from './$types';
    import TextInput from '../../Components/TextInput.svelte';
    import type { RegisterError, RegisterForm } from '../../lib/types'
    import { gender } from '@prisma/client';
    let emailError: string = '';
    let error: RegisterError = { state: false, message: '' };
    let form: RegisterForm = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      dateOfBirth : '',
      gender: gender.RNS
    };
    let loading = false;
    // export let data: PageData;

    async function submitRegisterForm(){
      
      let res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
      emailError = (await res.json()).message;
      loading = false;
    }
</script>

<section class="min-h-screen h-full bg-gray-900">
    <section class="h-screen max-w-5xl mx-auto">
        <div class="h-full">
          <!-- Left column container with bee background-->
          <div
            class="g-6 flex h-full lg:flex-row flex-col items-center justify-center">
            <div
              class="mb-12 grow-0 bee-bounce lg:w-fit w-48 aspect-auto duration-1000">
              <img src="https://i.ibb.co/KbxYKW8/7100-9-07.png" class="aspect-square w-96" alt="Sample" />
            </div>
      
            <!-- Right column container -->
            <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
              <form>
                <!--Register section-->
                <div
                  class="flex flex-row items-center justify-between">
                  <p class="mb-0 mr-4 text-lg text-white">Sign Up with</p>
                  <div>
                    <button class="btn btn-square btn-outline btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                      <button class="btn btn-square btn-outline btn-error">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                      <button class="btn btn-square btn-outline btn-success">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                  </div>
                  
                </div>
      
                <!-- Separator between social media sign in and email/password sign in -->
                <div class="divider text-primary before:bg-primary after:bg-primary">OR</div>
      
                <!-- Email input -->
                <TextInput label="Email" type="text" bind:value={form.email} error={error}/>
                <TextInput label="First Name" type="text" bind:value={form.firstName} error={error} />
                <TextInput label="Last Name" type="text" bind:value={form.lastName} error={error} /> 
                <div class="grid grid-cols-2 gap-x-3">
                  <TextInput label="Date of Birth" type="date" bind:value={form.dateOfBirth} error={error} />
                  <div class="relative">
                    <select bind:value={form.gender} id="SelectGender" class="select bg-opacity-10 w-full bg-white dark:text-neutral-400 dark:placeholder:text-neutral-200">
                        <option value={gender.MALE}>Male</option>
                        <option value={gender.FEMALE}>Female</option>
                        <option value={gender.RNS}>Rather not say</option>
                        
                    </select>
                    <label
                          for="SelectGender"
                          class="absolute -top-3 left-3  badge badge-accent text-primary"
                          >Gender
                        </label>
                  </div>
                </div>
                <p class="text-center mb-6 text-sm text-gray-400 font-semibold">Choose a Password</p>
                <!-- Password input -->
                <TextInput label="Password" type="password" bind:value={form.password} error={error} /> 
      
                <!-- Register button -->
                <div class="text-center lg:text-left">
                  <button
                    on:click={() => {loading = true; submitRegisterForm();}}
                    class={`btn btn-primary w-full ${loading ? 'loading' : ''}`}>
                    Register
                  </button>
                  <p class="text-error mt-2 text-center">{emailError}</p>
                  <!-- Login link -->
                  <p class="mb-0 mt-2 text-center pt-1 text-sm text-gray-400 font-semibold">
                    Already have an account?
                    <a
                      href="#!"
                      class="transition duration-150 ease-in-out hover:text-primary"
                      >Login</a
                    >
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
</section>

<style>
    @keyframes bounce {
    0% {
        transform: translateY(10%);
        /* animation-timing-function: cubic-bezier(0.8,0,1,1); */
    }
    50% {
        transform: none;
        /* animation-timing-function: cubic-bezier(0,0,0.2,1); */
    }
    100% {
        transform: translateY(10%);
        /* animation-timing-function: cubic-bezier(0.8,0,1,1); */
    }
}
.bee-bounce {
    animation: bounce 3s infinite;
}
</style>