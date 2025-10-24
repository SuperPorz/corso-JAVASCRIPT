function manageMouseDown(e) {
    let img = e.target;

    let xOffset = e.clientX - img.getBoundingClientRect().left;
    let yOffset = e.clientY - img.getBoundingClientRect().top;

    img.style.position = 'absolute';
    img.style.zIndex = 500;

    document.body.append(img);
    moveElement(e.pageX, e.pageY);

    function moveElement(pageX, pageY) {
        img.style.left = pageX - xOffset + 'px';
        img.style.top = pageY - yOffset + 'px';
    }

    function manageMouseMove(e) {
        moveElement(e.pageX, e.pageY);
    }

    document.addEventListener('mousemove', manageMouseMove);

    function manageMouseUp(e) {
        document.removeEventListener('mousemove', manageMouseMove);
        //this.onmouseup = null;

        this.hidden = true;
        let elementUnderItem = document.elementFromPoint(e.clientX, e.clientY);
        this.hidden = false;

        if (!elementUnderItem) return;
        let hostElement = elementUnderItem.closest('.dr');

        hostElement.append(img);
        img.setAttribute("style", "");
    };

    img.addEventListener("mouseup", manageMouseUp, {once: true})
};

export default manageMouseDown;