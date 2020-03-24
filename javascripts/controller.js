class Controller {
    constructor() {
        this.keys = {
          up: new Controller.ButtonInput(),
          right: new Controller.ButtonInput(),
          down: new Controller.ButtonInput(),
          left: new Controller.ButtonInput()
        };

        this.handleKeyChange = this.handleKeyChange.bind(this);
        this.handleClickChange = this.handleClickChange.bind(this);
    }

    handleKeyChange(e) {
        const keyDown = e.type === "keydown";
        switch(e.keyCode) {
            case 87:
                this.keys.up.setActive(keyDown);
                break;
            case 68:
                this.keys.right.setActive(keyDown);
                break;
            case 83:
                this.keys.down.setActive(keyDown);
                break;
            case 65:
                this.keys.left.setActive(keyDown);
                break;
        }
        console.log(this.keys);
    }

    handleClickChange(e) {

    }
}

Controller.ButtonInput = class {
    constructor() {
        this.active = false;
    }

    setActive(keyDown) {
        if (keyDown) this.active = true;
        else this.active = false;
    }
}

export default Controller;