show();
function show() {

  let html = ``;

  for (let i = 0; i < model.boss.length; i++) {
    html += `
    </div>
    <div class="boss">
    <div> ${model.boss[i].health}</div>
    <img src="${model.boss[i].name}" class="bossSize">
    </div>
    
    <div class="player">
    <div> ${model.player[i].health}</div>
    <img src="${model.player[i].name}" class="playerSize"</div>
    </div>
  
    <img onclick="attack(${i})" class="attack" src="pizzaplain.png">
    <img onclick="reset(${i})" class="reset" src="pizzatime.png">
`;
}

document.getElementById('app').innerHTML = html;
}