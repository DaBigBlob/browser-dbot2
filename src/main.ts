
import { LogConsole, LCLine } from './log_console/_.js';

window.onload = async (_) => {
    const lcelm = document.body.querySelector<HTMLDivElement>("#LogConsole");
    if (!lcelm) throw Error("No <div> with id LogConsole in body.");

    const lcbtmcb = document.body.querySelector<HTMLInputElement>("#LCJumpToLatestCheckBox");
    if (!lcbtmcb) throw Error("No <div> with id LCJumpToLatestCheckBox in body.");

    const lcbtmms = document.body.querySelector<HTMLInputElement>("#LCMaxSizeInput");
    if (!lcbtmms) throw Error("No <div> with id LCMaxSizeInput in body.");

    const con = new LogConsole(lcelm, () => lcbtmcb.checked, () => Number(lcbtmms.value));

    const el1 = new LCLine()
        .add({txt: "[hey]", fclor: "orange", bold: true})
        .add({txt: "[hoho]", fclor: "red"});
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
    }
}