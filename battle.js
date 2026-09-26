const hp=document.getElementById("hp");
const atk=document.getElementById("atk");
const def=document.getElementById("def");
const ehp=document.getElementById("ehp");
const eatk=document.getElementById("eatk");
const edef=document.getElementById("edef");
const attack=document.getElementById("attack");
const deffence=document.getElementById("deffence");
const player={
    name:"player",
    hp:100,
    atk:50,
    def:50
};
const slime = { name: "slime", hp: 50, atk: 25, def: 25 };
const stolen = { name: "stolen", hp: 100, atk: 50, def: 30 };
const golem = { name: "golem", hp: 150, atk: 100, def: 50 };
const dragon = { name: "dragon", hp: 200, atk: 150, def: 100 };

const monster=document.getElementById("monster")



if(monsterSelect.value==slime)
{
    const enemy={...slime};
}
if(monsterSelect.value==stolen)
{
    const enemy={...stolen};
}
if(monsterSelect.value==golem)
{
    const enemy={...golem};
}
if(monsterSelect.value==dragon)
{
    const enemy={...dragon};
}
hp.textContent="hp:"+player.hp;
atk.textContent="atk:"+player.atk;
def.textContent="def:"+player.def;
ehp.textContent="hp:"+enemy.hp;
eatk.textContent="atk:"+enemy.atk;
edef.textContent="def:"+enemy.def;

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
