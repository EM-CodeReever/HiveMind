<script lang="ts">
    import type { LayoutData } from './$types';
    import Navbar from '../Components/Navbar.svelte';
    import '../app.css';
    
</script>

<section class="min-h-screen min-w-max bg-gray-900">
    <Navbar />
        <slot />
    </section>


      
      