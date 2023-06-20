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
Khả năng theo dõi phần tử thay đổi. Không xoá hết toàn bộ mà in tiếp vàoo phần tử tiếp theo của mảng
Khi bạn duyệt vòng lặp và có 5 phần tử menu thì VueJS sẽ sinh ra 5 cái unique key assign
