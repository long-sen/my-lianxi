<template>
  <div>
   <ul>
       <button @click=""></button>
       <li v-for="p,index in persons"  :key="index">
         {{p.id}}
         <input type="text" name="" id="">
       </li>
   </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      persons: [
        { id: "1", name: "张三", age: 18 },
        { id: "2", name: "李四", age: 19 },
        { id: "3", name: "王五", age: 120 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>