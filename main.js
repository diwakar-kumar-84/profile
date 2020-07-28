var arr = [];
function change(r, c) {
  console.log(r, c);

  var i = 0;
  if (r == 0) {
    i = 0;

    document.getElementsByClassName("column")[i + c].style.backgroundColor =
      "red";
    if (arr.length >= 2) {
      document.getElementsByClassName("column")[arr[0]].style.backgroundColor =
        "blue";
      arr.shift();
    }
    arr.push(i + c);
  } else if (r == 1) {
    i = 4;
    document.getElementsByClassName("column")[c + i].style.backgroundColor =
      "red";
    if (arr.length >= 2) {
      document.getElementsByClassName("column")[arr[0]].style.backgroundColor =
        "blue";
      arr.shift();
    }
    arr.push(i + c);
  } else if (r == 2) {
    i = 8;
    document.getElementsByClassName("column")[c + i].style.backgroundColor =
      "red";
    if (arr.length >= 2) {
      document.getElementsByClassName("column")[arr[0]].style.backgroundColor =
        "blue";
      arr.shift();
    }
    arr.push(i + c);
  } else if (r == 3) {
    i = 12;
    document.getElementsByClassName("column")[c + i].style.backgroundColor =
      "red";
    if (arr.length >= 2) {
      document.getElementsByClassName("column")[arr[0]].style.backgroundColor =
        "blue";
      arr.shift();
    }
    arr.push(i + c);
  }
  console.log(arr);
}
