<template>
<div id="daiban">
    <div class="box-title">
        <span>{{title}}</span>
        <div class="title-line"></div>
    </div>
    <div class="data">
        <!-- <dl>
            <dt>{{left1}}</dt>
            <dd>{{left2}}</dd>
        </dl>
        <div class="line"></div>
        <dl>
            <dt>{{right1}}</dt>
            <dd>{{right2}}</dd>
        </dl> -->
        <v-mess
            :left1='left1'
            :left2='left2'
            :right1='right1'
            :right2='right2'
        ></v-mess>
    </div>
</div>
</template>
<script>
export default{
    name:"daiban",
    components:{
        'v-mess':()=>import("@/components/home/mess.vue")
    },
    props:{
        title:String,
        left1:Number,       
        left2:String,
        right1:Number,
        right2:String,
    }
}
</script>
<style scoped lang='less'>
#daiban{
    color: #fff;
    .box-title{
        line-height: 40px;
        span{
            font-size: 12px;
            padding-left: 14px;
            box-sizing: border-box;
        }
        .title-line{
            width: 100%;
            height: 1px;
            background-color: #fff;
            opacity: .2;
        }
    }    
}
</style>