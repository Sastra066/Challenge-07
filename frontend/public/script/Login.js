// // + function($) {
// //     $('.palceholder').click(function() {
// //       $(this).siblings('input').focus();
// //     });
  
// //     $('.form-control').focus(function() {
// //       $(this).parent().addClass("focused");
// //     });
  
// //     $('.form-control').blur(function() {
// //       var $this = $(this);
// //       if ($this.val().length == 0)
// //         $(this).parent().removeClass("focused");
// //     });
// //     $('.form-control').blur();
  
// //     // validetion
// //     $.validator.setDefaults({
// //       errorElement: 'span',
// //       errorClass: 'validate-tooltip'
// //     });
  
// //     $("#formvalidate").validate({
// //       rules: {
// //         userName: {
// //           required: true,
// //           minlength: 6
// //         },
// //         userPassword: {
// //           required: true,
// //           minlength: 6
// //         }
// //       },
// //       messages: {
// //         userName: {
// //           required: "Please enter your username.",
// //           minlength: "Please provide valid username."
// //         },
// //         userPassword: {
// //           required: "Enter your password to Login.",
// //           minlength: "Incorrect login or password."
// //         }
// //       }
// //     });
  
// //   }(jQuery);


// var x, i, j, l, ll, selElmnt, a, b, c;
// /* Look for any elements with the class "custom-select": */
// x = document.getElementsByClassName("custom-select");
// let element = document.getElementById("belakang");



// l = x.length;
// for (i = 0; i < l; i++) {
//   selElmnt = x[i].getElementsByTagName("select")[0];
//   ll = selElmnt.length;
//   /* For each element, create a new DIV that will act as the selected item: */
//   a = document.createElement("DIV");
//   a.setAttribute("class", "select-selected");
//   a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
//   x[i].appendChild(a);
//   /* For each element, create a new DIV that will contain the option list: */
//   b = document.createElement("DIV");
//   b.setAttribute("class", "select-items select-hide");
//   for (j = 1; j < ll; j++) {
//     /* For each option in the original select element,
//     create a new DIV that will act as an option item: */
//     c = document.createElement("DIV");
//     c.innerHTML = selElmnt.options[j].innerHTML;
//     c.addEventListener("click", function(e) {
//         /* When an item is clicked, update the original select box,
//         and the selected item: */
//         var y, i, k, s, h, sl, yl;
//         s = this.parentNode.parentNode.getElementsByTagName("select")[0];
//         sl = s.length;
//         h = this.parentNode.previousSibling;
//         for (i = 0; i < sl; i++) {
//           if (s.options[i].innerHTML == this.innerHTML) {
//             s.selectedIndex = i;
//             h.innerHTML = this.innerHTML;
//             y = this.parentNode.getElementsByClassName("same-as-selected");
//             yl = y.length;
//             for (k = 0; k < yl; k++) {
//               y[k].removeAttribute("class");
//             }
//             this.setAttribute("class", "same-as-selected");
//             break;
//           }
//         }
//         h.click();
//         console.log(selElmnt.value);
//     });
//     b.appendChild(c);
//   }
//   x[i].appendChild(b);
//   a.addEventListener("click", function(e) {
//     /* When the select box is clicked, close any other select boxes,
//     and open/close the current select box: */
//     e.stopPropagation();
//     closeAllSelect(this);
//     this.nextSibling.classList.toggle("select-hide");
//     this.classList.toggle("select-arrow-active");
//     this.onclick = input();
//   });
// }

// function closeAllSelect(elmnt) {
//   /* A function that will close all select boxes in the document,
//   except the current select box: */
//   var x, y, i, xl, yl, arrNo = [];
//   x = document.getElementsByClassName("select-items");
//   y = document.getElementsByClassName("select-selected");
//   xl = x.length;
//   yl = y.length;
//   for (i = 0; i < yl; i++) {
//     if (elmnt == y[i]) {
//       arrNo.push(i)
//     } else {
//       y[i].classList.remove("select-arrow-active");
//     }
//     document.body.style.backgroundColor = "white";
//   }
//   for (i = 0; i < xl; i++) {
//     if (arrNo.indexOf(i)) {
//       x[i].classList.add("select-hide");
//     }
//   }
// }

// function input() {
//     let parentElement = document.body;
//     let element = document.getElementById("belakang");
//     element.classList.add("belakang");
//     let form =document.getElementById("form");
//     form.classList.add("zindex");
// }



// function inputDone(){
//     var done = document.getElementById("belakang");
//     done.classList.remove("belakang");
//     let form =document.getElementById("form");
//     form.classList.remove("zindex");
// }

// /* If the user clicks anywhere outside the select box,
// then close all select boxes: */
// document.addEventListener("click", closeAllSelect);

// function cariMobil() {
//   window.location = "http://localhost:8000/cars";
// }

// function toHomePage(link){
//   window.location = "http://localhost:8000/" + link;
// }

