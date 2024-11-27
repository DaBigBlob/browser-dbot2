export type LCFrag = {
    txt: string;
    fclor?: string;
    bgclor?: string;
    bold?: true;
}

export class LCLine {
    public pre: Array<LCFrag> = [];
    private LCFrag_spawn(frag: LCFrag) {
        const n: HTMLSpanElement = document.createElement('span');
        if (frag?.fclor) n.style.color = frag.fclor;
        if (frag?.bgclor) n.style.backgroundColor = frag.bgclor;
        if (frag?.bold) n.style.fontWeight = 'bold';
        n.textContent = frag.txt;
        n.style.display = 'inline';
        return n;
    }
    public add(_frag: LCFrag): LCLine {
        this.pre.push(_frag);
        return this;
    }
    public spawn(): HTMLSpanElement {
        const _new = document.createElement('span');
        _new.style.display = 'block';
        _new.style.width = '100%';
        this.pre.forEach((val, _idx, _arr) => _new.appendChild(this.LCFrag_spawn(val)));
        return _new;
    }
    public clone(): LCLine {
        const _new = new LCLine();
        this.pre.forEach((val, _idx, _arr) => _new.pre.push(val));
        return _new;
    }
}

export class LogConsole {
    public readonly root: HTMLDivElement;
    private offset: number = 0;
    private size: number = 0;

    constructor() {
        const tr = document.body.querySelector<HTMLDivElement>("#LogConsole");
        if (!tr) throw Error("No <div> with id LogConsole in body.");
        this.root = tr;
    }

    public push(_new: HTMLSpanElement): LogConsole {
        this.size++;
        _new.id = `i${this.size+this.offset}`; // natural number
        this.root.appendChild(_new);
        _new.scrollIntoView();
        return this;
    }

    public trunc(_max_size: number) {
        if (this.size > _max_size) {
            const _s = this.size, _o = this.offset;
            for (let i = _o+1; i <= _o-_max_size+_s; i++) {
                this.root.querySelector<HTMLSpanElement>(`#i${i}`)?.remove();
                this.offset++;
                this.size--;
            }
        }
    }
}