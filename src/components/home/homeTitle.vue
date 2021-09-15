<template>
<div id="homeTitle">
    <i :class="icon"></i>
    {{title}}
</div>
</template>
<script>
export default{
    name:"homeTitle",
    props:{
        title:String,
        icon:String,
    }
}
</script>
<style scoped lang='less'>
#homeTitle{
    display: flex;
    box-sizing: border-box;
    align-items: center;
    font-size: 12px;
    margin-bottom: 18px;
    i{
        font-size: 16px;
        color:rgb(120, 149, 247);
        margin-right: 4px;
    }
}
</style>