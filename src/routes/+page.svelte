<script lang="ts">
    import Addition from "$lib/icons/Addition.svelte";
    import Divide from "$lib/icons/Divide.svelte";
    import Equals from "$lib/icons/Equals.svelte";
    import Minus from "$lib/icons/Minus.svelte";
    import Multiply from "$lib/icons/Multiply.svelte";
    import Backsp from "$lib/icons/Backsp.svelte"

    let equation:string="";

    function addToEquation(value:string){
        equation+=value;
    }

    function BackSpace(){
        equation=equation.substring(0,equation.length-1)
    }

    function clear(){
        equation="";
    }

    function solve() {
        equation = eval(equation);
    }

</script>

 <svelte:head>
   <title>Calculator</title> 

 </svelte:head> 

    <div class="bg-[#fdfefe] rounded-3xl 
     grid grid-cols-4 gap-1 p-5 font-extrabold shadow-xl">

    <div class="bg-[#2386fe] rounded-full col-span-4 h-11
     flex items-center px-2 mb-2 text-white justify-end text-right ">
      {equation}

    </div>

        <button on:click={clear} class="bg-[#f3f6fd]  ">AC</button>

        <button on:click={BackSpace} class="bg-[#f3f6fd]">
            <Backsp/>
        </button>

        <button on:click={()=>addToEquation(' / 100')} class="bg-[#f3f6fd] ">%</button>

        <button on:click={()=>addToEquation(' + ')} class="bg-[#5de16f] text-white shadow-[0_1px_6px_0_#b4fbbe] ">
            <Addition/>

        </button>
        
        <button on:click={()=>addToEquation('7')}>7</button>
        <button on:click={()=>addToEquation('8')}>8</button>
        <button on:click={()=>addToEquation('9')}>9</button>
        <button on:click={()=>addToEquation(' - ')} class="bg-[#fb4557] text-white shadow-[0px_01px_6px_0px_#f97d8a]"> 
            <Minus/>
            
        </button>
       
        <button on:click={()=>addToEquation('4')}>4</button>
        <button on:click={()=>addToEquation('5')}>5</button>
        <button on:click={()=>addToEquation('6')}>6</button>
        <button on:click={()=>addToEquation(' / ')} class="bg-[#2386fe] text-white shadow-[0_1px_6px_0_#a5cbf9]">
            <Divide/>

        </button>
       
       
        <button on:click={()=>addToEquation('1')}>1</button>
        <button on:click={()=>addToEquation('2')}>2</button>
        <button on:click={()=>addToEquation('3')}>3</button>
        <button on:click={()=>addToEquation(' * ')} class="bg-[#fac901]  text-white shadow-[0_2px_6px_0px_#f6df85]">
            <Multiply/>
            
        </button>
       
        <button on:click={()=>addToEquation('0')}>0</button>
        <button on:click={()=>addToEquation('.')}>.</button>
        <button on:click={()=>solve()} class="bg-[#f3f6fd] col-span-2">
            <Equals/>

        </button>

    </div>

