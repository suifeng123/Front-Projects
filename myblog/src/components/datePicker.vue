<!-- 进行书写一个 时间组件 datepicker -->
<div class="date-picker">
   <input class="input" v-model="dateValue" @click="openPanel" />
   <transition name="fadeDownBig">
       <div class="date-panel" v-show="panelState">
       	  <span @click="leftBig">&lt;&lt;</span>
       	  <span @click="left">&lt;</span>
       	  <span class="year" @click="panelType = 'year'">{{tmpYear}}</span>
       	  <span class="month" @click="panelType = 'month'">{{changeTmpMonth}}</span>
       	  <span @click="right">&gt;</span>
       	  <span @click="rightBig">&gt;&gt;</span>
       </div>
       <!-- 年面板 -->
       <div class="type-year" v-show="panelType === 'year'">
           <div class="year-list">
             <ul class="year-list">
               <li v-for="(item,index) in yearList"
                   :key="index"
                   @click="selectYear(item)">
                   <span :class="{selected: item === tmpYear}"></span>
                </li>
             </ul>
           </div>
        <!-- 月面板 -->
        <div class="type-year" v-show="panelType === 'month'">
             <ul class="year-list">
               <li v-for="(item,index) in monthList"
                   :key="index" @click="selectMonth(item)">
                   <span :class="{selected: item.value === tmpMonth}" >{{item.label}}</span>
               </li>
             </ul>
        </div>
        <!-- 日期面板 -->
        <div class="date-group" v-show="panelType === 'date'">
          <span v-for="{item,index} in weekList" :key="index"
             class="weekday">{{item.label}}</span>
             <ul class="date-list">
            <li v-for="(item, index) in dateList"
                v-text="item.value"
                :class="{preMonth: item.previousMonth, nextMonth: item.nextMonth,
                selected: date === item.value && month === tmpMonth && item.currentMonth, invalid: validateDate(item)}"
                :key="index" 
                @click="selectDate(item)">
            </li>
          </ul>
        </div>
       </div>
   </transition>
</div>
<!-- 以上为时间组件的整体框架 -->
<script>
	export default{
		data(){
			return {
				dateValue:'', //输入框显示 
				date: new Date().getDate(),//获取当前日期
				panelState: false,//初始值，默认panel为关闭
				month: new Date().getMonth(), //
				tmpMonth: new Date().getMonth().
				tmpYear: new Date().getFullYear(),
				weekList: [
                  { label: "Sun", value: 0 },
                  { label: "Mon", value: 1 },
                  { label: "Tue", value: 2 },
                  { label: "Wed", value: 3 },
                  { label: "Thu", value: 4 },
                  { label: "Fri", value: 5 },
                  { label: "Sat", value: 6 }
                ], // 周
                monthList: [
                 { label: "Jan", value: 0 },
                 { label: "Feb", value: 1 },
                 { label: "Mar", value: 2 },
                 { label: "Apr", value: 3 },
                 { label: "May", value: 4 },
                 { label: "Jun", value: 5 },
                 { label: "Jul", value: 6 },
                 { label: "Aug", value: 7 },
                 { label: "Sept", value: 8 },
                 { label: "Oct", value: 9 },
                 { label: "Nov", value: 10 },
                 { label: "Dec", value: 11 }
                ], // 月
                nowValue: 0, //当前选中日期
                panelType:'date' //面板状态
			};
		},
		props:{
			value: {
				type:[Date,String],
				default:""
			}
		}
	}
</script>