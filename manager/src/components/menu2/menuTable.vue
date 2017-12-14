<template>
    <div class="table-content">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: 'menu-table',
        data() {
            return {
                tableData: [{
                    date: '2017-05-02',
                    name: '王小二',
                    address: '广州市白云区鹅掌坦'
                }, {
                    date: '2017-05-04',
                    name: '王小二',
                    address: '广州市白云区鹅掌坦'
                }, {
                    date: '2017-05-01',
                    name: '王小二',
                    address: '广州市白云区鹅掌坦'
                }, {
                    date: '2017-05-03',
                    name: '王小二',
                    address: '广州市白云区鹅掌坦'
                }]
            }
        }
    }
</script>

<style lang="css">
</style>