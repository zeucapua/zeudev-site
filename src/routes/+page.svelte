<script lang="ts">
    import Icon from '@iconify/svelte';
</script>


<div class="flex flex-col w-full min-w-screen h-full min-h-screen text-white p-16">
    <div class="flex flex-row mx-auto gap-8">
        <div class="w-16 h-16 rounded-full bg-[#e779c1]" />
        <div class="w-16 h-16 rounded-full bg-[#58c7f3]" />
        <div class="w-16 h-16 rounded-full bg-[#f3cc30]" />
    </div>
    

    <p class="font-['GeneralSans'] text-7xl font-bold text-center mt-16">
        Hello, I'm Zeu!
    </p>
    <p class="font-['GeneralSans'] text-7xl font-bold text-center">
        A Front-end Developer, Designer, and Educator
    </p>
    <p class="text-3xl text-center font-['Quicksand'] my-16">
        Keeping the user experience in mind will always result in beautiful designs and amazing solutions under the hood. That's what I aim to do.
    </p>

    <div class="flex flex-row mx-auto gap-8 text-6xl">
        <a href="https://github.com/zeucapua">
            <Icon icon="bi:github" class="text-white hover:text-[#e779c1]" />
        </a>
        <a href="https://linkedin.com/in/zeucapua">
            <Icon icon="bi:linkedin" class="text-white hover:text-[#58c7f3]" />
        </a>
        <a href="https://twitter.com/zeu_dev">
            <Icon icon="bi:twitter" class="text-white hover:text-[#f3cc30]" />
        </a>
    </div>
</div>
