<script lang="ts">

    export let data;

    $:console.log('DATA', data);


</script>


<div class="wrapper">
    {#each data?.user as user}
        <div>
            {user?.name}
            {user?.email}
        </div>

    {/each}

</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
</style>