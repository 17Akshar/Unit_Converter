const units = []
var user_choice; 
function ShowModal(n){
var demo = document.getElementsByClassName('unit')
for(var i=0;i<demo.length;i++){
  units.push(demo[i].innerText);
}
user_choice = units[n-1]
document.getElementById('main-tit').innerText  = user_choice
GetUnits()

  if(document.querySelector('.modal').style.display == "none"){
    document.querySelector('.modal').style.display = "flex";
  }
  else{
    HideModal();
  }
}
function HideModal(){
  document.querySelector('.modal').style.display = "none ";
  var sel = document.getElementById('unit_list')
  sel.innerHTML =  `<option selected>Select the units</options>`
}
var sub_units = []
function GetUnits(){
  const search = user_choice.toLowerCase()
  console.log(search)
  console.log(Qty.getKinds().sort())
  sub_units = Qty.getUnits(search)
//  console.log( Qty.getUnits('memory'))

  var sel = document.getElementById('unit_list')
  for(var i = 0;i<sub_units.length;i++){
    var option  = document.createElement('option')
    option.text = sub_units[i];
    option.value = sub_units[i];
    sel.appendChild(option)
  }


}
function ConvertUnit(){
  var tbody = document.getElementById("table_body")
  var in_val = document.getElementById("in_value").value;
  var in_unit = document.getElementById('unit_list').value;
  var units_short = Qty.getAliases(in_unit) 
  var qty  = new Qty(in_val+" "+in_unit)
  var unit_short = units_short[0];
  let html = ''
  for(var i=0;i<sub_units.length;i++){
    var new_unit = Qty.getAliases(sub_units[i])
    var res = Qty(in_val+" "+unit_short).to(new_unit[0])
    html += `<tr>
    <th >${new_unit[0]}</th>
    <td>${res.scalar.toFixed(5)}</td>
  </tr>`
    tbody.innerHTML = html
  }

}


