<template>
<div id="mess">
    <dl>
        <dt>{{left1}}</dt>
        <dd>{{left2}}</dd>
    </dl>

    <div class="line"></div>

    <dl>
        <dt>{{right1}}</dt>
        <dd>{{right2}}</dd>
    </dl>
</div>
</template>
<script>
export default{
    name:"mess",
    /* props:{
        left1:Number,       
        left2:String,
        right1:Number,
        right2:String,
    }, */
    props:['left1','left2','right1','right2']
}
</script>
<style scoped lang='less'>
    #mess{
        display: flex;
        align-items: center;
        color: #fff;
        border-radius: 8px;
        .line{
            margin: 0 28px;
            width: 2px;
            height: 58px;
            background: #fff;
            opacity: .39;
            border-radius: 50%;
        }
        dl{
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 16px 0;
            line-height: 1.15;
            dt{
                font-size: 28px;
            }
            dd{
                margin: 0!important;
                font-size: 14px;
                text-align: center;
                white-space: nowrap;
            }
        }
    }
</style>