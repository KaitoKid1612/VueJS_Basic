<p align="center"><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><img width="100" src="https://vuejs.org/images/logo.png" alt="Vue logo"></a></p>

<p align="center">
  <a href="https://circleci.com/gh/vuejs/vue/tree/dev"><img src="https://img.shields.io/circleci/project/github/vuejs/vue/dev.svg" alt="Build Status"></a>
  <a href="https://codecov.io/github/vuejs/vue?branch=dev"><img src="https://img.shields.io/codecov/c/github/vuejs/vue/dev.svg" alt="Coverage Status"></a>
  <a href="https://npmcharts.com/compare/vue?minimal=true"><img src="https://img.shields.io/npm/dm/vue.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/v/vue.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/l/vue.svg" alt="License"></a>
  <a href="https://chat.vuejs.org/"><img src="https://img.shields.io/badge/chat-on%20discord-7289da.svg" alt="Chat"></a>
  <br>
  <a href="https://app.saucelabs.com/builds/50f8372d79f743a3b25fb6ca4851ca4c"><img src="https://app.saucelabs.com/buildstatus/vuejs" alt="Build Status"></a>
</p>

<h2 align="center">Supporting Vue.js</h2>

# VueJS_Basic
## Tất cả dữ liệu truyền qua HTML đều là dữ liệu thô
#### Ep02 | #04 | Kỹ thuật bind và sử dụng trong HTML Tag
VueJS chỉ làm việc với các thẻ Tag của HTML không làm việc với các thẻ attribute của HTML nếu muốn sử dụng thì phải dùng v-bind cho thẻ đó.
#### Ep02 | #05 | V-ONCE tuyệt vời trong việc tối ưu hóa dữ liệu
Dùng V-ONCE khi muốn cập nhật dữ liệu mà sử dụng lại nội dung cũ
#### Ep02 | #06 | Đẩy dữ liệu HTML ra trang web trong vuejs
Khi bạn muốn render dữ liệu html ra trang web trong Vuejs bạn cần sử dụng thẻ v-html="" trong atribute
#### Ep02 | #07 | V-ON lắng nghe sự kiện một Directives Vue JS
Lắng nghe sự kiện sử dụng v-on, muốn lắng nghe sự kiện gì thì thêm vào sau v-on
#### Ep02 | #08 | Hiểu về tham số event một đối tượng JS
Lắng nghe sự kiện bằng event trong một đối tượng
#### Ep02 | #09 | Tùy biến đối tượng event trong Vue JS
Có 2 cách để dừng việc lắng nghe sự kiện hiện tại, modifine một event:
- Viết một function khác thực thi câu lệnh dừng
- Thêm phương thức stop vào attribute binding
#### Ep02 | #10 | Sự kiện tương tác với bàn phím trong Vue JS
Vuejs cho phép người dùng dễ dàng tương tác với bàn phím
#### Ep02 | #11 | Khả năng mạnh mẽ viết có JS trực tiếp Vue JS
Có thể viết javascript vào trong VueJS
#### Ep02 | #12 | Cách hai để Bind một dữ liệu trong Vue JS
#### Ep02 | #13 | Tối ưu hóa code qua phương thức computed trong Vue JS
Nhược điểm của method là nó sẽ chạy cùng lúc những phương thức khác nên khi chỉ dùng một function thì dùng computed
Computed được thực hiện như một function nhưng nó chỉ được coi là một thuộc tính chứ không phải là một phương thức
Computed chạy trước method
#### Ep02 | #14 | Theo dõi biến với watch, phương thức tuyệt vời
Computed và watcher thường được đi kèm với nhau
Watcher theo dõi sự thay đổi của biến để làm một hành động nào đó
Phần computed và watcher làm tối ưu code
#### Ep02 | #15 | Rút gọn với shorthand của Vue JS
Bạn có thể dùng shorthand cho một số sự kiện 
Ví dụ: v-on:click = @click
#### Ep02 | #16 | Tương tác với CSS thông qua Class Attribute
Cách quản lý theo đối tượng 
Quản lý đối tượng trực tiếp trên đối tượng
Quản lý trên chính đối tượng của chính nó
#### Ep02 | #17 | Tương tác với CSS thông qua biến Name
Quản lý thông qua biến và thông qua name
Ưu điểm: Thay đổi theo tên muốn thay đổi thì chỉ cần thay đổi tên
#### Ep02 | #18 | Tương tác với CSS mà không cần class
Không cần Css class sử dụng bằng cách JavaScript. Chú ý là khi sử dụng cách này thì phải viết tên biến theo kiểu JavaScript
Những thuộc tính có đơn vị thêm vào cuối
#### Ep02 | #19 | Sử dụng cú pháp mảng khi tương tác vs CSS
---
### Vòng lặp trong VueJS
#### Ep 03 | #01 | Điều kiện trong Vue JS sử dụng thế nào
Trong VueJS thì sử dụng v-if và v-else để check điều kiện if else.
Khi sử dụng để remove một phần tử thì nó sẽ remove cả phần tử cha và phần tử con nằm trong nó
#### Ep 03 | #02 | Thuật ngữ alternative và v-if trong Vue.js
VueJS không sinh bất cứ thành phần nào vào đoạn mã html. Gọi là Alternative
#### Ep03 | #03 | Detach với v-show trong Vue.js và tại sao???
Khi sử dụng v-if sẽ performance cho hệ thống. Tối ưu hơn
Khi sử dụng v-show thì nó sẽ thêm một style display: none vào.
Một số model sẽ thêm một vài thuộc tính vào html. Những cái này gọi là Detach
v-show không sử dụng cho thẻ template của VueJS
#### Ep03 | #04 | Duyệt vòng lặp với v for trong Vue.js
Sử dụng vòng lặp v-for để in ra với kiểu mảng:
```HMTL
    data: {
        menus: ['Home', 'About', 'Blog', 'Contact', 'FAQ']
    }

    <ul>
        <li v-for="menu in menus">{{ menu }}</li>
    </ul>
```
#### Ep03 | #05 | Vị trí của các phần tử duyệt với v-for trong Vue.js
Với việc dùng vòng lặp v-for trong VueJS để có thể duyệt qua tất cả các phần tử của một mảng và lấy giá trị index:
```HTML
<!-- Getting the Current Index -->
<ul>
    <li v-for="(menu, i) in menus">{{ menu }} with index is: {{ i }}</li>
</ul>
```
#### Ep03 | #06 | Sử dụng alternative với v-for qua Vue JS
v-for cũng có thể sử dụng alternative để có thể quản lý các blog code có thể sử dụng Template để viết các khối code ở trong đó
#### Ep03 | #07 | Xét duyệt vòng lặp với đối tượng trong Vue JS
Khi duyệt đối tượng sẽ duyệt từng phần tử một ở trong đối tượng sau đó phải tạo thêm một v-for để lặp qua các property sẽ in ra các được giá trị.
Phải sử dụng 2 vòng for.
Có thể sử dụng value, key, index
```HTML
<ul>
    <li v-for="student in students">
        <div v-for="(value, key, index) in student">{{ key }}: {{ value }}({{ index }})</div>
    </li>
</ul>
```
#### Ep03 | #08 | Xét duyệt vòng lặp for theo thứ tự Vue.js
Looping through a List of Numbers
#### Ep03 | #09 | Khả năng keep track của Vue.js, cách hoạt động
Khả năng theo dõi phần tử thay đổi. Không xoá hết toàn bộ mà in tiếp vàoo phần tử tiếp theo của mảng.
Khả năng theo dõi phần tử thay đổi. Không xoá hết toàn bộ mà in tiếp vàoo phần tử tiếp theo của mảng.
Khi bạn duyệt vòng lặp và có 5 phần tử menu thì VueJS sẽ sinh ra 5 cái unique key assign

<!-- -->
----------------------------------------------------------------------------------
### First Project with VueJS
#### Ep04 | #01 | Thiết lập Mini Project đầu tiên với Vue.js
#### Ep04 | #02 | Thực hiện điều chỉnh lượng HP Vue.js
#### Ep04 | #03 | Thiết lập điều kiện để bắt đầu trò chơi Vue.js
#### Ep04 | #04 | Thiết lập các thông số khi bắt đầu trò chơi Vue.js
#### Ep04 | #05 | Thiết lập tấn công cho đối tượng bằng Vue.js
#### Ep04 | #06 | Thiết lập tối ưu cho tấn công Vue.js
#### Ep04 | #07 | Xây dựng phương thức tấn công đặc biệt Vue.js
#### Ep04 | #08 | Xây dựng phương thức hồi máu Vue.js
#### Ep04 | #09 | Xây dựng phương thức bỏ cuộc Vue.js
#### Ep04 | #10 | Thiết lập phương thức log cho trò chơi Vue.js
#### Ep04 | #11 | Phương thức hiển thị quá trình chơi game Vue.js 
#### Ep04 | #12 | Sửa một số lỗi hiển thị của trò chơi Vue.js
#### Ep04 | #13 | Style cho hiển thị log trong trò chơi Vue.js
----------------------------------------------------------------------------------
### How about VueJS Instance
#### Ep05 | #01 | Một vài điều cơ bản về Vue.js Instance
Trong VueJS có thể tạo nhiều Instance để quản lý nhiều đối tượng
Đối tượng nào thì quản lý cái nào khôngg quản lý cái khác
#### Ep05 | #02 | Sử dụng Multiple Vue.js Instance
Cách sử dụng Multiple Instance và cách truy cập từ bên ngoài Instance
Có thể tạo nhiều Instance
#### Ep05 | #03 | Truy cập Vue.js Instance từ bên ngoài
Có thể truy cập một Instance từ bên ngoài Instance đó
#### Ep05 | #04 | Vue.js quản lý Data và Methods như thế nào?
VueJS quản lý methods và data bằng cách có thể tạo ra bộ theo dõi getter và setter khi mà tạo các methods, property ở trong Instance. 
Chỉ được theo dõi khi tạo trong Instance khi tạo ngoài Instance không có ý nghĩa gì hết.
#### Ep05 | #05 | Tìm hiểu kĩ hơn về el và data trong Vue.js
#### Ep05 | #06 | Lấy thông tin của một Object bằng refs trong Vue.js
#### Ep05 | #07 | Tìm hiểu thêm về Vue.js API Link
#### Ep05 | #08 | Tìm hiểu ban đầu về Component trong Vue.js
Cách để VueJS có thể quản lý nhiều đối tượng DOM trong một Instance là tạo Component
Component sinh ra để một Instance quản lý được nhiều đối tượng. 
Component luôn luôn được gọi ở đầu vì Vue instance luôn phải lấy ra những dữ liệu có sẵn để mang ra để sử dụng được nếu để sau thì trong Instance phải gọi nó
Do tính chất đầu tiên thế nên để các thẻ component quản lý ở ngoài Instance thì không quản lý được
#### Ep05 | #09 | Cách làm việc bên trong khi update data của Vue.js
Có 3 trạng thái làm việc với DOM trong VueJS:
- Vue Instance
- Virtual DOM
- DOM
#### Ep05 | #10 | Tìm hiểu về vòng đời hoạt động của Vue.js
<h3 align="center" style="color: red;">VueJS Instance Lifecycle</h3>
<p align="center"><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><img width="100%" src="https://vuejs.org/assets/lifecycle.16e4c08e.png" alt="Vue logo"></a></p>

#### Ep05 | #11 | Thực hành hiểu về vòng đời của Vue.js
VueJS Instance update data như thế nào ?
Lifecycle hooks của VueJS

----------------------------------------------------------------
### Server VueJS
#### Ep06 | #01 | Tại sao lại là môi trường server Vue.js
#### Ep06 | #02 | Dòng chảy khi run một đoạn code trên server Vue.js
#### Ep06 | #03 | Tìm hiểu qua về Vue Cli cho việc phát triển Vue.js
#### Ep06 | #04 | Cài đặt Vue Cli Simple-Project
#### Ep06 | #05 | Tìm hiểu cấu trúc dự án khi tạo bằng Vue.js CLI
#### Ep06 | #06 | Nghịch ngợm file App vue xem thế nào Vue.js 
#### Ep06 | #07 | Nghịch ngợm tiếp một số thành phần trong Vue.js
#### Ep06 | #08 | Pressing App một chút và kết thúc phần này Vue.js

----------------------------------------------------------------
### Component in VueJS
#### Ep07 | #01 | Khởi tạo một component thưở sơ khai Vue.js
#### Ep07 | #02 | Hai kiểu sử dụng dữ liệu qua Component Vue.js
Khai báo theo kiểu đối tượng Property thì nó sẽ share memory chung. 
Còn tạo đối tượng chứa dữ liệu thì chứa dữ liệu riêng not share
#### Ep07 | #03 | Đăng ký vùng hoạt động cho Component Vue.js 
Có 2 cách để sử dụng Component chung cho hai hoặc nhiều instance:
- Cách 1 sử dụng Vue.componet và khai báo tên component 
- Cách 2 sử dụng khai báo component và Instance nào muốn sử dụng thì phải đăng kí với tên component ở trong Instance
#### Ep07 | #04 | Phản biện tìm ra Root Component Vue.js
#### Ep07 | #05 | Tạo một component trong Vue.js CLI
Cách tạo ra một component.
#### Ep07 | #06 | Sử dụng một component trong Vue.js CLI
Tạo kiểu component trong global
#### Ep07 | #07 | Sử dụng cấu trúc thư mục "tốt" trong Vue.js
Import đúng vị trí file.
#### Ep07 | #08 | Những cách đặt tên component trong Vue.js
#### Ep07 | #09 | Phạm vi hoạt động style trong component Vue.js
Nếu chúng ta không viết scope vào nó sẽ coi đó là css chung cho toàn bộ hệ thống. 
Nếu viết có scope thì nó sẽ thêm abtribute cho nó và các phần tử con của nó để nó có thể css và phân biệt được.
Khi sinh component thì sinh ra bấy nhiêu thẻ style. Nếu như không viết gì cho component thì thẻ style đó sẽ trống

----------------------------------------------------------------
### Component advance in VueJS
#### Ep08 | #01 | Vấn đề khi giao thức giữa các components Vue.js
#### Ep08 | #02 | Props giao thức giữa component cha và con Vue.js
Props là dùng để truyền dữ liệu từ component cha sang component con.
Các components conn truyền thông báo đến các components cha thông qua các sự kiện
#### Ep08 | #03 | Vấn đề tên truyền qua Props trong Vue.js
#### Ep08 | #04 | Sử dụng Props Vue.js cho component con thế nào?
#### Ep08 | #05 | Validating trong Props
#### Ep08 | #06 | Tuỳ chỉnh một sự kiện trong component con Vue.js
Để cho cha của component biết được thì con phải tạo một sự kiện để gửi lên và bên cha sẽ lắng nghe sự kiện đó
#### Ep08 | #07 | Giao thức một chiều giữa các components Vue.js
#### Ep08 | #08 | Việc giao thức qua Callback Functions Vue.js
Cách sử dụng giao thức với callback functions Vue.js
Thay đổi dữ liệu của parent and child đồng thời
#### Ep08 | #09 | Truyền dữ liệu components con cùng cấp Vue.js
#### Ep08 | #10 | Sử dụng sự kiện Bus cho việc giao thức Vue.js
#### Ep08 | #11 | Tập trung bên trong sự kiện Bus nhiều hơn Vue.js
----------------------------------------------------------------
#### Ep09 | #01 | Thiết lập một module đơn giản trong Vue.js
#### Ep09 | #02 | Truyền nội dung và nêu ra vấn đề gặp phải Vue.js
#### Ep09 | #03 | Giải quyết vấn đề truyền nội dung qua Slots Vue.js
#### Ep09 | #04 | Slots liệu có biên dịch, style bình thường Vue.js
#### Ep09 | #05 | Sử dụng nhiều slots cùng một lúc trong Vue.js
#### Ep09 | #06 | Default Slots và Slot Default là gì?
#### Ep09 | #07 | Tổng hợp và chú ý kiến thức về Slots trong Vue.js
Slot là một thẻ đẻ giữ vị trí.
Thoả mãn tất cả nhưng gì mình viết style.
Truyền dữ liệu qua slot thì cũng bình thường. Có thể sử dụng được multi có thể viết nhiều slot.
Phân biệt default slot và slot default 
#### Ep09 | #08 | Chuyển đổi giữa các components trong Vue.js
#### Ep09 | #09 | Vấn đề khi chuyển đổi các components Vue.js
#### Ep09 | #10 | Giữ các components alive khi chuyển đổi Vue.js