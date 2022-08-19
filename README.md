`该插件是在业务开发过程中提取出来，方便解决浏览器UA判断问题。在实际业务开发中，前端通常会根据不同的浏览器环境展示不同的UI或执行不同的逻辑，可以说是一个高频使用。本插件目前只支持浏览器环境`

`最新版本细化了返回值，分别为wechart（微信环境）、pc（pc环境）、iSO（iOS系统）、iPad（iPad平板环境）以及android（安卓环境）`

**这是个人感觉在业务中可以使用到的环境（没必要再细分），如果还有其他需求，可以与我联系：lcy15201053004@gmail.com**

### 下载
npm install testua

### 引入
import testua from 'XX/testua'

### 使用
let word = testua