<template>

    <button @click="send">fason</button>
</template>
<script>

import httptool from '../http';
export default{
    name:"test",
    components:{

    },
    methods:{
        send(){
            httptool.get('Runoff_Visualization/reg/',{
                params:{},
                headers:{},
            }).then(response=>{
                console.log(response);
                console.log(response.data);
            }).catch(error=>{
                console.log(error);
            });
        }
    }
}
</script>