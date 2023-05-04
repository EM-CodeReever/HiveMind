<script lang="ts">
    import type { RegisterError, OWASP } from '../lib/types'
    export let label: string, value:string, type: string, error: RegisterError = { state: false, message: '' };
    import owasp from 'owasp-password-strength-test'
    let passwordTestResult: OWASP = { strong: false, errors: [''], optionalTestErrors: [], requiredTestErrors: [],failedTests: [], passedTests:[], isPassphrase: false, optionalTestsPassed: 0 }
    
    function typeAction(node: HTMLInputElement) {
      node.type = type;
    }
  
    owasp.config({
      allowPassphrases       : true,
      maxLength              : 128,
      minLength              : 10,
      minPhraseLength        : 20,
      minOptionalTestsToPass : 4,
    });   

    $:passwordTestResult = owasp.test(value) as OWASP;    
    $:console.log(value);
    
    
</script>

    <div class="relative mb-6">
        <input
        name={label}
          use:typeAction
          bind:value={value}
          class={`w-full rounded border-0 bg-opacity-10 ${error.state ? 'bg-error':'bg-white'} outline-none px-3 py-[0.32rem] leading-[2.15] dark:text-neutral-200 dark:placeholder:text-neutral-200`}
          id={'txt'+label}
        />
        <label
          for={'txt'+label}
          class="absolute -top-3 left-3 badge badge-accent text-primary"
          >
          {label}
      </label>
 
      {#if type === 'password' && value.length > 0 && !passwordTestResult.strong}
      <p class="text-error">{passwordTestResult.errors[0]}</p>
      {/if}

      {#if error.state}
      <p class="text-error">{error.message}</p>
      {/if}
      
    </div>
