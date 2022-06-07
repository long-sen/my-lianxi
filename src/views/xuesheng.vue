<template>
  <div>
    <div>
      <div>
        <label for="">姓名:</label>
        <input type="text" placeholder="请输入姓名" v-model.trim="user.name" />
      </div>
      <div>
        <label for="">年龄:</label>
        <input type="number" placeholder="请输入年龄" v-model.number="user.age"/>
      </div>
      <div>
        <label for="">性别:</label>
        <select v-model="user.sex">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
      <div>
        <button @click="addOrEditFn()">添加/修改</button>
      </div>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item,index) in arr" :key="index">
          <td>{{ index + 1}}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.sex }}</td>
          <td>
            <button>删除</button>
            <button @click="editFn(item,index)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        age: "",
        sex: "男",
      },
        editIndex:-1,//表示正在编辑的索引，默认打开网页是没有的
      arr: [
        {
          name: "陈大雷",
          age: 35,
          sex: "男",
        },
        {
          name: "葛二蛋",
          age: 29,
          sex: "男",
        },
      ],
    };
  },
  methods:{
      addOrEditFn(){//添加修改事件
          if(this.editIndex === -1){
              this.arr.push({...this.user});
          }else{
              this.$set(this.arr,this.editIndex,{...this.user})
          }
          
      },
      editFn(item,index){//编辑事件
          this.user = {...item};//回显
          this.editIndex = index;//正在编辑的索引
      }
  }
};
</script>

<style lang="scss" scoped>
</style>