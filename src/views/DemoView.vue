<script setup lang="ts" name="demoVue">
import { ref } from 'vue'

const formLabelAlign = ref<Record<string, any>>({
  name: '上海正也医药有限公司',
  agreement_state: 0,
  purchasing_targets_type: 0,
  purchasing_targets: '',
  time: 0,
  channel_type: 0,
  time2: 0,
  subjects: '单选项1',
})

const agreement_options = ref([
  {id: 1, label: '正常', value: 0},
  {id: 2, label: '失效', value: 1}
])

const tableData = ref([
  {no: 'BJ000090', name: '宁波渠道名称', province: '浙江省'},
  {no: 'BJ000192', name: '国药控股精华有限公司', province: '浙江省'},
  {no: 'BJ000283', name: '老百姓药业有限公司', province: '浙江省'},
])
const tableData1 = ref([
  {id: 0, price1: 0,price2: 0,price3: 0,price4: 0,price5: 0,price6: 0,price7: 0},
])
const tableData2 = ref([
  {id: 0, price1: 0,price2: 0,price3: 0,price4: 0,price5: 0,price6: 0,price7: 0,price8: 0},
])
const activeName = ref('first')
</script>
<template>
  <div class="box">
    <el-form label-position="right" label-width="100px" :model="formLabelAlign">
      <div class="step-box">
        <div class="step-title">
          <div class="no-box">1</div>
          协议主体
        </div>
      </div>
      <div class="form-box">
        <el-row>
          <el-col :span="12">
            <el-form-item label="协议客户：">
              <el-button>选择客户</el-button>
              <div class="client-name">{{formLabelAlign.name}}</div>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="协议状态：">
              <el-select
                v-model="formLabelAlign.agreement_state"
                class="m-2"
                placeholder="Select"
              >
                <el-option
                  v-for="item in agreement_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="购进指标：">
              <el-row :gutter="10">
                <el-col :span="8">
                  <el-select
                    v-model="formLabelAlign.purchasing_targets_type"
                    class="m-2"
                    placeholder="Select"
                  >
                    <el-option label="金额" :value="0" />
                    <el-option label="数量" :value="1" />
                  </el-select>
                </el-col>
                <el-col :span="12">
                  <el-input
                    :disabled="true"
                    placeholder="输入金额/数量"
                    v-model="formLabelAlign.purchasing_targets"
                  />
                </el-col>
              </el-row>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="纯销指标：">
              <el-row :gutter="10">
                <el-col :span="8">
                  <el-select
                    v-model="formLabelAlign.purchasing_targets_type"
                    class="m-2"
                    placeholder="Select"
                  >
                    <el-option label="金额" :value="0" />
                    <el-option label="数量" :value="1" />
                  </el-select>
                </el-col>
                <el-col :span="12">
                  <el-input
                    :disabled="true"
                    placeholder="输入金额/数量"
                    v-model="formLabelAlign.purchasing_targets"
                  />
                </el-col>
              </el-row>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="销售区域：">
              <el-button>选择区域</el-button>
              <div class="tag-list">
                <el-tag closable> 全国 </el-tag>
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="签订时间：">
              <el-date-picker v-model="formLabelAlign.time" type="datetime" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="购进渠道：">
              <el-select v-model="formLabelAlign.channel_type">
                <el-option label="指定渠道" :value="0" />
                <el-option label="所有渠道" :value="1" />
              </el-select>
              <el-button class="ml-10">请选择渠道</el-button>

              <el-table :data="tableData" class="mt-20" style="width: 100%">
                <el-table-column prop="no" label="指定渠道编码" />
                <el-table-column prop="name" label="制定渠道名称" />
                <el-table-column prop="province" label="所在省" />
              </el-table>
            </el-form-item>
          </el-col>
        </el-row>
      </div>

      <div class="step-box pt-20">
        <div class="step-title">
          <div class="no-box">2</div>
          产品政策
        </div>
      </div>

      <div class="panel">
        <el-button type="primary" size="larg">添加产品</el-button>
        <span class="text">
          <span>购进总指标（万元）：</span>
          <span class="bold">¥152.65</span>
        </span>
        <span class="text">
          <span>指标按季度分解（万元）：</span>
          <span class="bold">
            【Q1】¥12.5，【Q2】12.5，【Q3】12.5，【Q4】12.5
          </span>
        </span>
        <span class="text">
          <span>纯销总指标（万元）：</span>
          <span class="bold"> ¥152.65 </span>
        </span>
      </div>
      <div class="form-box">
        <el-row :gutter="20" class="border">
          <el-col span="8">
            <el-form-item label="产品：">
              <el-button>选择产品</el-button>
              <div class="ml-10 goods-name">美复胶丸 24粒/盒</div>
            </el-form-item>
          </el-col>

          <el-col span="8">
            <el-form-item label="协议效期：">
              <el-date-picker v-model="formLabelAlign.time2" type="daterange" />
            </el-form-item>
          </el-col>
          <el-button class="delete" type="danger">删除</el-button>
        </el-row>
        <div class="table">
          <el-table :data="tableData1" header-row-class-name="table-header">
            <el-table-column prop="price1" label="协议价(元)">
              <el-input disabled placeholder="请输入" />
            </el-table-column>
            <el-table-column prop="price2" label="票折(元)">
              <el-input disabled placeholder="请输入" />
            </el-table-column>

            <el-table-column prop="price3" label="购进指标量(大单位)">
              <el-input disabled placeholder="请输入" />
            </el-table-column>

            <el-table-column prop="price4" label="购进指标量(小单位)">
              <el-input disabled placeholder="请输入" />
            </el-table-column>

            <el-table-column prop="price5" label="购进金额(元)">
              <el-input disabled placeholder="请输入" />
            </el-table-column>

            <el-table-column prop="price6" label="纯销指标量(小单位)">
              <el-input disabled placeholder="请输入" />
            </el-table-column>

            <el-table-column prop="price7" label="纯销指标金额(元)">
              <el-input disabled placeholder="请输入" />
            </el-table-column>
          </el-table>
        </div>
        <div class="table">
          <el-table :data="tableData2" header-row-class-name="table-header">
            <el-table-column prop="price1" label="分销奖励">
              <el-input disabled placeholder="请输入" />
            </el-table-column>
            <el-table-column prop="price2" label="费用科目">
              <el-select
                v-model="formLabelAlign.subjects"
                class="m-2"
                placeholder="Select"
                size="large"
              >
                <el-option label="单选项1" value="单选项1" />
                <el-option label="单选项2" value="单选项2" />
              </el-select>
            </el-table-column>

            <el-table-column prop="price3" label="零售配送">
              <el-input disabled placeholder="请输入" />
            </el-table-column>

            <el-table-column prop="price2" label="费用科目">
              <el-select
                v-model="formLabelAlign.subjects"
                class="m-2"
                placeholder="Select"
                size="large"
              >
                <el-option label="单选项1" value="单选项1" />
                <el-option label="单选项2" value="单选项2" />
              </el-select>
            </el-table-column>

            <el-table-column prop="price5" label="医疗配送商">
              <el-input disabled placeholder="请输入" />
            </el-table-column>

            <el-table-column prop="price2" label="费用科目">
              <el-select
                v-model="formLabelAlign.subjects"
                class="m-2"
                placeholder="Select"
                size="large"
              >
                <el-option label="单选项1" value="单选项1" />
                <el-option label="单选项2" value="单选项2" />
              </el-select>
            </el-table-column>

            <el-table-column prop="price7" label="自定义7">
              <el-date-picker type="date" style="width:unset" />
            </el-table-column>

            <el-table-column prop="price7" label="自定义8">
              <el-date-picker type="date" style="width:unset" />
            </el-table-column>
          </el-table>
        </div>
      </div>

      <!-- 3. 补充协议 -->
      <div class="step-box pt-20">
        <div class="step-title">
          <div class="no-box">3</div>
          补充协议
        </div>
      </div>
      <div class="tabs-box">
        <el-tabs v-model="activeName" type="card" class="demo-tabs">
          <el-tab-pane class="pane" label="补充协议1" name="first">
            <div class="title-box">
              <span class="title">协议内容：</span>
              <el-button type="danger">删除</el-button>
            </div>
            <div class="content">
              <el-input :rows="2" type="textarea" placeholder="请输入" />
            </div>
          </el-tab-pane>
          <el-tab-pane class="pane" label="补充协议2" name="second"
            >Config</el-tab-pane
          >
          <el-tab-pane class="pane" label="补充协议3" name="third"
            >Role</el-tab-pane
          >
        </el-tabs>
        <el-button class="add" type="primary">新增</el-button>
      </div>
    </el-form>
  </div>
</template>
<style lang="scss" scoped>
.box {

  .step-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 20px;

    &.pt-20 {
      padding-top: 20px;
    }

    &::before,
    &::after {
      margin: 0 30px;
      flex: 1;
      height: 1px;
      border-bottom: 1px dashed #a2a2a2;
      content: "";
    }

    .step-title {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      font-weight: bold;

      .no-box {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        width: 1.5em;
        height: 1.5em;
        color: white;
        font-weight: normal;
        background-color: #4e8bfe;
        border-radius: 50%;
      }
    }
  }

  .form-box {
    padding: 10px;
    background-color: white;
    border-radius: 5px;

    .client-name {
      margin-left: 10px;
    }

    .tag-list {
      margin-left: 10px;
    }
    .ml-10 {
      margin-left: 10px;
    }
    .mt-20 {
      margin-top: 20px;
    }

    .goods-name {
      color: var(--el-color-primary);
    }
    .border {
      border-bottom: 1px solid #ddd;
    }

    .table {
      margin: 20px 10px;
      border: 1px solid #ddd;
      overflow: hidden;
      border-radius: 5px;

      .table-header {
        --el-table-header-bg-color: #f8f8f8;
      }
    }

    .delete {
      position: absolute;
      top: 0;
      right: 10px;
    }

  }

  .panel {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    color: #666;
    font-size: 12px;

    .bold {
      font-weight: bold;
    }
  }

  .tabs-box {
    position: relative;

    :deep(.el-tabs__nav) {
      background-color: white;
    }

    :deep(.el-tabs__header) {
      margin: 0;
    }

    .add {
      position: absolute;
      top: 0px;
      right: 10px;
    }
    .pane {
      width: 100%;
      font-size: 14px;
      background-color: white;
      box-sizing: border-box;

      .title-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
      }

      .content {
        padding: 0 10px 20px;
      }
    }
  }
}
</style>
