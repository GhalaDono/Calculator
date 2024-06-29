<script lang="ts">
    import Addition from "$lib/icons/Addition.svelte";
    import Divide from "$lib/icons/Divide.svelte";
    import Equals from "$lib/icons/Equals.svelte";
    import Minus from "$lib/icons/Minus.svelte";
    import Multiply from "$lib/icons/Multiply.svelte";
    import Backsp from "$lib/icons/Backsp.svelte";
    import { onMount } from "svelte";

    let equation: string = "";

    function addToEquation(value: string) {
        equation += value;
    }

    function BackSpace() {
        switch (equation.substring(equation.length - 3, equation.length)) {
            case " * ":
            case " + ":
            case " - ":
            case " / ":
                equation = equation.substring(0, equation.length - 3);
                break;

            default:
                equation = equation.substring(0, equation.length - 1);
        }
    }

    function clear() {
        equation = "";
    }


    function solve() {
        try {
          let answer= eval(equation);
          if(typeof answer === 'undefined') throw SyntaxError;
          equation=answer;
        } catch (error) {
            let output = document.getElementById("output");
            output?.classList.add("bg-red-500");
            setTimeout(() => {
                output?.classList.remove("bg-red-500");
            }, 500);
        }
    }

    function onKeyDown(e : KeyboardEvent){
      
      let button= document.getElementById(e.key);
      button?.click();
      button?.focus();
      setTimeout(() => {
        //@ts-ignore
                document.activeElement?.blur();
            }, 100);

    }

    onMount(()=>{ let allButtons =document.getElementsByTagName('button');
    console.log(allButtons);
    for(let i=0; i<allButtons.length;i++){
        allButtons[i].addEventListener('click',()=>{

            new Audio('/click1.wav').play();
        });
    }
   }
    );
</script>

<svelte:head>
    <title>Calculator</title>
</svelte:head>

<svelte:window on:keydown|preventDefault={onKeyDown} />

<div
    class="bg-[#fdfefe] rounded-3xl max-w-[16rem]
     grid grid-cols-4 gap-2 p-6 font-extrabold shadow-xl"
>
    <div
    id="output"
        class="bg-[#2386fe] rounded-xl col-span-4 min-h-11
     flex items-center px-2 mb-2 text-white justify-end text-right break-all transition-all"
    >
        {equation}
    </div>

    <button id="Delete" on:click={clear} class="bg-[#f3f6fd]">AC</button>

    <button id="B2=3=ackspace" on:click={BackSpace} class="bg-[#f3f6fd]">
        <Backsp />
    </button>

    <button id="%" on:click={() => addToEquation(" / 100")} class="bg-[#f3f6fd]"
        >%</button
    >

    <button id="+"
        on:click={() => addToEquation(" + ")}
        class="bg-[#5de16f] text-white shadow-[0_1px_6px_0_#b4fbbe]"
    >
        <Addition />
    </button>

    <button id="7" on:click={() => addToEquation("7")}>7</button>
    <button id="8" on:click={() => addToEquation("8")}>8</button>
    <button id="9" on:click={() => addToEquation("9")}>9</button>
    <button id="-"
        on:click={() => addToEquation(" - ")}
        class="bg-[#fb4557] text-white shadow-[0px_01px_6px_0px_#f97d8a]"
    >
        <Minus />
    </button>

    <button id="4" on:click={() => addToEquation("4")}>4</button>
    <button id="5" on:click={() => addToEquation("5")}>5</button>
    <button id="6" on:click={() => addToEquation("6")}>6</button>
    <button id="/"
        on:click={() => addToEquation(" / ")}
        class="bg-[#2386fe] text-white shadow-[0_1px_6px_0_#a5cbf9]"
    >
        <Divide />
    </button>

    <button id="1" on:click={() => addToEquation("1")}>1</button>
    <button id="2" on:click={() => addToEquation("2")}>2</button>
    <button id="3" on:click={() => addToEquation("3")}>3</button>
    <button id="*"
        on:click={() => addToEquation(" * ")}
        class="bg-[#fac901] text-white shadow-[0_2px_6px_0px_#f6df85]"
    >
        <Multiply />
    </button>

    <button id="0" on:click={() => addToEquation("0")}>0</button>
    <button id="." on:click={() => addToEquation(".")}>.</button>
    <button id="=" on:click={() => solve()} class="bg-[#f3f6fd] col-span-2">
        <Equals />
    </button>
</div>
 