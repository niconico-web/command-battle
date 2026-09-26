const hp=document.getElementById("hp");
const atk=document.getElementById("atk");
const def=document.getElementById("def");
const ehp=document.getElementById("ehp");
const eatk=document.getElementById("eatk");
const edef=document.getElementById("edef");
const attack=document.getElementById("attack");
const deffence=document.getElementById("deffence");
const monsterSelect=document.getElementById("monster");
const player={
    name:"player",
    hp:100,
    atk:50,
    def:50
};
const slime={
    name:"slime",
    hp:50,
    atk:25,
    def:25
}
const golem={
    name:"slime",
    hp:50,
    atk:25,
    def:25
}
const dragon={
    name:"slime",
    hp:50,
    atk:25,
    def:25
}
if(monsterSelect.value=slime)
{
    ehp.textContent="hp:"+slime.hp;
    eatk.textContent="atk:"+slime.atk;
    edef.textContent="def:"+slime.def;
}
if(monsterSelect.value=golem)
{
    ehp.textContent="hp:"+golem.hp;
    eatk.textContent="atk:"+golem.atk;
    edef.textContent="def:"+golem.def;
}
if(monsterSelect.value=dragon)
{
    ehp.textContent="hp:"+dragon.hp;
    eatk.textContent="atk:"+dragon.atk;
    edef.textContent="def:"+dragon.def;
}
hp.textContent="hp:"+player.hp;
atk.textContent="atk:"+player.atk;
def.textContent="def:"+player.def;

attack.addEventListener("click",function () {
    enemy.hp-=player.atk/2;
    alert("自分の攻撃！");
    ehp.textContent="hp:"+enemy.hp;
    alert("相手からの攻撃！");
    player.hp-=enemy.atk-player.def/2;
    hp.textContent="hp:"+player.hp;
    
    if(enemy.hp<=0){
        window.location.href="result.html";
    }
});
deffence.addEventListener("click",function(){
    alert("防御態勢！");
    alert("相手からの攻撃！");
    player.hp-=enemy.atk/2-player.def/2;
    hp.textContent="hp:"+player.hp;
});
