<script lang="ts">
    import type { PageData } from './$types';
    import { createClient } from '@supabase/supabase-js'
    const supabaseUrl = 'https://gotbilveqwwsuztpmpio.supabase.co'
    import { PUBLIC_SUPABASE_KEY } from '$env/static/public';
    const supabase = createClient(supabaseUrl, PUBLIC_SUPABASE_KEY as string)
    let email = '';
    let password = '';
    
    async function signIn() {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })
        console.log(data);
        console.log(error);
        console.log(email);
        console.log(password);
    }

    // supabase.auth.getUser().then(user => {
    //     console.log(user);
    // }).catch(error => {
    //     console.log(error);
    // })
    
    // export let data: PageData;
</script>

<section class="h-screen min-w-full">
  <div class="hero text-gray-200 max-w-5xl mt-20 mx-auto">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img src="https://i.ibb.co/KbxYKW8/7100-9-07.png" alt="bee_image" class="max-w-sm" />
      <div>
        <h1 class="text-5xl font-bold">What's the BUZZ!</h1>
        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <button class="btn btn-primary rounded-3xl">Join the HiveMind</button>
      </div>
    </div>
  </div>
</section>

      