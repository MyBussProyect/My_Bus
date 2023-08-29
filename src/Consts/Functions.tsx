export const toInvisible = (element: HTMLElement | HTMLElement[]) => {
    if (element instanceof HTMLElement) {
        element?.classList.contains("opacity-[1]") ?
            replaceClass(element, "opacity-[1]", "opacity-[0]") : addClass(element, "opacity-[0]");
        return element;
    } else {

        element?.map((el?: HTMLElement) => {
            if (!(el instanceof HTMLElement)) return false
            el?.classList.contains("opacity-[1]") ?
                replaceClass(el, "opacity-[1]", "opacity-[0]") : addClass(el, "opacity-[0]");
        })
    }
}

export const toVisible = (element: HTMLElement | HTMLElement[]) => {
    if (element instanceof HTMLElement) {
        element?.classList.contains("opacity-[0]") ?
            replaceClass(element, "opacity-[0]", "opacity-[1]") : addClass(element, "opacity-[1]");
        return element;
    } else {

        element?.map((el?: HTMLElement) => {
            if (!(el instanceof HTMLElement)) return false
            el?.classList.contains("opacity-[0]") ?
                replaceClass(el, "opacity-[0]", "opacity-[1]") : addClass(el, "opacity-[1]");
        })
    }
}
export const replaceClass = (element: HTMLElement | HTMLElement[], from: string, to: string) => {
    if (element instanceof HTMLElement) {
        element?.classList.replace(from, to);
        return element;
    } else {

        element?.map((el?: HTMLElement) => {
            if (!(el instanceof HTMLElement)) return false
            el?.classList.replace(from, to);
        })
    }
}
export const addClass = (element: HTMLElement | HTMLElement[], to: string) => {
    if (element instanceof HTMLElement) {
        element?.classList.add(to);
        return element;
    } else {

        element?.map((el?: HTMLElement) => {
            if (!(el instanceof HTMLElement)) return false
            el?.classList.add(to);
        })
    }
}
export const removeClass = (element: HTMLElement | HTMLElement[], from: string) => {
    if (element instanceof HTMLElement) {
        element?.classList.remove(from);
        return element;
    } else {

        element?.map((el?: HTMLElement) => {
            if (!(el instanceof HTMLElement)) return false
            el?.classList.remove(from);
        })
    }
}




export const toDisplayNone = (element: HTMLElement | HTMLElement[]) => {
    let has = false
    if (element instanceof HTMLElement) {
        displays.forEach(display => {
            if(display=='hidden')return false
            if (element?.classList.contains(display)) {
                has = true
                replaceClass(element, display, "hidden")
            }
        })
        if (!has) addClass(element, "hidden")
        return element;
    } else {

        element?.map((el?: HTMLElement) => {
            has = false
            if (!(el instanceof HTMLElement)) return false
            displays.forEach(display => {
                if(display=='hidden')return false
                if (el?.classList.contains(display)) {
                    has = true
                    replaceClass(el, display, "hidden")
                }
            })
            if (!has) addClass(element, "hidden")
            
        })
    }
}
export const toDisplay = (element: HTMLElement | HTMLElement[], to:string) => {
    let has = false
    if (element instanceof HTMLElement) {
        displays.forEach(display => {
            if(display==to)return false
            if (element?.classList.contains(display)) {
                has = true
                replaceClass(element, display, to)
            }
        })
        if (!has) addClass(element, to)
        return element;
    } else {

        element?.map((el?: HTMLElement) => {
            has = false
            if (!(el instanceof HTMLElement)) return false
            displays.forEach(display => {
                if(display==to)return false
                if (el?.classList.contains(display)) {
                    has = true
                    replaceClass(el, display, to)
                }
            })
            if (!has) addClass(element, to)
            
        })
    }
}


export const findElement = (query: string) => document.querySelector(query) as HTMLElement;

const displays =
    [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "grid",
        "inline-grid",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden"
    ]