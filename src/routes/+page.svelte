<script>
    import S from "$lib/icons/S.svelte";
    import A from "$lib/icons/A.svelte";
    import D from "$lib/icons/A.svelte";
    import E from "$lib/icons/A.svelte";
    import M from "$lib/icons/A.svelte";
    import Mult from "$lib/icons/A.svelte";
    

</script>

<svelte:head>
   <title>Calculator</title> 
</svelte:head> 

    <div class="bg-[#fdfefe] rounded-3xl 
    grid grid-cols-4 gap-1 p-5 font-extrabold shadow-xl">

    <div class="bg-[#2386fe] rounded-full col-span-4 h-11
     flex items-center px-2 mb-2 text-white justify-end text-right ">
12345
    </div>

        <button class="bg-[#f3f6fd] ">%</button>
        <button class="bg-[#f3f6fd] text-xl">
        <S/>
                    </button> 
        <button class="bg-[#f3f6fd]  ">CE</button>
        <button class="bg-[#1f2b55] text-white">C</button>
        <button >7</button>
        <button >8</button>
        <button >9</button>
        <button class="bg-[#fb4557] text-white shadow-[0_35px_60px_-15px_#fb4557]"> 
            <M/>
            
        </button>
        <button >4</button>
        <button >5</button>
        <button >6</button>
        <button class="bg-[#2386fe] text-white shadow-[#2386fe]">
            <D/>
                    </button>
        <button >1</button>
        <button >2</button>
        <button >3</button>
        <button class="bg-[#fac901]  text-white shadow-[#fac901]">
            <Mult/>
            
        </button>
        <button >.</button>
        <button >0</button>
        <button class="bg-[#f3f6fd]">
            <E/>
            
        </button>
        <button class="bg-[#5de16f] text-white shadow-[#5de16f]">
        <A/>
            
        </button>
       
    </div>

