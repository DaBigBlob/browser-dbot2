
import { LogConsole, LCLine } from './log_console/mod.js';

window.onload = async (_) => {
    const con = new LogConsole();

    const el1 = new LCLine()
        .add({txt: "[hey]", fclor: "red", bold: true})
        .add({txt: "[hoho]", fclor: "green"});
    // const el2 = new LCLine()
    //     .add(new LCFrag("[hey]", {font_color: "red", bold: true}))
    //     .add(new LCFrag("[hoho]", {font_color: "green"}));
    
    // con.push(el1.clone().add(new LCFrag("r1")).elem());
    // con.push(el2.clone().add(new LCFrag("r2")).elem());
    // con.push(el1.clone().add(new LCFrag("r3")).elem());

    let i = 1;
    while (true) {
        await (() => new Promise(resolve => setTimeout(resolve, 100)))();
        con.push(el1.clone().add({txt: ""+i++}).spawn());
        con.trunc(100);
    }
}