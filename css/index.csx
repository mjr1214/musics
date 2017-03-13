@charset "UTF-8";
* {
  marin: 0;
  padding: 0;
  list-style: none; }

.top {
  width: 800px;
  height: 50px;
  margin: 0 auto;
  background: #da7cb1;
  padding-top: 5px; }
  .top .top-left {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 8px;
    background: url("../image/4.jpg") no-repeat center center/100% 130%;
    float: left;
    margin-top: 3px; }
  .top .lefts {
    width: 120px;
    height: 50px;
    line-height: 50px;
    float: left;
    margin-left: 10px;
    color: #ffe7f7; }
  .top .inputs {
    display: block;
    padding-left: 10px;
    width: 300px;
    height: 16px;
    float: left;
    outline: none;
    border: 0;
    border-radius: 15px;
    margin-top: 17px;
    margin-left: 54px; }
  .top .set {
    width: 30px;
    height: 30px;
    background: url("../image/49.png") no-repeat center center/80% 80%;
    float: left;
    margin-left: 20px;
    margin-top: 11px; }
  .top .skin {
    width: 30px;
    height: 30px;
    float: left;
    background: url("../image/11.png") no-repeat center center/85% 85%;
    margin-left: 20px;
    margin-top: 11px; }
    .top .skin .reds {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: red;
      margin-left: 15px; }
  .top .class {
    width: 30px;
    height: 30px;
    float: left;
    background: url("../image/50.png") no-repeat center center/75% 75%;
    margin-left: 20px;
    margin-top: 13px; }
  .top .small {
    width: 30px;
    height: 30px;
    float: left;
    background: url("../image/51.png") no-repeat center center/80% 80%;
    margin-left: 20px;
    margin-top: 12px; }
  .top .downs {
    width: 30px;
    height: 30px;
    float: left;
    background: url("../image/52.png") no-repeat center center/80% 80%;
    margin-left: 20px;
    margin-top: 13px; }

body {
  font-family: "微软雅黑"; }

.body {
  width: 800px;
  margin: 0 auto;
  background: url("../image/3.jpg") no-repeat center center/cover; }

.middle {
  width: 800px;
  height: 400px;
  margin: 0 auto; }

.controler {
  width: 100%;
  height: 80px;
  background: #edbbd6;
  position: relative; }
  .controler .bofang {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 40px;
    height: 40px;
    left: 50px;
    background: #f1818d;
    box-shadow: 0px 0px  3px #d861a3;
    cursor: pointer; }
    .controler .bofang img {
      width: 38px;
      height: 38px;
      margin-left: 1px;
      margin-top: 1px;
      position: absolute; }
    .controler .bofang .bo1 {
      display: block; }
    .controler .bofang .bo2 {
      display: none; }

.play {
  background: green; }

.pause {
  background: red; }

.shangyishou {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  box-shadow: 0px 0px  3px #d861a3;
  left: 5px;
  background: #f1818d url("../image/8.png") no-repeat center center/30px 30px;
  cursor: pointer; }

.xiayishou {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 105px;
  background: #f1818d url("../image/18.png") no-repeat center center/30px 30px;
  box-shadow: 0px 0px  3px #d861a3;
  cursor: pointer; }

.time-info {
  width: 111px;
  height: 40px;
  left: 152px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  text-align: center;
  line-height: 40px;
  color: #ffe7f7;
  letter-spacing: 0.0001em; }

.jindutiao {
  width: 150px;
  height: 2px;
  background: rgba(176, 65, 107, 0.5);
  border-radius: 15px;
  padding: 10px 0;
  background-clip: content-box;
  left: 280px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer; }
  .jindutiao .yuan {
    left: -5px;
    box-shadow: 0px 0px 3px #eaaeae;
    cursor: pointer; }
  .jindutiao .jins {
    height: 4px;
    background: #eaaeae;
    border-radius: 15px;
    left: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto; }

.yuan {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #eaaeae;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 0; }

.yinliang {
  width: 155px;
  height: 18px;
  right: 136px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer; }

.menu {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #f1818d;
  box-shadow: 0px 0px 3px #d861a3;
  cursor: pointer; }
  .menu img {
    position: absolute;
    width: 30px;
    height: 30px; }
  .menu .m2 {
    margin-left: 0px;
    display: none; }

.yinliangtiao {
  width: 80px;
  height: 2px;
  background: rgba(176, 65, 107, 0.5);
  border-radius: 15px;
  left: 50px;
  padding: 10px 0;
  background-clip: content-box;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto; }
  .yinliangtiao .yuan {
    padding: 5px 0;
    background-clip: content-box;
    left: 77px;
    box-shadow: 0px 0px 3px #eaaeae; }

.kuang {
  width: 150px;
  height: 80px;
  position: absolute;
  right: 0; }

.geci {
  cursor: pointer;
  width: 40px;
  height: 40px;
  margin-top: 20px;
  margin-left: 5px;
  margin-right: 5px;
  float: left;
  background: #f1818d;
  box-shadow: 0px 0px  3px #d861a3; }
  .geci img {
    width: 30px;
    height: 30px;
    margin-left: 5px;
    margin-top: 5px; }
  .geci .g2 {
    margin-top: -38px;
    display: none; }

.list {
  width: 40px;
  height: 40px;
  margin-top: 20px;
  float: left;
  background: #f1818d url("../image/27.png") no-repeat center center/30px 30px;
  box-shadow: 0px 0px  3px #d861a3;
  position: relative;
  cursor: pointer; }
  .list .lis {
    width: 160px;
    background: rgba(215, 187, 201, 0.7);
    box-shadow: 0px 0px 10px #fff inset;
    padding: 5px 10px;
    font-size: 14px;
    left: 99px;
    bottom: 46px;
    position: absolute;
    display: none;
    font-family: "微软雅黑";
    transition: transforme .8s ease;
    transform: translate3d(-181px, 0, 0); }
    .list .lis li {
      cursor: pointer;
      padding-bottom: 5px;
      margin-bottom: 8px;
      border-bottom: 1px dashed #eee; }
      .list .lis li.color {
        color: #e17eb7; }
      .list .lis li:hover {
        color: #ed9594; }

.songs {
  width: 40px;
  height: 40px;
  background: #f1818d url("../image/26.png") no-repeat center center/35px 35px;
  margin-top: 20px;
  float: left;
  margin-left: 5px;
  box-shadow: 0px 0px  3px #d861a3;
  font-family: "微软雅黑";
  color: #ffe7f7;
  font-size: 13px;
  text-shadow: 2px 3px 2px #666;
  cursor: pointer; }

.order {
  width: 40px;
  height: 40px;
  box-shadow: 0px 0px  3px #d861a3;
  background: url("../image/34.png") no-repeat center center/30px 30px;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 309px; }
  .order .shunxukuang {
    width: 100px;
    height: 180px;
    padding: 5px 10px;
    background: rgba(215, 187, 201, 0.7);
    position: absolute;
    top: -219px;
    left: -43px;
    display: none;
    font-family: "微软雅黑"; }
    .order .shunxukuang li {
      margin-left: 13px;
      padding: 2px 5px;
      margin-bottom: 5px;
      cursor: pointer; }
      .order .shunxukuang li.active {
        color: #e17eb7; }
      .order .shunxukuang li:hover {
        color: #ed9594; }
  .order .triangle {
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-top-color: #333;
    position: absolute;
    top: -12px;
    left: 12px;
    display: none; }

.table {
  width: 270px;
  height: 400px;
  float: left; }
  .table .gequtiao {
    width: 270px;
    height: 65px;
    box-sizing: border-box; }
    .table .gequtiao .zhaopian {
      width: 25%;
      height: 40px;
      float: left; }
    .table .gequtiao .z1, .table .gequtiao .z2, .table .gequtiao .z3, .table .gequtiao .z4 {
      width: 65px;
      height: 65px; }
    .table .gequtiao .z1 img {
      width: 65px;
      height: 65px; }
    .table .gequtiao .z2 img {
      width: 28px;
      height: 28px;
      margin-left: 21px;
      margin-top: 18px; }
    .table .gequtiao .z3 img {
      width: 33px;
      height: 33px;
      margin-left: 15px;
      margin-top: 15px; }
    .table .gequtiao .z4 img {
      width: 32px;
      height: 32px;
      margin-left: 18px;
      margin-top: 18px; }
    .table .gequtiao .bendi {
      width: 25%;
      height: 40px;
      float: left; }
    .table .gequtiao .wangluo {
      width: 25%;
      height: 40px;
      float: left; }
    .table .gequtiao .lie {
      width: 25%;
      height: 40px;
      background: red;
      float: left; }
  .table .tables {
    width: 100%;
    height: 324px;
    position: absolute;
    left: 0;
    top: 13px;
    display: block; }
  .table .xuanxiang {
    width: 100%;
    height: 324px;
    position: relative; }
  .table .zhaopians {
    width: 100%;
    height: 324px;
    position: absolute;
    left: 0;
    top: -16px;
    display: none; }
    .table .zhaopians img {
      width: 150px;
      height: 150px;
      margin-left: 30px;
      margin-top: 78px; }
    .table .zhaopians .zzs {
      width: 80%;
      height: 40px;
      font-family: "微软雅黑";
      font-size: 18px;
      margin-left: 30px;
      margin-top: 37px;
      color: #e17eb7; }
  .table .wangluos {
    width: 100%;
    height: 324px;
    position: absolute;
    left: 0;
    top: -16px;
    display: none; }
    .table .wangluos .wl {
      width: 100%;
      height: 30px;
      border-bottom: 1px dashed #eee;
      color: #666;
      font-size: 14px;
      margin-bottom: 10px;
      margin-top: 15px;
      line-height: 30px; }
      .table .wangluos .wl img {
        width: 15px;
        height: 15px;
        margin-left: 5px;
        margin-top: 5px; }
  .table .bendis {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: -16px;
    display: none; }
    .table .bendis .bd {
      width: 100%;
      height: 30px;
      border-bottom: 1px dashed #eee;
      color: #666;
      font-size: 14px;
      margin-bottom: 10px;
      margin-top: 15px; }
      .table .bendis .bd .a {
        float: left; }
        .table .bendis .bd .a img {
          width: 15px;
          height: 15px;
          margin-left: 5px;
          margin-top: 5px;
          margin-right: 5px; }
      .table .bendis .bd .b {
        float: left;
        line-height: 26px; }
  .table li {
    width: 98%;
    padding-left: 15px;
    cursor: pointer;
    border-bottom: 1px dashed #eee;
    padding-bottom: 5px;
    margin-bottom: 5px;
    box-sizing: border-box;
    font-size: 14px;
    position: relative; }
    .table li div {
      float: left;
      height: 100%; }
    .table li .jia {
      display: none;
      margin-left: -10px;
      margin-right: 5px; }
    .table li .tubiao {
      position: absolute;
      top: 0;
      right: 0;
      display: none; }
    .table li .tu1 {
      width: 25px;
      height: 25px;
      margin-left: -140px;
      background: url("../image/love.png") no-repeat center center/25px 25px; }
    .table li .tu2 {
      margin-left: -110px;
      width: 25px;
      height: 25px;
      background: url("../image/delete.png") no-repeat center center/22px 22px; }
    .table li .tu3 {
      margin-left: -20px;
      width: 25px;
      height: 25px;
      background: url("../image/slh.png") no-repeat center center/25px 25px; }
    .table li.active {
      color: #e17eb7; }
    .table li.hover {
      background: #e8648b;
      color: #ed9594; }
  .table span {
    width: 30%;
    float: right; }

.orbit-wrapper {
  width: 530px;
  height: 400px;
  float: right;
  background: rgba(255, 255, 255, 0.3); }
